import React from "react";

function Square({ id, square, handleSquare }) {
    return (
        <div
            className="border-r border-b border-black aspect-square grid place-content-center 
        font-bold text-7xl"
            onClick={(e) => handleSquare(id)}
        >
            {square}
        </div>
    );
}

export default Square;
