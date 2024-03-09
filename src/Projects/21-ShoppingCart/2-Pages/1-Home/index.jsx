import React, { useEffect, useState } from "react";
import ProductCard from "../../1-Components/3-ProductCard";
import { ColorRing } from "react-loader-spinner";
import { useFetch } from "./useFetch";
function index() {
    const products = useFetch();

    return (
        <main>
            <section className=" grid p-2 gap-4">
                <div
                    className=" justify-self-center grid gap-4 "
                    style={{
                        gridTemplateColumns: `repeat(${products?.categories?.length},minmax(60px,1fr))`,
                    }}
                >
                    {products?.categories?.map((category, ind) => {
                        return (
                            <button
                                key={ind}
                                className=" text-sm truncate overflow-hidden capitalize bg-pink-300 shadow-lg rounded-[100vw] py-1 px-2"
                                title={category}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>
                {products.loading && (
                    <div className="grid justify-items-center">
                        <p className=" text-4xl font-bold">
                            Loading Products...
                        </p>
                        <ColorRing width={300} height={300} />
                    </div>
                )}
                {!products.loading && products.error && (
                    <p className=" text-4xl font-bold text-center">
                        {products.error}
                    </p>
                )}
                <ul
                    className="grid grid-cols-2 gap-2 
                md:grid-cols-3 md:gap-8 md:p-8
                lg:grid-cols-4 lg:gap-12 lg:p-12
                xl:grid-cols-5 xl:gap-16 xl:p-16
                "
                >
                    {!products.loading &&
                        products?.products?.map((product) => {
                            return (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            );
                        })}
                </ul>
            </section>
        </main>
    );
}

export default index;
