import React, { useContext } from "react";
import { GlobalContext } from "../../0-GlobalApp";

function index({ columns, ind }) {
    const {
        isRedNext,
        setIsRedNext,
        positions,
        setPositions,
        setPointerHoverPosition,
        gridPosition,
    } = useContext(GlobalContext);

    return (
        <span
            key={ind}
            data-columnid={columns[`${+ind % columns.length}`]}
            data-rowid={Math.ceil((ind + 1) / columns.length)}
            className=" bg-white rounded-full aspect-square"
            //** --------------------------------------------------------- */
            onClick={(e) => {
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
                e.target.classList.remove("bg-white");
                e.target.classList.add(
                    `${isRedNext ? "bg-red-500" : "bg-yellow-500"}`,
                );
            }}
            //** --------------------------------------------------------- */
            onMouseEnter={(e) => {
                const currentColumn = e.target.dataset.columnid;
                const index = columns.indexOf(currentColumn);
                setPointerHoverPosition({ top: gridPosition.top });
                //TODO
            }}
        ></span>
    );
}

export default index;
