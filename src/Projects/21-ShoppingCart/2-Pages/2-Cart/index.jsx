import { useSelector } from "react-redux";
import ProductCard from "../../1-Components/3-ProductCard";

function index() {
    const state = useSelector((state) => state.cart);
    let total = state.reduce((sum, obj) => sum + obj.price * obj.amount, 0);
    total = total.toFixed(2);
    const showBtns = location.pathname === "/shoppingcart/cart" ? true : false;

    return (
        <section className="p-2 grid grid-cols-[1fr,0.4fr] items-start">
            <ul
                className="grid grid-cols-1 gap-2 
                md:grid-cols-2 md:gap-8 md:p-4
                lg:grid-cols-3 lg:gap-12 lg:p-8
                xl:grid-cols-4 xl:gap-16 xl:p-12
                "
            >
                {state?.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            product={product}
                            showBtns={showBtns}
                        />
                    );
                })}
            </ul>
            <div className="p-2 grid gap-4">
                <h2 className=" text-center font-bold text-2xl">
                    Total Amount
                </h2>
                {state.map((product) => {
                    return (
                        <div className=" border-b border-gray-400">
                            <p className=" font-bold text-lg">
                                {product.title}
                            </p>
                            <p>Amount : {product.amount}</p>
                            <p>Price : {product.price}</p>
                            <p>
                                Total :{" "}
                                {(product.amount * product.price).toFixed(2)}
                            </p>
                        </div>
                    );
                })}
                <p className=" text-right font-extrabold justify-self-end py-1 px-4 bg-green-600 text-white">
                    Total : {total}$
                </p>
            </div>
        </section>
    );
}

export default index;
