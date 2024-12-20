import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import cookieService from "@/services/cookieService";
import { useAuth } from "@/contexts/AuthContext";

const ProtectedRoutes = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    const location = useLocation();
    const currentPath = location.pathname;

    const publicRoutes = ["/login", "/signup"];
    const isPublicPath = publicRoutes.includes(currentPath);

    useEffect(() => {
        setIsLoggedIn(cookieService.getCookie("logged_in") === "yes");
    }, [currentPath]);

    if (isLoggedIn && isPublicPath) {
        return <Navigate to="/dashboard" replace />;
    }

    if (!isLoggedIn && !isPublicPath) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoutes;
