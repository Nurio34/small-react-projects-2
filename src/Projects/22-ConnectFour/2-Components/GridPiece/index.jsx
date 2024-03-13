import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../0-GlobalApp";

function index({ columns, ind, rows }) {
    const {
        settings,
        isRedNext,
        setIsRedNext,
        positions,
        setPositions,
        setPointerPosition,
        gridPosition,
        pointerPosition,
    } = useContext(GlobalContext);

    return (
        <span
            key={ind}
            data-columnid={columns[`${+ind % columns.length}`]}
            data-rowid={rows[Math.floor((ind + 0.1) / columns.length)]}
            className=" bg-white rounded-full aspect-square"
            //** --------------------------------------------------------- */
            onMouseEnter={(e) => {
                const currentColumn = e.target.dataset.columnid;
                const index = columns.indexOf(currentColumn);
                setPointerPosition((pre) => ({
                    ...pre,
                    visibility: "visible",
                    top: gridPosition.top - pointerPosition.width,
                    left: gridPosition.left + index * pointerPosition.width,
                    backgroundColor: isRedNext ? "red" : "yellow",
                }));
            }}
            onClick={(e) => {
                //! -----------------------------------------------------------------
                //! -----------------------------------------------------------------
                let pointerGoesTo;
                const currentColumn = e.target.dataset.columnid;
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
                allPieces.forEach(
                    (piece) => (piece.style.pointerEvents = "none"),
                );
                console.log(allPieces);
                setPointerPosition((pre) => ({
                    ...pre,
                    top: topPosition,
                    transition: "0.2s ease-in-out",
                }));
                //! -----------------------------------------------------------------
                //! -----------------------------------------------------------------
                setPositions([
                    ...positions,
                    `${e.target.dataset.columnid}_${
                        isRedNext ? "Red" : "Yellow"
                    }`,
                ]);
                setIsRedNext(!isRedNext);
                //! -----------------------------------------------------------------
                //! -----------------------------------------------------------------
                // e.target.classList.remove("bg-white");
                // e.target.classList.add(
                //     `${isRedNext ? "bg-red-500" : "bg-yellow-500"}`,
                // );
                // pointerGoesTo.style.backgrounColor = "red";
                console.log(pointerGoesTo);
            }}
            //** --------------------------------------------------------- */
        ></span>
    );
}

export default index;
