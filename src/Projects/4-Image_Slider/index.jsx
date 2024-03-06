import { useEffect, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import "./index.css";
import Button from "../../Components/Button";
import Indicator from "./1-Indicator";

function index({ adjustHeader }) {
    if (adjustHeader) {
        const Logo = "picsum_photos_API";
        const Url = "https://picsum.photos/";
        const Header = {
            logo: Logo,
            url: Url,
        };
        adjustHeader(Header);
    }

    const url = "https://picsum.photos/v2/list?page=1&limit=10";
    const [data, setData] = useState([]);

    useEffect(() => {
        const fecthData = async () => {
            const res = await fetch(url);

            if (res.ok === false) throw new Error("Something wrong..");

            const data = await res.json();

            setData(data);
        };
        fecthData();
    }, []);

    const [index, setIndex] = useState(0);

    const previousIndex = () => {
        if (index > 0) setIndex((ps) => ps - 1);
        console.log(index);
    };

    const nextIndex = () => {
        if (index < 9) setIndex((ps) => ps + 1);
        console.log(index);
    };

    const customIndex = (id) => {
        setIndex(id);
        console.log(id);
    };

    return (
        <div className="imageSlider-container justify-items-center">
            <img
                src={data?.[index]?.download_url}
                alt=""
                className="block col-start-1 col-span-4 row-start-1 row-span-4 select-none"
            />
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
