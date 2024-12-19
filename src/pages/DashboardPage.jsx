import React from "react";
import { Outlet } from "react-router-dom";

const DashboardPage = () => {
    return (
        <>
            <h1>Dashboard Layout</h1>
            <Outlet />
        </>
    );
};

export default DashboardPage;
