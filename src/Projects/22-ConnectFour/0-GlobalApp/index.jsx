import { useRef, useState } from "react";
import { createContext } from "react";
export const GlobalContext = createContext();

function index({ children }) {
    //** */ --------------------------------------------------------------
    //** */ --------------------------------------------------------------

    const settings = useRef({
        column: 7,
        row: 6,
        code_A: 65,
    });
    settings.current.grid = settings.current.column * settings.current.row;
    settings.current.columns = [...Array(settings.current.column)].map(
        (_, ind) => {
            return String.fromCharCode(ind + settings.current.code_A);
        },
    );

    //** */ --------------------------------------------------------------
    //** */ -----------------------------------------------------------------

    const [positions, setPositions] = useState([]);
    const [isRedNext, setIsRedNext] = useState(true);
    console.log(positions);

    //** */ --------------------------------------------------------------
    //** */ -----------------------------------------------------------------
    return (
        <div className="h-screen grid place-content-center ">
            <GlobalContext.Provider
                value={{
                    settings: settings.current,
                    positions,
                    setPositions,
                    isRedNext,
                    setIsRedNext,
                }}
            >
                {children}
            </GlobalContext.Provider>
        </div>
    );
}

export default index;
