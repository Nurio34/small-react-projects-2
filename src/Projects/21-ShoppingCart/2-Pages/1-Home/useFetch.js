import { useEffect, useState } from "react";

export const useFetch = () => {
    const [products, setproducts] = useState({});

    const fetchProducts = async () => {
        setproducts((pre) => ({ ...pre, loading: true }));

        try {
            const res = await fetch("https://fakestoreapi.com/products");

            if (!res.ok) {
                console.log(res.status);
                setproducts((pre) => ({
                    ...pre,
                    error: res.status + " " + res.statusText,
                }));
                return;
            }

            const data = await res.json();
            categories(data);

            setproducts((pre) => ({
                ...pre,
                products: data.map((obj) => ({ ...obj, amount: 0 })),
            }));
        } catch (error) {
            setproducts((pre) => ({
                ...pre,
                error: "Something went wrong...Refresh page",
            }));
            throw new Error(error);
        } finally {
            //! DEV MODE
            setproducts((pre) => ({
                ...pre,
                loading: false,
            }));
        }
        //!
    };

    const categories = (arr) => {
        const Arr = ["All"];

        arr?.forEach((item) => {
            if (!Arr.includes(item.category)) {
                Arr.push(item.category);
            }
        });

        setproducts((pre) => ({ ...pre, categories: Arr }));
    };

    useEffect(() => {
        fetchProducts();
        //! PRO MODE
        // const time = setTimeout(() => {
        //     setproducts((pre) => ({ ...pre, loading: false }));
        // }, 2000);

        // return () => clearTimeout(time);
        //!
    }, []);

    return products;
};
