import React from "react";

function Child({ child, recrusion }) {
    return (
        <div>
            {child.children ? (
                recrusion(child)
            ) : (
                <a
                    href={child.to}
                    className=" text-purple-600 underline capitalize font-semibold"
                >
                    {child.label}
                </a>
            )}
        </div>
    );
}

export default Child;
