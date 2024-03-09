import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Footer({ adjustHeight, adjustHeader }) {
    const [guides, setGuides] = useState(null);
    useEffect(() => {
        if (guides) {
            window.open(
                `http://127.0.0.1:5500/src/guides/html/${guides}.html`,
                "_blank",
            );
        }
    }, [guides]);

    return (
        <footer
            className="p-4 bg-pink-200 text-sm md:text-base"
            ref={(ref) => {
                if (ref) {
                    const height = parseInt(getComputedStyle(ref).height);
                    adjustHeight({ footer: height });
                }
            }}
        >
            <div>
                <h1 className=" font-bold flex justify-between">
                    Projects
                    <select
                        name=""
                        id=""
                        onChange={(e) => {
                            setGuides(e.target.value);
                        }}
                    >
                        <option disabled defaultValue={"guides"}>
                            Guides
                        </option>
                        <option value="semantic">Semantic</option>
                        <option value="events">Events</option>
                        <option value="seo">Seo</option>
                        <option value="git">Git</option>
                    </select>
                </h1>
                <div
                    className=" grid grid-cols-4 text-[9px] leading-3 text-purple-600 underline justify-items-start 
                                sm:leading-normal sm:text-base
                                md:grid-cols-5
                                lg:grid-cols-6 
                                xl:grid-cols-7 "
                >
                    <Link to={"/"} onClick={() => adjustHeader({})}>
                        Home
                    </Link>
                    <Link to={"/animation"} onClick={() => adjustHeader({})}>
                        Animation
                    </Link>
                    <Link to={"/accordion"} onClick={() => adjustHeader({})}>
                        Accordion
                    </Link>
                    <Link to={"/randomcolor"} onClick={() => adjustHeader({})}>
                        RandomColor
                    </Link>
                    <Link to={"/reviewstars"} onClick={() => adjustHeader({})}>
                        ReviewStarts
                    </Link>
                    <Link to={"/imageslider"} onClick={() => adjustHeader({})}>
                        Image_Slider
                    </Link>
                    <Link to={"/imageslider2"} onClick={() => adjustHeader({})}>
                        Image_Slider2
                    </Link>
                    <Link to={"/loadmore"} onClick={() => adjustHeader({})}>
                        LoadMore
                    </Link>
                    <Link to={"/loadmore2"} onClick={() => adjustHeader({})}>
                        LoadMore2
                    </Link>
                    <Link to={"/sidemenutree"} onClick={() => adjustHeader({})}>
                        SideMenuTree
                    </Link>
                    <Link
                        to={"/sidemenutree2"}
                        onClick={() => adjustHeader({})}
                    >
                        SideMenuTree2
                    </Link>
                    <Link
                        to={"/qrcodegenerator"}
                        onClick={() => adjustHeader({})}
                    >
                        QRCodeGenerator
                    </Link>
                    <Link to={"/themechange"} onClick={() => adjustHeader({})}>
                        ThemeChange
                    </Link>
                    <Link
                        to={"/scrollprogressbar"}
                        onClick={() => adjustHeader({})}
                    >
                        ScrollProgressBar
                    </Link>
                    <Link to={"/tabs"} onClick={() => adjustHeader({})}>
                        Tabs
                    </Link>
                    <Link to={"/modal"} onClick={() => adjustHeader({})}>
                        Modal
                    </Link>
                    <Link
                        to={"/githubuserfinder"}
                        onClick={() => adjustHeader({})}
                    >
                        GithubUserFinder
                    </Link>
                    <Link
                        to={"/searchautocomplate"}
                        onClick={() => adjustHeader({})}
                    >
                        SearchAutocomplate
                    </Link>
                    <Link to={"/tictactoe"} onClick={() => adjustHeader({})}>
                        TicTacToe
                    </Link>
                    <Link to={"/customhooks"} onClick={() => adjustHeader({})}>
                        CustomHooks
                    </Link>
                    <Link to={"/weatherapp"} onClick={() => adjustHeader({})}>
                        WeatherApp
                    </Link>
                    <Link to={"/foodrecipe"} onClick={() => adjustHeader({})}>
                        FoodRecipe
                    </Link>
                    <Link to={"/shoppingcart"} onClick={() => adjustHeader({})}>
                        ShoppingCart
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
