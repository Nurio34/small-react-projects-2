import { useEffect, useRef, useState } from "react";
import Star from "./1-Star";
import Button from "../../Components/Button";

function index({ adjustHeader, adjustHeaderPosition }) {
    const Logo = "Review_Stars";
    const Url = "#";
    const Header = {
        logo: Logo,
        url: Url,
    };
    adjustHeader(Header);

    adjustHeaderPosition("");

    const totalStars = useRef(10);

    const [currentStar, setcurrentStar] = useState([]);
    const [isSet, setisSet] = useState(false);

    const handleCurrentStar = (id) => {
        if (!isSet) {
            const stars = Array(id)
                .fill("")
                .map((i, ind) => ind + 1);

            setcurrentStar(stars);
        }
    };

    const handle_isSet_True = () => {
        setisSet(true);
    };

    const handle_isSet_False = () => {
        setisSet(false);
    };

    return (
        <div className=" text-center grid gap-4 p-4 bg-gray-300">
            <h1 className=" uppercase font-extrabold text-4xl">review</h1>
            <div className="flex justify-center items-center">
                {Array(totalStars.current)
                    .fill("s")
                    .map((it, ind) => {
                        return (
                            <Star
                                key={ind}
                                id={ind + 1}
                                handleCurrentStar={handleCurrentStar}
                                currentStar={currentStar}
                                handle_isSet_True={handle_isSet_True}
                            />
                        );
                    })}
                {isSet && (
                    <div className=" ml-4">
                        <Button
                            value={"Update"}
                            color={"black"}
                            bgClr={"yellow"}
                            fn={handle_isSet_False}
                        />
                    </div>
                )}
            </div>
            {isSet && <p>You rated {currentStar.length} / 10</p>}
        </div>
    );
}

export default index;
