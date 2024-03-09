import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../../0-GlobalStore/Slices/cart";

function index({ product }) {
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
            <button
                onClick={(e) => {
                    dispatch(addToCart(product));
                }}
                className=" justify-self-center bg-green-400 text-white py-1 px-2 rounded-[100vw]"
            >
                Add Cart
            </button>
        </li>
    );
}

export default index;
