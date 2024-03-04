import React, { useEffect, useRef, useState } from "react";

function Bar({ heights, percentage }) {
    const [barWidth, setBarWidth] = useState(0);
    const Bar = useRef();

    useEffect(() => {
        if (Bar.current) {
            const Bar_Width = parseInt(getComputedStyle(Bar.current).width);
            setBarWidth(Bar_Width);
        }
    }, []);

    return (
        <div
            className={`bg-black h-1 fixed w-full `}
            style={{ top: `${heights.header}px` }}
            ref={Bar}
        >
            <div
                className="bg-blue-500 h-full"
                style={{
                    width: `${percentage}%`,
                }}
            ></div>
        </div>
    );
}

export default Bar;
