import PlaceHolderImg from "../../assets/placeHolder.png";

function Product({ data }) {
    return (
        <div className="relative text-center w-fit border-[1px] border-gray-300 shadow-xl p-4 rounded-xl">
            <p className=" absolute right-0 p-2 bg-black text-white top-0 rounded-lg">
                {data.id}
            </p>
            <h2 className="font-bold text-xl capitalize">{data.title}</h2>
            <img src={PlaceHolderImg} alt="" />
            <p className=" font-medium">{data.price}$</p>
        </div>
    );
}

export default Product;
