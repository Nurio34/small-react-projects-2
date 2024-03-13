import { useEffect, useRef, useState } from "react";
import { createContext } from "react";
export const GlobalContext = createContext();
//TODO
console.log("click events'te kaldım, transitionend'te kaldım");
//TODO
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
    settings.current.rows = [...Array(settings.current.row)].map((_, ind) => {
        return settings.current.row - (ind + 1);
    });

    //** */ --------------------------------------------------------------
    //** */ -----------------------------------------------------------------

    const [positions, setPositions] = useState([]);
    const [isRedNext, setIsRedNext] = useState(true);

    //** */ --------------------------------------------------------------
    //** */ -----------------------------------------------------------------
    const [gridPosition, setGridPosition] = useState();
    const [pointerStartingPosition, setPointerStartingPosition] = useState({
        top: 0,
        left: 0,
        visibility: "hidden",
    });
    const [pointerPosition, setPointerPosition] = useState({});
    const Pointer = useRef();
    useEffect(() => {
        Pointer.current.addEventListener("transitionend", () => {
            console.log("transitionend");
        });
    }, [pointerPosition]);
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
                    gridPosition,
                    setGridPosition,
                    pointerStartingPosition,
                    setPointerStartingPosition,
                    pointerPosition,
                    setPointerPosition,
                    Pointer,
                }}
            >
                {children}
            </GlobalContext.Provider>
        </div>
    );
}

export default index;
