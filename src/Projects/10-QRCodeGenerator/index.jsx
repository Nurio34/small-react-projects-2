import React, { useRef, useState } from "react";
import Header from "./1-Header";
import QRCode from "react-qr-code";
import Button from "../../Components/Button";

function index({ adjustHeader }) {
    const Logo = "react-qr-code";
    const Url = "https://www.npmjs.com/package/react-qr-code";
    const Header = {
        logo: Logo,
        url: Url,
    };
    adjustHeader(Header);

    const [value, setValue] = useState({});
    const input = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue({ ...value, qr: value.input, input: "" });
        input.current.focus();
    };

    return (
        <div>
            <main className=" grid place-content-center gap-8 p-8">
                <form
                    className="grid shadow-lg p-4 rounded-lg"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="textInp">
                        <input
                            type="text"
                            name="name"
                            id="textInp"
                            autoFocus
                            value={value.input || ""}
                            className=" shadow-lg py-1 px-2 w-full"
                            placeholder="Enter value..."
                            onChange={(e) =>
                                setValue({ ...value, input: e.target.value })
                            }
                            ref={input}
                        />
                    </label>
                    <Button value={"Submit"} bgClr={"pink"} fn={handleSubmit} />
                </form>
                <QRCode value={value.qr || "nurio34"} size={300} level="L" />
            </main>
        </div>
    );
}

export default index;
