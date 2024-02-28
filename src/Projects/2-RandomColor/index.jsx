import { useEffect, useState } from "react";
import Buttons from "./1-Buttons";
import Screen from "./2-Screen";
import { HexArray, Rgb } from "./data";

function index() {
    const [isHex, setisHex] = useState(true);
    const [color, setColor] = useState(null);

    useEffect(() => {
        createHexClr();
    }, []);

    const createOnHex = () => {
        setisHex(true);
        if (!isHex) createHexClr();
    };
    const createOnRgb = () => {
        setisHex(false);
        if (isHex) createRgbClr();
    };

    const createHexClr = () => {
        const randomHexValue = Array(7)
            .fill("#")
            .map((item, index) => {
                if (index != 0) {
                    const random = Math.floor(Math.random() * HexArray.length);
                    return HexArray[random];
                }
                return "#";
            })
            .join("");
        setColor(randomHexValue);
    };

    const createRgbClr = () => {
        const randomRgbValue = Array(3)
            .fill("#")
            .map((item) => {
                const random = Math.floor(Math.random() * Rgb + 1);
                return random;
            });
        const rgbColor = `rgb(${randomRgbValue})`;
        setColor(rgbColor);
    };

    const createRandomClr = () => {
        switch (isHex) {
            case true:
                createHexClr();
                return;
                break;
            case false:
                createRgbClr();
                return;
                break;

            default:
                break;
        }
    };

    return (
        <div className="p-4 bg-gray-200 h-screen flex flex-col gap-4">
            <Buttons
                createOnHex={createOnHex}
                createOnRgb={createOnRgb}
                createRandomClr={createRandomClr}
            />
            <Screen isHex={isHex} color={color} />
        </div>
    );
}

export default index;
