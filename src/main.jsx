import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "./contexts/AuthContext";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
        <Toaster />
    </StrictMode>
);
