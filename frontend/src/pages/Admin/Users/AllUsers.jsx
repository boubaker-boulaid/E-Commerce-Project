import React from "react";
import { useResource } from "../../../hooks/useResource";
import "../Admin.css";

const formatDate = (value) =>
  new Date(value).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

function AllUsers() {
  const { data, error, actionToResource } = useResource("users");
  const users = data?.data ?? [];

  const handleRoleChange = async (user, role) => {
    try {
      await actionToResource(`/${user.id}`, "patch", { role });
    } catch (err) {
      alert(err.response?.data?.message ?? "Could not change the role.");
    }
  };

  const handleDelete = async (user) => {
    if (!confirm(`Delete ${user.name}'s account?`)) return;

    try {
      await actionToResource(`/${user.id}`, "delete");
    } catch (err) {
      alert(err.response?.data?.message ?? "Could not delete the user.");
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h2 className="h2 section-title" style={{ textAlign: "left" }}>
            All Users
          </h2>
          <p className="admin-page-subtitle">
            {users.length} accounts, not counting yours
          </p>
        </div>
      </div>

      <div className="admin-card">
        {error ? (
          <p className="admin-empty">Could not load the users.</p>
        ) : users.length === 0 ? (
          <p className="admin-empty">No other users yet.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="admin-product-cell">
                      <span className="admin-avatar">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                      {user.name}
                    </div>
                  </td>
                  <td className="admin-muted">{user.email}</td>
                  <td>
                    <select
                      className="admin-role-select"
                      value={user.role}
                      aria-label={`Role for ${user.name}`}
                      onChange={(e) => handleRoleChange(user, e.target.value)}
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td className="admin-muted">{formatDate(user.created_at)}</td>
                  <td>
                    <button
                      type="button"
                      className="admin-icon-btn danger"
                      aria-label={`Delete ${user.name}`}
                      onClick={() => handleDelete(user)}
                    >
                      <ion-icon name="trash-outline"></ion-icon>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AllUsers;
