import { useEffect, useState } from "react";

export const useChangeTheme = () => {
    const [theme, setTheme] = useState({});

    const changeTheme = () => {
        setTheme({
            ...theme,
            key: "theme",
            value: theme.value === "light" ? "dark" : "light",
        });
    };

    useEffect(() => {
        console.log(theme);
        if (Object.keys(theme).length) {
            localStorage.setItem(theme.key, JSON.stringify(theme.value));
            return;
        }
    }, [theme]);

    return { theme: theme.value, changeTheme };
};
