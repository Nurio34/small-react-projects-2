import { useEffect, useRef, useState } from "react";
import { createContext } from "react";
export const GlobalContext = createContext();
//TODO
// console.log("click events'te kaldım, transitionend'te kaldım");
//TODO
function index({ children }) {
    //! --------------------------------------------------------------
    //! --------------------------------------------------------------

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

    //! --------------------------------------------------------------
    //! -----------------------------------------------------------------

    const [positions, setPositions] = useState([]);
    const [isRedNext, setIsRedNext] = useState(true);

    //! --------------------------------------------------------------
    //! -----------------------------------------------------------------
    const [gridPosition, setGridPosition] = useState();
    const [pointerStartingPosition, setPointerStartingPosition] = useState({
        top: 0,
        left: 0,
        visibility: "hidden",
    });
    const [pointerPosition, setPointerPosition] = useState({});
    const Pointer = useRef();
    const Piece = useRef();
    //! --------------------------------------------------------------
    //! -----------------------------------------------------------------
    useEffect(() => {
        const handleTransitionend = () => {
            const allPieces = document.querySelectorAll("span");
            allPieces.forEach((piece) => (piece.style.pointerEvents = "all"));
            setPointerPosition((pre) => ({ ...pre, transition: "0s" }));

            Piece.current.classList.remove("bg-white");
            Piece.current.classList.add(
                `${isRedNext ? "bg-[yellow]" : "bg-[red]"}`,
            );
        };
        if (Pointer.current) {
            Pointer.current.addEventListener(
                "transitionend",
                handleTransitionend,
            );
        }

        return () => {
            if (Pointer.current) {
                Pointer.current.removeEventListener(
                    "transitionend",
                    handleTransitionend,
                );
            }
        };
    }, [pointerPosition]);
    //! --------------------------------------------------------------
    //! -----------------------------------------------------------------
    useEffect(() => {
        //** CHECK FOR COLUMN WİN CONDITIONS */
        const cols = settings.current.columns.forEach((col1) => {
            const cols2 = positions.filter((col2) => {
                return col2.slice(0, 1) === col1;
            });
            cols2.forEach((pos, ind) => {
                if (ind <= settings.current.column - 4) {
                    console.log(pos);
                }
            });
        });
    }, [positions]);
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
                    Piece,
                }}
            >
                {children}
            </GlobalContext.Provider>
        </div>
    );
}

export default index;
