import Cookies from "js-cookie";

const cookieService = {
    // Set a cookie with name, value, and options
    setCookie: (name, value, options = { expires: 1, path: "/" }) => {
        const cookieOptions = {
            ...options,
            secure: true,
            sameSite: "None",
            expires: options.expires ? options.expires : 1,
        };

        Cookies.set(name, value, cookieOptions);
    },

    // Get the value of a cookie by name
    getCookie: (name) => {
        return Cookies.get(name);
    },

    // Remove a cookie by name
    removeCookie: (name) => {
        Cookies.remove(name, { path: "/" });
    },
};

export default cookieService;
