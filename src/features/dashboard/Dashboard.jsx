import React from "react";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
    const { user, isLoading } = useAuth();

    return (
        <div>
            Dashboard Home || { isLoading ? "Loading..." : user?.email }
        </div>
    );
};

export default Dashboard;
