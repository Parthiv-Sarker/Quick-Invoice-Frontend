import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const isAuthenticated = false; 

    const publicRoutes = ["/login", "/signup"];
    const isPublicPath = publicRoutes.includes(currentPath);

    if (isAuthenticated && isPublicPath) {
        return <Navigate to="/dashboard" replace />;
    }

    if (!isAuthenticated && !isPublicPath) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoutes;
