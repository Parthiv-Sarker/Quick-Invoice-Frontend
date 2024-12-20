import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from "@/contexts/AuthContext";

const ProtectedRoutes = () => {
    const { isLoggedIn } = useAuth();
    
    const location = useLocation();
    const currentPath = location.pathname; 

    const publicRoutes = ["/login", "/signup"];
    const isPublicPath = publicRoutes.includes(currentPath);

    if (isLoggedIn && isPublicPath) {
        return <Navigate to="/dashboard" replace />;
    }

    if (!isLoggedIn && !isPublicPath) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoutes;
