import { useState } from "react";
import PlaceHolderImg from "../../assets/placeHolder.png";

function Product({ data }) {
    const [imageLoaded, setimageLoaded] = useState(false);

    return (
        <div
            className="relative overflow-hidden grid justify-items-center text-center border-[1px] border-gray-300 shadow-xl p-4 rounded-xl"
            style={{
                backgroundImage: `${
                    imageLoaded ? "" : `url(${PlaceHolderImg})`
                }`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <p className=" absolute right-0 p-2 bg-black text-white top-0 rounded-lg">
                {data.id}
            </p>
            <div className=" truncate">
                <h2 className="font-bold text-xl capitalize">{data.title}</h2>
            </div>

            <img
                src={data.images[0]}
                alt=""
                className=" rounded-xl shadow-2xl max-w-full aspect-[1]"
                ref={(ref) => {
                    if (ref) ref.onload = () => setimageLoaded(true);
                }}
            />
            <p className=" font-medium">{data.price}$</p>
        </div>
    );
}

export default Product;
