function Indicator({ id, index, customIndex }) {
    return (
        <button
            className={`block w-4 aspect-square rounded-full self-center cursor-pointer ${
                id == index ? "bg-black" : "bg-white"
            }`}
            onClick={() => customIndex(id)}
        ></button>
    );
}

export default Indicator;
