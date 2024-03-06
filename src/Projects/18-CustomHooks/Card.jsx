import { useState } from "react";

function Card({ product }) {
    const { title, thumbnail, price, description } = product;

    const [modal, setmodal] = useState(false);
    const handleModal = (e) => {
        if (e.target.id === "modal") {
            console.log("ok");
            setmodal(true);
            return;
        }
        setmodal(!modal);
    };

    return (
        <>
            <li
                className=" border border-black p-4 rounded-xl text-center "
                onClick={handleModal}
            >
                <h2>{title}</h2>
                <img
                    src={thumbnail}
                    alt={title}
                    className=" w-full aspect-square"
                />
                <p>{price}$</p>
            </li>
            {modal && (
                <div
                    className=" absolute w-full h-full bg-gray-300"
                    onClick={handleModal}
                >
                    <div
                        id="modal"
                        className=" text-center absolute
                bg-white rounded-xl p-4 shadow-lg"
                        onClick={handleModal}
                    >
                        <h2 className=" pointer-events-none">{title}</h2>
                        <img
                            src={thumbnail}
                            alt={title}
                            className=" w-full aspect-square pointer-events-none"
                        />
                        <p className=" pointer-events-none">{description}</p>
                        <p className=" pointer-events-none">{price}$</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Card;
