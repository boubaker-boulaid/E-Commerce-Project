<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;


class UserController extends Controller
{
    public function index () {
        $users = User::select('id','name','email','role','created_at')
                        ->where('id','<>',auth()->user()->id)
                        ->orderBy('created_at','desc')
                        ->get();

        return response()->json([
            'message' => 'success',
            'data' => $users,
            'total' => $users->count()
        ], 200);
    }

    public function updateRole (Request $request, User $user) {
        $validated = $request->validate([
            'role' => 'required|in:user,admin'
        ]);

        $user->update($validated);

        return response()->json([
            'message' => 'role updated to '.$validated['role'] ,
        ], 200);
    }

    public function destroy (User $user) {
        if (auth()->user()->id === $user.id) {
            return response()->json([
                'message' => 'error : you can not delete your self',
            ], 403);
        }
        
        $user->delete();

        return response()->json([
            'message' => 'user deleted successfully',
        ], 204);
    }

    public function statistic () {
        $usersCount = User::count() ;
        $adminUsers = User::select('id','name','email','role','created_at')
                            ->where('role','admin')
                            ->get();
        $userUsers = User::select('id','name','email','role','created_at')
                            ->where('role','user')
                            ->get();

        return response()->json([
            'usersCount' => $usersCount,
            'adminUsers' => $adminUsers,
            'userUsers' => $userUsers
        ], 200);
    }

}
