import List from "./3-List";

function Item({ item, handleToggle, isOpen }) {
    return (
        <List
            key={item.label}
            list={item}
            handleToggle={handleToggle}
            isOpen={isOpen}
        />
    );
}

export default Item;
