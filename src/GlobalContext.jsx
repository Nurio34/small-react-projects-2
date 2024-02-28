import { useState, createContext, useContext } from "react";

const GlobalAppContext = createContext();
export const useGlobalAppContext = () => useContext(GlobalAppContext);

function GlobalContext({ children }) {
    const [message, setmessage] = useState("Success");

    return (
        <GlobalAppContext.Provider value={message}>
            {children}
        </GlobalAppContext.Provider>
    );
}

export default GlobalContext;
