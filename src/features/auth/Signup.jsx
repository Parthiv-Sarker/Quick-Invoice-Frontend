import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// ===== Shared UI Components =====
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// ===== Services =====
import authService from "@/services/authService";


const Signup = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            return toast({
                title: "Error",
                description: "Passwords do not match!",
                variant: "destructive",
            });
        }

        try {
            const response = await authService.signup(formData);
            
            if (response?.success) {
                toast({
                    title: "Success",
                    description: response.message || "Signup successful.",
                    variant: "success",
                    className: "bg-green-500",
                });
                navigate("/login", { replace: true });
            } else {
                throw new Error(response?.message || "Signup failed.");
            }
        } catch (error) {
            toast({
                title: "Signup Error",
                description: error?.message || "An unexpected error occurred.",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card className="bg-gray-100 shadow-lg rounded-lg w-full max-w-md p-6">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center text-black">
                        Sign Up
                    </CardTitle>
                    <CardDescription className="text-center text-gray-500">
                        Create a new account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-500 mb-2"
                            >
                                Username
                            </label>
                            <Input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter your username"
                                required
                            />
                        </div>
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
                        <div>
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
                            <div className="mb-4">
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-sm font-medium text-gray-500 mb-2"
                                >
                                    Confirm Password
                                </label>
                                <Input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Re-enter your password"
                                    required
                                />
                            </div>
                        </div>
                        <Button type="submit" className="w-full">
                            Sign Up
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="text-center">
                    <p className="text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-blue-500 hover:underline"
                        >
                            Log In
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Signup;
