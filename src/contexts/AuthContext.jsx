import React, { createContext, useContext, useState, useEffect } from "react";

import authService from "@/services/authService";
import cookieService from "@/services/cookieService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoggedIn(cookieService.getCookie("logged_in") === "yes");
        const fetchUser = async () => {
            setIsLoading(true);
            try {
                const response = await authService.isAuthenticate();
                if (response.success) {
                    cookieService.setCookie("logged_in", "yes");
                    setUser(response.data);
                    setIsLoggedIn(true);
                }
            } catch (error) {
                setUser(null);
                setIsLoggedIn(false);
                cookieService.removeCookie("logged_in");
            } finally {
                setIsLoading(false);
            }
        };
        fetchUser();
    }, []);
    return (
        <AuthContext.Provider
            value={{ user, isLoading, isLoggedIn, setIsLoggedIn }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider.");
    }
    return context;
};
