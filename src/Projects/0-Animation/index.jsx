import { useContext, useEffect, useRef, useState } from "react";
import "./index.css";
import Square from "./Square";
import Bubu from "../../assets/bubu.webp";

function index({ adjustHeader, adjustHeaderPosition }) {
    const Logo = "Bubu&Dudu";
    const Url = "https://www.youtube.com/watch?v=vi9ql9-u9tM";
    const Header = {
        logo: Logo,
        url: Url,
    };
    adjustHeader(Header);

    adjustHeaderPosition("");

    const Container = useRef();
    const [size, setsize] = useState({
        width: null,
        height: null,
        size: 19,
    });
    const squaresArr = [...Array(size.totalSquares)];

    const [isWorking, setisWorking] = useState(false);
    const [count, setcount] = useState(0);

    useEffect(() => {
        const handleTouchStart = () => {
            setisWorking(true);
        };
        const handleTouchEnd = () => {
            setisWorking(false);
        };

        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("mousedown", handleTouchStart);
        window.addEventListener("touchend", handleTouchEnd);
        window.addEventListener("mouseup", handleTouchEnd);

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
            window.removeEventListener("mousedown", handleTouchStart);
            window.removeEventListener("mouseup", handleTouchEnd);
        };
    }, []);

    useEffect(() => {
        const touchMove = (e) => {
            setcount((pre) => pre + 1);
        };
        window.addEventListener("touchmove", touchMove);
        return () => {
            window.removeEventListener("touchmove", touchMove);
        };
    }, [count]);

    useEffect(() => {
        if (Container.current) {
            const Container_Width = parseInt(
                getComputedStyle(Container.current).width,
            );
            const Container_Height = parseInt(
                getComputedStyle(Container.current).height,
            );
            setsize((pre) => ({
                ...pre,
                width: Container_Width,
                height: Container_Height,
                column: Math.round(Container_Width / size.size),
                row: Math.round(Container_Height / size.size),
                totalSquares:
                    Math.round(Container_Width / size.size) *
                    Math.round(Container_Height / size.size),
            }));
        }
    }, []);
    return (
        <div
            className="animation-container w-screen h-screen flex flex-wrap overflow-hidden"
            ref={Container}
            style={{
                backgroundImage: `url(${Bubu})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "rgba(0,0,0,0.9)",
            }}
        >
            {squaresArr.map((_, i) => {
                return (
                    <Square id={i} key={i} size={size} isWorking={isWorking} />
                );
            })}
        </div>
    );
}

export default index;
