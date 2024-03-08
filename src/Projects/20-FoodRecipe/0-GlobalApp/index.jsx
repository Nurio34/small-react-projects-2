import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

function GlobalApp({ children }) {
    const [search, setsearch] = useState({ loading: false, search: "fish" });
    const [page, setPage] = useState("home");
    const [detail, setdetail] = useState({});
    const [favorites, setFavorites] = useState([]);

    return (
        <GlobalContext.Provider
            value={{
                search,
                setsearch,
                page,
                setPage,
                setdetail,
                detail,
                favorites,
                setFavorites,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalApp;
