import { useEffect, useState } from "react";
import Item from "./4.Item";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function List({ list, handleToggle, isOpen }) {
    return (
        <ul className=" list-disc list-outside mx-6 shadow-lg">
            <li
                className="flex items-center gap-2"
                onClick={() => {
                    handleToggle(list.label);
                }}
            >
                {list.label}
                {list.children && (
                    <>
                        {isOpen.includes(list.label) ? <FaMinus /> : <FaPlus />}
                    </>
                )}
            </li>
            {list.children &&
                isOpen.includes(list.label) &&
                list.children.map((child) => (
                    <Item
                        key={child.label}
                        item={child}
                        handleToggle={handleToggle}
                        isOpen={isOpen}
                    />
                ))}
        </ul>
    );
}

export default List;
