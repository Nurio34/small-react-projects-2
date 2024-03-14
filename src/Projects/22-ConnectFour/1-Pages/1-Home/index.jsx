import React, { useContext, useRef, useState } from "react";
import { GlobalContext } from "../../0-GlobalApp";

function index() {
    const { settings, setIsGameStart } = useContext(GlobalContext);
    const Column = useRef();
    const Row = useRef();
    const handleForm = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget));
        settings.column = parseInt(formData.column);
        settings.row = parseInt(formData.row);

        if (Column.current && Row.current) {
            if (Column.current.value && Row.current.value) {
                setIsGameStart(true);
            }
        }
    };
    return (
        <div className="  h-full grid place-content-center">
            <form
                className="bg-pink-300 space-y-4 p-[4vw] grid rounded-lg"
                onSubmit={handleForm}
            >
                <div className="flex gap-4">
                    <select
                        name="column"
                        id="columnSelect"
                        className=" rounded-md"
                        ref={Column}
                    >
                        {[...Array(5)].map((_, ind) => {
                            if (ind === 0) {
                                return (
                                    <option value="" selected disabled>
                                        Column
                                    </option>
                                );
                            }
                            return <option value={ind + 6}>{ind + 6}</option>;
                        })}
                    </select>
                    <select
                        name="row"
                        id="rowSelect"
                        className=" rounded-md"
                        ref={Row}
                    >
                        {[...Array(5)].map((_, ind) => {
                            if (ind === 0) {
                                return (
                                    <option value="" selected disabled>
                                        Row
                                    </option>
                                );
                            }
                            return <option value={ind + 5}>{ind + 5}</option>;
                        })}
                    </select>
                </div>
                <button className=" py-1 px-2 bg-blue-600 text-white rounded-md">
                    Start Game
                </button>
            </form>
        </div>
    );
}

export default index;
