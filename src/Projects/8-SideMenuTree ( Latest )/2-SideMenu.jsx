import ListItem from "./3-ListItem";
import { sideMenu } from "./data";

function SideMenu() {
    return (
        <div>
            {sideMenu.map((item) => {
                return <ListItem key={item.label} item={item} />;
            })}
        </div>
    );
}

export default SideMenu;
