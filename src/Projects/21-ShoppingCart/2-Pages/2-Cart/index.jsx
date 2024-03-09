import { useSelector } from "react-redux";
import ProductCard from "../../1-Components/3-ProductCard";

function index() {
    const state = useSelector((state) => state.cart);
    console.log(state);
    return (
        <section className="p-2 grid grid-cols-[0.8fr,0.2fr]">
            <ul
                className="grid grid-cols-1 gap-2 
                md:grid-cols-2 md:gap-8 md:p-4
                lg:grid-cols-3 lg:gap-12 lg:p-8
                xl:grid-cols-4 xl:gap-16 xl:p-12
                "
            >
                {state?.map((product) => {
                    return <ProductCard key={product.id} product={product} />;
                })}
            </ul>
            <div>
                <h2>Total Amount</h2>
            </div>
        </section>
    );
}

export default index;
