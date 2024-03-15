import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../0-GlobalApp";

function index({ columns, ind, rows, hoverFn, clickFn }) {
    const { isRedNext, setIsRedNext, gameEnd } = useContext(GlobalContext);

    return (
        <span
            key={ind}
            data-columnid={columns[`${+ind % columns.length}`]}
            data-rowid={rows[Math.floor((ind + 0.1) / columns.length)]}
            className=" bg-white rounded-full aspect-square"
            //** --------------------------------------------------------- */
            onMouseEnter={(e) => {
                if (isRedNext && !gameEnd) {
                    const currentColumn = e.target.dataset.columnid;
                    const ind = columns.indexOf(currentColumn);
                    hoverFn(ind);
                    localStorage.setItem("ind", 0);
                }
            }}
            onClick={(e) => {
                if (isRedNext && !gameEnd) {
                    const currentColumn = e.target.dataset.columnid;
                    clickFn(currentColumn);
                    setIsRedNext(false);
                }
            }}
            //** --------------------------------------------------------- */
        ></span>
    );
}

export default index;
