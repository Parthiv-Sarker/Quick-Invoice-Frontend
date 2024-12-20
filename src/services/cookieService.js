import Cookies from "js-cookie";

const isProduction = import.meta.env.VITE_API_NODE_ENV === "production";

const cookieService = {
    // Set a cookie with name, value, and options
    setCookie: (name, value, options = { expires: 1, path: "/" }) => {
        const cookieOptions = {
            ...options,
            secure: isProduction,
            sameSite: "None",
            domain: isProduction
                ? import.meta.env.VITE_API_BACKEND_BASE_URL
                : undefined,
        };

        Cookies.set(name, value, cookieOptions);
    },

    // Get the value of a cookie by name
    getCookie: (name) => Cookies.get(name),

    // Remove a cookie by name
    removeCookie: (
        name,
        options = {
            path: "/",
            domain: import.meta.env.VITE_API_BACKEND_BASE_URL,
        }
    ) => {
        Cookies.remove(name, options);
    },
};

export default cookieService;
