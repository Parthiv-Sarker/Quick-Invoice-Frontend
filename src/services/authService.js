import axios from "@/api/axios";
import cookieService from "./cookieService";

const authService = {
    // ===== SignUP Service =====
    signup: async (data) => {
        try {
            const response = await axios.post("/users/signup", data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },

    // ===== LogIn Service =====
    login: async (credentials) => {
        try {
            const response = await axios.post("/users/login", credentials);
            cookieService.setCookie("logged_in", true);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },

    isAuthenticate: async () => {
        try {
            const response = await axios.get("/users/is-authenticated");
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }
};

export default authService;
