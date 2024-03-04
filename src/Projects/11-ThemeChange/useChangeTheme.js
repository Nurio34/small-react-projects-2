import { useEffect, useState } from "react";

export const useChangeTheme = () => {
    const [theme, setTheme] = useState({});

    const changeTheme = () => {
        setTheme({
            ...theme,
            key: "theme",
            value: theme.value === "dark" ? "light" : "dark",
        });
    };

    useEffect(() => {
        if (Object.keys(theme).length) {
            localStorage.setItem(theme.key, JSON.stringify(theme.value));
            return;
        }
    }, [theme]);

    useEffect(() => {
        const val = JSON.parse(localStorage.getItem("theme")) || "light";
        setTheme({
            ...theme,
            key: "theme",
            value: val,
        });
    }, []);

    return { theme: theme.value, changeTheme };
};
