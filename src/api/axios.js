import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BACKEND_REQUEST_BASE_URL;

export default axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});
