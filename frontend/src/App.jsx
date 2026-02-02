import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Favorites from "./pages/Favorites/Favorites";
import ContactUs from "./pages/ContactUs/ContactUs";
import Cart from "./pages/Cart/Cart";
import "./App.css";
import AboutUs from "./pages/AboutUs/AboutUs";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import { useAuth } from "./hooks/useAuth";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import UserRoutes from "./routes/UserRoutes";
import AdminRoute from "./routes/AdminRoute";
import AdminLayout from "./layouts/AdminLayout";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import AllProducts from "./pages/Admin/Products/AllProducts";
import AllUsers from "./pages/Admin/Users/AllUsers";
import AddProduct from "./pages/Admin/Products/AddProduct";
import EditeProduct from "./pages/Admin/Products/EditeProduct";

function App() {
  return (
    <>
      <Routes>

        {/* admin routes */}
        <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>} >
            <Route index element={<Dashboard />} />
            <Route path="products" element={<AllProducts />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="products/edite/:id" element={<EditeProduct />} />
            <Route path="users" element={<AllUsers />} />
        </Route>

        {/* users routes */}
        <Route path="/" element={<UserRoutes><MainLayout/> </UserRoutes>}>
          <Route index element={<Landing />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>}/>
          <Route path="cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about" element={<AboutUs />} />
        </Route>
        
        {/* auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 404 not found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
