import Label from "./3-Label";
import { sideMenu } from "./data";

function SideMenu() {
    return (
        <div
            className=" bg-red-200 p-4
                col-start-1 col-span-1 row-start-2 row-span-2
                flex flex-col gap-4 "
        >
            {sideMenu.map((item, ind) => {
                return <Label key={item.label} data={item} />;
            })}
        </div>
    );
}

export default SideMenu;
