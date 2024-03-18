import { useGlobalContext } from "../0-GlobalApp";
import { useEffect } from "react";

function index() {
    const { isModalOpen, adjustTimer } = useGlobalContext();

    return (
        <div className=" flex justify-between py-2 px-4 items-center">
            <h1
                className=" uppercase text-blue-400 font-bold"
                style={{
                    WebkitTextStroke: "1px black",
                }}
            >
                expense tracker
            </h1>
            <button
                style={{ fontVariant: "all-small-caps" }}
                className={`px-2 bg-green-500 rounded-md text-sm transition-all 
                hover:scale-105 
                active:scale-100`}
                onClick={adjustTimer}
            >
                add new transaction
            </button>
        </div>
    );
}

export default index;
