import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// ===== Shared UI Components =====
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// ===== Services =====
import authService from "@/services/authService";


const Login = () => {
    const { toast } = useToast();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = formData;

        if (!email || !password) {
            return toast({
                title: "Error",
                description: "Please fill out all fields.",
                variant: "destructive",
            });
        }

        try {
            const response = await authService.login(formData);
            
            if (response?.success) {
                toast({
                    title: "Success",
                    description: response.message || "Login successful.",
                    variant: "success",
                    className: "bg-green-500",
                });
                navigate("/dashboard", { replace: true });
            } else {
                throw new Error(response?.message || "Login failed.");
            }
        } catch (error) {
            toast({
                title: "Login Error",
                description: error.message || "An unexpected error occurred.",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center text-black">
            <Card className="bg-gray-100 shadow-lg rounded-lg w-full max-w-md p-6">
                <CardHeader>
                    <h2 className="text-3xl font-bold text-center">Login</h2>
                    <p className="text-center text-gray-500">
                        Sign in to your account
                    </p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-500 mb-2"
                            >
                                Email Address
                            </label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-500 mb-2"
                            >
                                Password
                            </label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center text-sm text-gray-500">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Remember me
                            </label>
                            <a
                                href="#"
                                className="text-sm text-blue-500 hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>
                        <Button type="submit" className="w-full">
                            Log In
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="text-center">
                    <p className="text-sm text-gray-500">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-blue-500 hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Login;
