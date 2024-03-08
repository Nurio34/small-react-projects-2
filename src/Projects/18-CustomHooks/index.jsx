import { useFetch } from "./useFetch";
import { dummy_url, lorem_url, options } from "./API_Url";
import Card from "./Card";
import { useEffect, useState } from "react";
import { useModal } from "./useModal";

function index({ adjustHeader }) {
    if (adjustHeader) {
        const Logo = "dummy_json_API";
        const Url = "https://dummyjson.com/";
        const Header = {
            logo: Logo,
            url: Url,
        };
        adjustHeader(Header);
    }

    const { loading, data, error } = useFetch(dummy_url, options);
    const { products } = data;

    const { modal, modalProduct, handleModal } = useModal(products);
    const { title, thumbnail, price, description } = modalProduct;

    const sections = {
        titles: ["About", "Services", "Contact", "Blog"],
        style: {
            width: "100vw",
            height: "100vh",
        },
    };

    const createRgbClr = () => {
        const Rgb = 255;

        const randomRgbValue = Array(3)
            .fill("#")
            .map((item) => {
                const random = Math.floor(Math.random() * Rgb + 1);
                return random;
            });
        const rgbColor = `rgb(${randomRgbValue})`;
        return rgbColor;
    };

    const [texts, setTexts] = useState([]);

    const fetchLorem = async () => {
        const res = await fetch(lorem_url);
        const data = await res.json();
        setTexts((pre) => [...pre, ...data]);
    };

    useEffect(() => {
        sections.titles.forEach((title) => {
            fetchLorem();
        });

        const goTop = (e) => {
            setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", goTop);

        const resize = (e) => {
            setscreenSize({
                width: e.target.innerWidth,
                height: e.target.innerHeight,
            });
        };
        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("scroll", goTop);
            window.removeEventListener("resize", resize);
        };
    }, []);

    const [scrollTop, setScrollTop] = useState(null);
    const [screenSize, setscreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    return (
        <div>
            <nav className="flex justify-evenly bg-pink-400 underline text-white font-semibold">
                {sections.titles.map((title, ind) => {
                    return (
                        <a href={`#${title.toLocaleLowerCase()}`} key={ind}>
                            {title}
                        </a>
                    );
                })}
            </nav>
            <div>
                {loading && <p>Loading...</p>}
                {error && <p>error</p>}
                {products && products.length && (
                    <ul
                        className=" grid grid-cols-2 gap-4 p-4
                 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                    >
                        {products.map((product) => {
                            return (
                                <Card
                                    key={product.id}
                                    product={product}
                                    handleModal={handleModal}
                                />
                            );
                        })}
                    </ul>
                )}
                {modal && (
                    <div
                        id="modal"
                        className=" text-center fixed
                 rounded-xl p-4 shadow-lg w-1/2 lg:w-1/3 top-1/2 left-1/2 bg-black  text-white"
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
                )}
            </div>
            {texts.length > 0 &&
                sections.titles.map((title, ind) => {
                    return (
                        <div
                            key={ind}
                            id={title.toLocaleLowerCase()}
                            className="p-4"
                            style={{
                                width: sections.style.width,
                                height: sections.style.height,
                                background: createRgbClr(),
                            }}
                        >
                            <h1 className=" font-bold text-2xl uppercase text-center">
                                {title}
                            </h1>
                            <p>{texts[ind]}</p>
                        </div>
                    );
                })}
            {scrollTop >= 1300 && (
                <button
                    className=" fixed bottom-8 right-8 py-1 px-4 bg-blue-500 textwh font-bold rounded-lg"
                    onClick={(e) =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                >
                    Go Top
                </button>
            )}
            <div className=" fixed top-0 right-0 bg-black text-white w-min p-4 text-center">
                W I D T H {String(screenSize.width).split("").join(" ")} p x H E
                I G H T {String(screenSize.height).split("").join(" ")}
            </div>
        </div>
    );
}

export default index;
