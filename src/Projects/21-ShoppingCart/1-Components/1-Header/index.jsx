import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

function index() {
    const [width, setwidth] = useState(null);
    const [toggle, settoggle] = useState(false);

    const currentWidth = () => {
        setwidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", currentWidth);

        return () => window.removeEventListener("resize", currentWidth);
    }, []);

    return (
        <header className="flex justify-between items-center p-2">
            <div className=" uppercase">redux </div>
            <form className=" grow flex justify-center">
                <input
                    type="search"
                    name="search"
                    id="searchInp"
                    className=" border border-black py-1 px-2 rounded-[100vw] w-5/6"
                />
            </form>
            <div>
                {width < 640 ? (
                    <div className=" relative">
                        <IoIosMenu
                            className=" text-2xl cursor-pointer"
                            onClick={(e) => settoggle(!toggle)}
                        />
                        {toggle && (
                            <div className=" absolute right-0 grid shadow-lg p-4 ">
                                <Link
                                    to="/shoppingcart"
                                    className=" text-purple-600 underline"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/shoppingcart/cart"
                                    className=" text-purple-600 underline"
                                >
                                    Cart
                                </Link>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className=" space-x-4">
                        <Link
                            to="/shoppingcart/home"
                            className=" text-purple-600 underline"
                        >
                            Home
                        </Link>
                        <Link
                            to="/shoppingcart/home"
                            className=" text-purple-600 underline"
                        >
                            Cart
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}

export default index;
