import { useFetch } from "./useFetch";
import { url, options } from "./API_Url";
import Card from "./Card";
import { useState } from "react";
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

    const { loading, data, error } = useFetch(url, options);
    const { products } = data;

    const { modal, modalProduct, handleModal } = useModal(products);
    const { title, thumbnail, price, description } = modalProduct;

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
    );
}

export default index;
