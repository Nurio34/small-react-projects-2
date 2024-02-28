import { useEffect, useRef, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import "./index.css";
import Indicator from "./1-Indicator";
import Image from "./2-Image";

function index() {
    const url = "https://picsum.photos/v2/list?page=1&limit=10";
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const slider = useRef();
    const [sliderWidth, setsliderWidth] = useState(null);
    const [trans, settrans] = useState(0);

    useEffect(() => {
        const fecthData = async () => {
            const res = await fetch(url);

            if (res.ok === false) throw new Error("Something wrong..");

            const data = await res.json();
            setData(data);
        };
        fecthData();
    }, []);

    useEffect(() => {
        const sliderWidth = parseInt(
            window.getComputedStyle(slider.current).width,
        );
        setsliderWidth(sliderWidth);
    }, []);

    const previousIndex = () => {
        if (index > 0) setIndex((ps) => ps - 1);
    };

    const nextIndex = () => {
        if (index < 9) setIndex((ps) => ps + 1);
    };

    const customIndex = (id) => {
        setIndex(id);
    };

    useEffect(() => {
        settrans(-sliderWidth * index);
    }, [index]);

    useEffect(() => {}, [trans]);

    return (
        <div
            className="imageSlider-container justify-items-center overflow-hidden"
            ref={slider}
        >
            <div className="col-start-1 col-span-4 row-start-1 row-span-4 select-none flex">
                {data.map((item, ind) => {
                    return <Image key={ind} data={item} trans={trans} />;
                })}
            </div>
            <FaChevronCircleLeft
                className="col-start-1 col-span-1 row-start-2 row-span-1 text-white self-center cursor-pointer"
                onClick={previousIndex}
            />
            <FaChevronCircleRight
                className=" col-start-3 col-span-1 row-start-2 row-span-1 text-white self-center cursor-pointer"
                onClick={nextIndex}
            />
            <div className=" flex gap-1 col-start-2 col-span-1 row-start-4 row-span-1">
                {data.map((i, ind) => {
                    return (
                        <Indicator
                            key={ind}
                            id={+i.id}
                            index={index}
                            customIndex={customIndex}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default index;
