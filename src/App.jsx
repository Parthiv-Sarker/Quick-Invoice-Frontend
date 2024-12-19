import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import {
    HomePage,
    LoginPage,
    SignupPage,
    DashboardPage,
    NotFoundPage,
} from "./pages";
import Dashboard from "./features/dashboard/Dashboard";

import ProtectedRoutes from "./routes/ProtectedRoutes";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route element={<ProtectedRoutes />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />

                    <Route path="/dashboard" element={<DashboardPage />}>
                        <Route index element={<Dashboard />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default App;
