import React, { useEffect, useRef } from "react";
import QRCode from "react-qr-code";

function Header() {
    return (
        <header className="flex justify-around items-center border-b-[1px] shadow-xl border-gray-300 py-2  w-full">
            <a
                href="https://jsonplaceholder.typicode.com/"
                target="_blank"
                className=" font-extrabold text-2xl"
                style={{
                    filter: "drop-shadow(0 0 8px black",
                    WebkitTextStroke: "1px white",
                }}
            >
                JSONPlaceholder
            </a>
            <a
                href="https://github.com/nurio34"
                target="_blank"
                className="font-bold text-xl font-mono text-white flex gap-2"
                style={{
                    filter: "drop-shadow(0 0 7px orange)",
                    WebkitTextStroke: "1px black",
                }}
            >
                Nurio34
                <QRCode
                    value={"https://github.com/nurio34"}
                    size={32}
                    level="L"
                />
            </a>
        </header>
    );
}

export default Header;
