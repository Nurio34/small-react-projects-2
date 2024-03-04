import { memo } from "react";
import QRCode from "react-qr-code";
import { useLocation } from "react-router-dom";

function Header({ adjustHeight, header, headerPosition }) {
    const location = useLocation();

    return (
        <header
            className="flex justify-around items-center border-b-[1px] shadow-xl border-gray-300 py-2  w-full bg-white"
            style={{
                position: `${
                    location.pathname === "/scrollprogressbar" ? "fixed" : ""
                }`,
            }}
            ref={(ref) => {
                if (ref) {
                    const height = parseInt(getComputedStyle(ref).height);
                    adjustHeight({ header: height });
                }
            }}
        >
            <a
                href={header.url}
                target="_blank"
                className=" font-extrabold text-2xl flex gap-1"
                style={{
                    filter: "drop-shadow(0 0 8px black",
                    WebkitTextStroke: "1px white",
                }}
            >
                {header.logo}
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

export default memo(Header);
