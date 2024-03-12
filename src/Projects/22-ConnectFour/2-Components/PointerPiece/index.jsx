import { useContext } from "react";
import { GlobalContext } from "../../0-GlobalApp";

function index() {
    const { pointerStartingPosition, pointerWidth } = useContext(GlobalContext);
    return (
        <div
            className=" absolute aspect-square rounded-full bg-green-400"
            style={{ ...pointerStartingPosition, width: pointerWidth }}
        ></div>
    );
}

export default index;
