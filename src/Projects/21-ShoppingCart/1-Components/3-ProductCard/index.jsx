import {
    IoMdStar,
    IoMdStarHalf,
    IoMdStarOutline,
    IoMdAddCircle,
    IoMdRemoveCircle,
} from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    removeFromCart,
    addByOne,
    removeByOne,
} from "../../0-GlobalStore/Slices/cart";

function index({ product, showBtns }) {
    const cart = useSelector((state) => state.cart);
    const { image, title, rating } = product;
    const rate = rating.rate;
    const first = parseInt(String(rate).split(".")[0]);
    const last =
        String(rate).split(".").length > 1
            ? parseInt(String(rate).split(".")[1])
            : 0;

    const dispatch = useDispatch();

    return (
        <li className=" border border-black p-2 grid rounded-lg">
            <h1 className=" truncate " title={product.title}>
                {product.title}
            </h1>
            <img
                src={image}
                alt={product.title}
                width={100}
                className=" aspect-square justify-self-center"
            />
            <div className="flex items-center justify-around">
                <p>{product.price}$</p>
                <p className=" flex">
                    {[...Array(first)].map((item) => {
                        return <IoMdStar />;
                    })}
                    {last >= 5 ? <IoMdStarHalf /> : <IoMdStarOutline />}
                    {[...Array(5 - first - 1)].map((item) => {
                        return <IoMdStarOutline />;
                    })}
                </p>
            </div>
            <div className="flex justify-between items-center text-xs sm:gap-3">
                {showBtns && (
                    <button
                        onClick={(e) => {
                            dispatch(removeByOne(product));
                        }}
                        disabled={
                            !product.amount || product?.amount < 1
                                ? true
                                : false
                        }
                    >
                        <IoMdRemoveCircle
                            className={`text-xl pointer-events-none ${
                                product.amount < 1
                                    ? " text-gray-500"
                                    : " text-red-500"
                            }`}
                        />
                    </button>
                )}
                <button
                    onClick={(e) => {
                        {
                            cart.some((obj) => obj.id === product.id)
                                ? dispatch(removeFromCart(product))
                                : dispatch(addToCart(product));
                        }
                    }}
                    className={`justify-self-center text-white py-1 px-2 rounded-[100vw] grow  ${
                        !cart.some((obj) => obj.id === product.id) ||
                        (product.amount && product.amount < 1)
                            ? " bg-green-400"
                            : " bg-red-600"
                    }`}
                >
                    {!cart.some((obj) => obj.id === product.id) ||
                    (product.amount && product.amount < 1)
                        ? "Add Cart"
                        : "Remove Cart"}
                </button>
                {showBtns && (
                    <button
                        className="text-xl text-blue-600"
                        onClick={(e) => {
                            dispatch(addByOne(product));
                        }}
                    >
                        <IoMdAddCircle className={` pointer-events-none `} />
                    </button>
                )}
            </div>
        </li>
    );
}

export default index;
