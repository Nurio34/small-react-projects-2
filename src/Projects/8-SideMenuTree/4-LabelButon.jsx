import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function LabelButon({ Data }) {
    const [open, setopen] = useState(false);
    return (
        <>
            {Data.children ? (
                <button
                    className="flex items-center gap-2 capitalize font-semibold"
                    href={Data.to}
                    ref={(ref) => {
                        if (ref)
                            ref.onclick = () => {
                                const div = ref.nextElementSibling;
                                open
                                    ? div.classList.add("h-0", "w-0")
                                    : div.classList.remove("h-0", "w-0");

                                setopen(!open);
                            };
                    }}
                >
                    {Data.label}
                    {open ? <FaMinus /> : <FaPlus />}
                </button>
            ) : (
                <a
                    className=" text-purple-600 underline capitalize font-semibold"
                    href={Data.to}
                >
                    {Data.label}
                </a>
            )}
        </>
    );
}

export default LabelButon;
