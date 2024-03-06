import { useFetch } from "./useFetch";
import { url, options } from "./API_Url";
import Card from "./Card";

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

    const { loading, data, error } = useFetch(url, options);
    const { products } = data;
    console.log(products);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>error</p>}
            {products && products.length && (
                <ul
                    className=" grid grid-cols-2 gap-4 p-4
                 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                >
                    {products.map((product) => {
                        return <Card key={product.id} product={product} />;
                    })}
                </ul>
            )}
        </div>
    );
}

export default index;
