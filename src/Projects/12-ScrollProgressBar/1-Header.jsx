import React, { useEffect, useRef } from "react";
import QRCode from "react-qr-code";

function Header({ handleHeader }) {
    const Header = useRef();

    useEffect(() => {
        const Header_Height = Header.current
            ? parseInt(getComputedStyle(Header.current).height)
            : 0;
        handleHeader(Header_Height);
    }, []);

    return (
        <header
            className="flex justify-around items-center border-b-[1px] shadow-xl border-gray-300 py-2 fixed w-full"
            ref={Header}
        >
            <a
                href="https://www.npmjs.com/package/react-qr-code"
                target="_blank"
                className=" font-extrabold text-2xl"
                style={{
                    filter: "drop-shadow(0 0 8px black",
                    WebkitTextStroke: "1px white",
                }}
            >
                Scroll Progress Bar
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
