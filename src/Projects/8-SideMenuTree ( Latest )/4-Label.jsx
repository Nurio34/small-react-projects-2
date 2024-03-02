import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function Label({ label, children, handleClick, open }) {
    return (
        <li className="flex gap-2 items-center" onClick={handleClick}>
            {label} {children && <>{open ? <FaMinus /> : <FaPlus />}</>}
        </li>
    );
}

export default Label;
