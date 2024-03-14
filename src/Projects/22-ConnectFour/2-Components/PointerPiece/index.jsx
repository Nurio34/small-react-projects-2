import { useContext, useEffect } from "react";
import { GlobalContext } from "../../0-GlobalApp";

function index() {
    const { pointerPosition, Pointer } = useContext(GlobalContext);
    return (
        <div
            className=" absolute aspect-square rounded-full bg-green-400 -z-10"
            style={{ ...pointerPosition }}
            ref={Pointer}
        ></div>
    );
}

export default index;
