import React from "react";

function Header() {
    return (
        <div className="flex justify-around items-center border-b-[1px] shadow-xl border-gray-300 py-2">
            <a
                href="https://dummyjson.com/docs/products"
                target="_blank"
                className=" font-extrabold text-2xl"
                style={{
                    filter: "drop-shadow(0 0 7px black",
                    WebkitTextStroke: "1px white",
                }}
            >
                dummyJSON_API
            </a>
            <a
                href="https://github.com/nurio34"
                target="_blank"
                className="font-bold text-xl font-mono text-white"
                style={{
                    filter: "drop-shadow(0 0 7px orange)",
                    WebkitTextStroke: "1px black",
                }}
            >
                Nurio34
            </a>
        </div>
    );
}

export default Header;
