import { createContext, useEffect, useRef, useState } from "react";
import { Flags_ServiceCall } from "./data";
import HomePage from "./HomePage";

export const GlobalContext = createContext();

function GlobalComponent({ adjustHeader, heights }) {
    const [flags, setFlags] = useState({});

    useEffect(() => {
        const fetchFlags = async () => {
            try {
                const res = await Flags_ServiceCall();
                setFlags(res);
            } catch (error) {}
        };
        fetchFlags();
    }, []);

    return (
        <GlobalContext.Provider value={{ flags }}>
            <HomePage adjustHeader={adjustHeader} heights={heights} />
        </GlobalContext.Provider>
    );
}

export default GlobalComponent;
