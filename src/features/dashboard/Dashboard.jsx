import React from "react";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div>
            Dashboard Home || <h1>Email: {user?.email}</h1>
        </div>
    );
};

export default Dashboard;
