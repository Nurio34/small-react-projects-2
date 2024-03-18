import { useContext } from "react";
import { createContext } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

function index({ children }) {
    return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
}

export default index;
