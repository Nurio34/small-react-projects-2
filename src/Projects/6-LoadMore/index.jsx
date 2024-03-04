import { useEffect, useState } from "react";
import Product from "./2-Product";
import Button from "../../Components/Button";
import Header from "../Header";

function index({ adjustHeader }) {
    const Logo = "dummy_json_API";
    const Url = "https://dummyjson.com/";
    const Header = {
        logo: Logo,
        url: Url,
    };
    adjustHeader(Header);

    const [data, setData] = useState({
        isLoading: true,
    });
    const [pagination, setpagination] = useState({
        limit: 10,
        skip: 0,
    });

    const fetchData = async (limit) => {
        try {
            const res = await fetch(
                `https://dummyjson.com/products?limit=${limit}&skip=${pagination.skip}&select=title,price`,
            );

            if (res.ok !== true) {
                setData((ps) => {
                    return { ...ps, error: "Something wrong with response" };
                });
            }

            const data = await res.json();
            console.log(data);
            setData((ps) => {
                return { ...ps, data: data };
            });
        } catch (error) {
            setData((ps) => {
                return { ...ps, error: `Something wrong : ${error}` };
            });
        } finally {
            setData((ps) => {
                return { ...ps, isLoading: false };
            });
        }
    };

    useEffect(() => {
        fetchData(pagination.limit);
    }, [pagination]);

    const loadMore = () => {
        setpagination((ps) => {
            return { ...ps, limit: pagination.limit + 10 };
        });
    };

    useEffect(() => {
        console.log(pagination);
    }, [pagination]);

    return (
        <div className="grid grid-cols-1">
            <div className="p-4">
                {data.isLoading && <div>Loading...</div>}
                {data.error && <div>{data.error}</div>}

                {data.data && (
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        {data.data.products.map((item, ind) => {
                            return <Product key={item.id} data={item} />;
                        })}
                    </div>
                )}

                {data.data && (
                    <Button value={"Load More"} bgClr={"green"} fn={loadMore} />
                )}
            </div>
        </div>
    );
}

export default index;
