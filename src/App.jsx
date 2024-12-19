import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import {
    HomePage,
    LoginPage,
    SignupPage,
    DashboardPage,
    NotFoundPage,
} from "./pages";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default App;
