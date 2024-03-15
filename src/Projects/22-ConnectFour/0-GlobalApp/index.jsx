import { useEffect, useRef, useState } from "react";
import { createContext } from "react";
import Home from "../1-Pages/1-Home";
import Game from "../1-Pages/2-Game";
import "../index.css";

export const GlobalContext = createContext();
//TODO
// console.log("click events'te kaldım, transitionend'te kaldım");
//TODO
function index({ children }) {
    const [isGameStart, setIsGameStart] = useState(false);
    const [gameEnd, setGameEnd] = useState(false);
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
    const [gridPosition, setGridPosition] = useState({});
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
    //** PREVENT SCROLLING WHEN PRESS ARROW UP-DOWN KEYS */
    const ArrowEvents = (e) => {
        if (
            e.code === "ArrowDown" ||
            e.code === "ArrowUp" ||
            e.code === "Space"
        ) {
            e.preventDefault();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", ArrowEvents);
        return () => window.removeEventListener("keydown", ArrowEvents);
    }, []);
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
    const [rows, setRows] = useState(
        Array.from({ length: settings.current.row }, () => {
            return [
                ...Array.from({ length: settings.current.column }, () => "pos"),
            ];
        }),
    );

    useEffect(() => {
        //** --------------------------------- */
        //** CHECK FOR COLUMN WİN CONDITIONS */
        settings.current.columns.forEach((col) => {
            const poss = positions.filter((pos) => {
                return pos.slice(0, 1) === col;
            });
            poss.forEach((pos, ind) => {
                if (ind <= settings.current.row - 4) {
                    const copyPoss = [...poss];
                    const superFourNom = copyPoss.splice(ind, 4);
                    if (
                        superFourNom.length === 4 &&
                        superFourNom.every((item) => item === pos)
                    ) {
                        setGameEnd(true);
                    }
                }
            });
        });
        //** --------------------------------- */
        //** CHECK FOR ROW WİN CONDITIONS */
        const lastPos = positions[positions?.length - 1];
        const lastPosCol = positions[positions?.length - 1]?.slice(0, 1);
        const sameCols =
            positions.filter((pos) => pos.slice(0, 1) === lastPosCol).length -
            1;
        if (lastPos) {
            const copyRows = [...rows];
            const colInd = settings.current.columns.indexOf(lastPosCol);
            copyRows.forEach((row, ind) => {
                if (ind === sameCols) {
                    row[colInd] = lastPos;
                }
            });
            setRows(copyRows);

            const row = rows[sameCols];
            row.forEach((item, ind) => {
                if (ind <= settings.current.column - 4) {
                    const start = item.split("_")[1];
                    const copyRow = [...row];
                    const superFourNom = copyRow.splice(ind, 4);

                    if (
                        !superFourNom.includes("pos") &&
                        superFourNom.every(
                            (item) => item.split("_")[1] === start,
                        )
                    ) {
                        setGameEnd(true);
                    }
                }
            });
        }
        //** --------------------------------- */
        //** CHECK FOR DIAGONAL WİN CONDITIONS */
        rows.forEach((row, index) => {
            if (index <= settings.current.row - 4) {
                row.forEach((item, ind) => {
                    if (
                        ind < 3 &&
                        item !== "pos" &&
                        item.slice(2) === rows[index + 1][ind + 1].slice(2) &&
                        item.slice(2) === rows[index + 2][ind + 2].slice(2) &&
                        item.slice(2) === rows[index + 3][ind + 3].slice(2)
                    ) {
                        setGameEnd(true);
                    } else if (
                        ind > settings.current.column - 4 &&
                        item !== "pos" &&
                        item.slice(2) === rows[index + 1][ind - 1].slice(2) &&
                        item.slice(2) === rows[index + 2][ind - 2].slice(2) &&
                        item.slice(2) === rows[index + 3][ind - 3].slice(2)
                    ) {
                        setGameEnd(true);
                    } else if (ind >= 3 && ind <= settings.current.column - 4) {
                        if (
                            (item !== "pos" &&
                                item.slice(2) ===
                                    rows[index + 1][ind + 1].slice(2) &&
                                item.slice(2) ===
                                    rows[index + 2][ind + 2].slice(2) &&
                                item.slice(2) ===
                                    rows[index + 3][ind + 3].slice(2)) ||
                            (item !== "pos" &&
                                item.slice(2) ===
                                    rows[index + 1][ind - 1].slice(2) &&
                                item.slice(2) ===
                                    rows[index + 2][ind - 2].slice(2) &&
                                item.slice(2) ===
                                    rows[index + 3][ind - 3].slice(2))
                        ) {
                            setGameEnd(true);
                        }
                        //** hem sağ-yukarı, hem sol-yukarı çapraz incele */
                    }
                });
            }
        });
    }, [positions]);
    return (
        <div className="min-h-[96vh] h-full grid px-[5vh] md:px-[20vw] lg:px-[30vw] items-center ">
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
                    isGameStart,
                    setIsGameStart,
                    gameEnd,
                    setGameEnd,
                    rows,
                }}
            >
                {!isGameStart && <Home />}
                {isGameStart && <Game />}
            </GlobalContext.Provider>
        </div>
    );
}

export default index;
