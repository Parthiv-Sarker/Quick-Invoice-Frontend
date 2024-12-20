import Cookies from "js-cookie";

const cookieService = {
    // Set a cookie with name, value, and options
    setCookie: (name, value, options = { expires: 1, path: "/" }) => {
        const isSecure = window.location.protocol === "https:";

        const cookieOptions = {
            ...options,
            secure: isSecure,
            sameSite: "None",
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
        }
    ) => {
        Cookies.remove(name, options);
    },
};

export default cookieService;
