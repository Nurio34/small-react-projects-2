import { useEffect, useState } from "react";
import List from "./3-List";
import { sideMenu } from "./data";

function SideMenu() {
    const [isOpen, setisOpen] = useState([]);
    useEffect(() => console.log(isOpen), [isOpen]);

    const handleToggle = (label) => {
        if (isOpen.includes(label)) {
            const filtered = isOpen.filter((item) => item !== label);
            setisOpen(filtered);
            return;
        }
        setisOpen((ps) => {
            return [...ps, label];
        });
    };

    return (
        <div className="flex flex-col gap-4">
            {sideMenu.map((list, ind) => {
                return (
                    <List
                        key={list.label}
                        list={list}
                        handleToggle={handleToggle}
                        isOpen={isOpen}
                    />
                );
            })}
        </div>
    );
}

export default SideMenu;
