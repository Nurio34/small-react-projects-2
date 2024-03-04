import React from "react";

function Square({ id, size, isWorking }) {
    const colors = ["red", "yellow", "green", "blue", "pink", "purple"];
    const random = Math.floor(Math.random() * colors.length);

    return (
        <div
            id={id}
            style={{
                width: `${size.width / size.size}px`,
                height: `${size.width / size.size}px`,
            }}
            className="animation-square bg-pink-500"
            onMouseEnter={(e) => {
                if (isWorking) {
                    e.target.classList.add("fall");
                    e.target.style.backgroundColor = colors[random];
                }
            }}
        ></div>
    );
}

export default Square;
