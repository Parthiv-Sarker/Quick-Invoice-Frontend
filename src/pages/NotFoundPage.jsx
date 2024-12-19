import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

const NotfoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white">
            <h1 className="text-9xl font-extrabold drop-shadow-lg">404</h1>
            <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
            <p className="mt-2 text-lg text-gray-300">
                Oops! The page you are looking for doesn&apos;t exist or has
                been moved.
            </p>
            <Button
                variant="outline"
                className="px-6 py-6 mt-6 text-lg font-extrabold text-black bg-slate-300"
                onClick={() => navigate("/")}
            >
                Go Back Home
            </Button>
            <div className="mt-10 text-sm text-gray-400">
                If you think this is a mistake, please{" "}
                <Link to="/contact" className="text-blue-400 underline">
                    contact us
                </Link>
                .
            </div>
        </div>
    );
};

export default NotfoundPage;
