function TabButon({ item, handleClick, current }) {
    return (
        <button
            className={` border-black border-r border-b ${
                current == item.id ? "bg-blue-500" : "bg-green-500"
            }`}
            onClick={() => handleClick(item.id)}
        >
            {item.id}
        </button>
    );
}

export default TabButon;
