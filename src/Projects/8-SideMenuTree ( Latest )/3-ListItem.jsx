import { useState } from "react";
import Label from "./4-Label";

function ListItem({ item }) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <ul className=" list-outside list-disc mx-8">
            <Label
                label={item.label}
                children={item.children}
                handleClick={handleClick}
                open={open}
            />
            {item.children &&
                open &&
                item.children.map((child) => {
                    return <ListItem key={child.label} item={child} />;
                })}
        </ul>
    );
}

export default ListItem;
