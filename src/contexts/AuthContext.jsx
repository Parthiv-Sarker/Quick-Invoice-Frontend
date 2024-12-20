import React, { createContext, useContext, useState, useEffect } from "react";

import authService from "@/services/authService";
import cookieService from "@/services/cookieService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoggedIn(cookieService.getCookie("logged_in") === "yes");

        const fetchUser = async () => {
            try {
                const response = await authService.isAuthenticate();                
                if (response.success) {
                    setUser(response.data);
                    setIsLoggedIn(true);
                    cookieService.setCookie("logged_in", "yes");                    
                }
            } catch (error) {
                setUser(null);
                setIsLoggedIn(false);
                cookieService.removeCookie("logged_in");
            }
        };
        fetchUser();
    }, []);
    return (
        <AuthContext.Provider value={{ user, isLoggedIn }}>
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
