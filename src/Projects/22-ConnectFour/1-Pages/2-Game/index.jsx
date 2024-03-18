import { useCallback, useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../0-GlobalApp";
import GridPiece from "../../2-Components/GridPiece";
import PointerPiece from "../../2-Components/PointerPiece";
function index() {
    //** ---------------------------------------------------------------- */
    //** ---------------------------------------------------------------- */

    const { settings } = useContext(GlobalContext);
    const { grid, columns, column, rows, row } = settings;

    //** ---------------------------------------------------------------- */
    //** ---------------------------------------------------------------- */

    const {
        isRedNext,
        setIsRedNext,
        setGridPosition,
        pointerStartingPosition,
        setPointerStartingPosition,
        setPointerPosition,
        gridPosition,
        pointerPosition,
        positions,
        setPositions,
        Piece,
        gameEnd,
        setGameEnd,
        setIsGameStart,
        setRows,
    } = useContext(GlobalContext);
    const Grid = useRef();

    useEffect(() => {
        if (Grid.current) {
            const rect = Grid.current.getBoundingClientRect();
            const top = rect.top;
            const left = rect.left;
            const paddingInline = parseInt(
                window.getComputedStyle(Grid.current).padding,
            );
            const gap = parseInt(window.getComputedStyle(Grid.current).gap);
            const width =
                (rect.width - paddingInline * 2 - gap * (column - 1)) / column;
            setGridPosition({ top, left, paddingInline, gap });

            setPointerStartingPosition((pre) => {
                return { ...pre, width: width };
            });
        }
    }, []);

    useEffect(() => {
        setPointerPosition(pointerStartingPosition);
    }, [pointerStartingPosition]);

    //! ------------------------------------------------------------------------
    //! ------------------------------------------------------------------------
    const hoverFn = (index) => {
        setPointerPosition((pre) => ({
            ...pre,
            visibility: "visible",
            top: gridPosition.top - pointerPosition.width,
            left:
                gridPosition.left +
                gridPosition.paddingInline +
                index * (pointerPosition.width + gridPosition.gap),
            backgroundColor: isRedNext ? "red" : "yellow",
        }));
    };

    const clickFn = (currentColumn) => {
        let pointerGoesTo;
        const filter = positions.filter((pos) => {
            return pos.slice(0, 1) === currentColumn;
        });
        if (filter.length < settings.row) {
            pointerGoesTo = document.querySelector(
                `[data-columnid=${currentColumn}][data-rowid='${filter.length}']`,
            );
        }
        //! -----------------------------------------------------------------
        //! -----------------------------------------------------------------
        const topPosition = pointerGoesTo.getBoundingClientRect().top;
        const allPieces = document.querySelectorAll("span");
        allPieces.forEach((piece) => (piece.style.pointerEvents = "none"));
        setPointerPosition((pre) => ({
            ...pre,
            top: topPosition,
            transition: "0.1s ease-in-out",
        }));
        Piece.current = pointerGoesTo;
        //! -----------------------------------------------------------------
        //! -----------------------------------------------------------------
        setPositions([
            ...positions,
            `${currentColumn}_${isRedNext ? "Red" : "Yellow"}`,
        ]);
        //! -----------------------------------------------------------------
        //! -----------------------------------------------------------------
    };

    useEffect(() => {
        const firstIndex = 0;
        const lastIndex = settings.column - 1;
        let currentIndex =
            JSON.parse(localStorage.getItem("ind")) || firstIndex;

        //** MAKE ANY OTHER ELEMENTS THAT HAS TABINDEX UNFOCUSABLE */
        const unfocusables = document.querySelectorAll(
            "button, a, input, select, textarea, [tabIndex='0']",
        );
        unfocusables.forEach((el) => {
            el.tabIndex = -1;
        });
        //** -------------------------------------------------------------------- */
        //** FOR KEYBOARD PLAYER, MAKE ONLY TOP-LEFT ELEMENT FOCUSABLE */
        const focusable = document.querySelector(
            `[data-rowid='${row - 1}'][data-columnid='A']`,
        );
        focusable.tabIndex = 1;

        const focusables = document.querySelectorAll(
            `[data-rowid='${row - 1}']`,
        );

        if (!isRedNext) {
            focusables.forEach((el) => (el.tabIndex = -1));
            focusable.tabIndex = 1;
            focusable.focus();
        }
        //** -------------------------------------------------------------------- */
        //** ADD KEYBOARD LİSTENERS TO FOCUSABLES */

        const keyboardFn = (e) => {
            if (!isRedNext) {
                switch (e.code) {
                    case "ArrowRight":
                        if (currentIndex < lastIndex) {
                            focusables[currentIndex].tabIndex = -1;
                            currentIndex++;
                            focusables[currentIndex].tabIndex = 1;
                            focusables[currentIndex].focus();
                            localStorage.setItem("ind", currentIndex);
                            hoverFn(currentIndex);
                        } else {
                            focusables[currentIndex].tabIndex = -1;
                            currentIndex = firstIndex;
                            focusables[currentIndex].tabIndex = 1;
                            focusables[currentIndex].focus();
                            localStorage.setItem("ind", currentIndex);
                            hoverFn(currentIndex);
                        }
                        break;
                    case "ArrowLeft":
                        if (currentIndex > firstIndex) {
                            focusables[currentIndex].tabIndex = -1;
                            currentIndex--;
                            focusables[currentIndex].tabIndex = 1;
                            focusables[currentIndex].focus();
                            localStorage.setItem("ind", currentIndex);
                            hoverFn(currentIndex);
                        } else {
                            focusables[currentIndex].tabIndex = -1;
                            currentIndex = lastIndex;
                            focusables[currentIndex].tabIndex = 1;
                            focusables[currentIndex].focus();
                            localStorage.setItem("ind", currentIndex);
                            hoverFn(currentIndex);
                        }
                        break;
                    case "Space":
                        e.preventDefault();
                        const currentColumn = e.target.dataset.columnid;
                        clickFn(currentColumn);
                        setIsRedNext(true);

                        break;
                    default:
                        break;
                }
            }
        };

        if (!isRedNext && !gameEnd) {
            focusables.forEach((el) => {
                el.addEventListener("keyup", keyboardFn);
            });
        }

        return () => {
            focusables.forEach((el) => {
                el.removeEventListener("keyup", keyboardFn);
            });
            if (isRedNext || gameEnd) {
                focusables.forEach((el) => {
                    el.removeEventListener("keyup", keyboardFn);
                });
            }
        };
    }, [isRedNext, gameEnd]);
    //! ------------------------------------------------------------------------
    //! ------------------------------------------------------------------------

    return (
        <div
            className="grid bg-blue-700 p-4  gap-1 max-w-[668px]"
            style={{
                gridTemplateColumns: `repeat(${column},1fr)`,
            }}
            ref={Grid}
        >
            {[...Array(grid)].map((_, ind) => {
                return (
                    <GridPiece
                        key={ind}
                        columns={columns}
                        ind={ind}
                        rows={rows}
                        hoverFn={hoverFn}
                        clickFn={clickFn}
                    />
                );
            })}
            <PointerPiece />
            {gameEnd && (
                <div
                    className={`absolute w-1/2 left-1/2 ${
                        !isRedNext ? "bg-[red]" : " bg-[yellow]"
                    } text-white text-center p-4 text-2xl uppercase -translate-x-1/2 -translate-y-[200%]`}
                >{`Winner ${!isRedNext ? "Red" : "Yellow"}`}</div>
            )}
            {gameEnd && (
                <div className=" grid gap-4 text-2xl uppercase md:w-1/4 absolute left-1/2 -translate-x-1/2 bottom-0   ">
                    <button
                        className="py-1 px-2 rounded-lg bg-blue-600 text-white"
                        onClick={(e) => {
                            setPositions([]);
                            setIsRedNext(true);
                            setGameEnd(false);
                            document
                                .querySelectorAll("[data-columnid]")
                                .forEach((el) => {
                                    if (el.classList.contains("bg-[red]")) {
                                        el.classList.remove("bg-[red]");
                                    } else if (
                                        el.classList.contains("bg-[yellow]")
                                    ) {
                                        el.classList.remove("bg-[yellow]");
                                    }
                                    el.classList.add("bg-white");
                                    el.classList.add("pointer-events-none");
                                });
                            setPointerPosition(pointerStartingPosition);

                            setRows(
                                Array.from({ length: row }, () => {
                                    return [
                                        ...Array.from(
                                            {
                                                length: column,
                                            },
                                            () => "pos",
                                        ),
                                    ];
                                }),
                            );
                        }}
                    >
                        Restart
                    </button>
                    <button
                        className="py-2 px-4 rounded-lg bg-green-600 text-white"
                        onClick={(e) => {
                            setPositions([]);
                            setIsRedNext(true);
                            setGameEnd(false);
                            setIsGameStart(false);
                            setRows(
                                Array.from({ length: row }, () => {
                                    return [
                                        ...Array.from(
                                            {
                                                length: column,
                                            },
                                            () => "pos",
                                        ),
                                    ];
                                }),
                            );
                        }}
                    >
                        Settings
                    </button>
                </div>
            )}
        </div>
    );
}

export default index;
