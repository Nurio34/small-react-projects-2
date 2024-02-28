import { FaRegStar } from "react-icons/fa";

function Star({ id, handleCurrentStar, currentStar, handle_isSet_True }) {
    return (
        <FaRegStar
            className={`${
                currentStar.includes(id) && "text-yellow-500"
            } cursor-pointer`}
            onMouseEnter={() => handleCurrentStar(id)}
            onClick={handle_isSet_True}
        />
    );
}

export default Star;
