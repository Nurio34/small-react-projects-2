import { useEffect, useState } from "react";
import Header from "./1-Header";
import Product from "./2-Product";
import Button from "../../Components/Button";

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

    const fetchData = async (limit, skip) => {
        try {
            const res = await fetch(
                `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
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
        fetchData(pagination.limit, pagination.skip);
    }, [pagination]);

    const previous = () => {
        if (pagination.skip >= 10) {
            setpagination((ps) => {
                return { ...ps, skip: pagination.skip - 10 };
            });
        }
    };
    const next = () => {
        if (pagination.skip <= data.data.total - 20) {
            setpagination((ps) => {
                return { ...ps, skip: pagination.skip + 10 };
            });
        }
    };

    useEffect(() => {
        console.log(pagination);
    }, [pagination]);

    return (
        <div className="grid grid-cols-1 ">
            <div className="p-4">
                {data.isLoading && <div>Loading...</div>}
                {data.error && <div>{data.error}</div>}

                {data.data && (
                    <div
                        className="grid grid-cols-2 gap-4 justify-center items-center 
                    md:grid-cols-3
                    lg:grid-cols-4 xl:grid-cols-5"
                    >
                        {data.data.products.map((item, ind) => {
                            return <Product key={item.id} data={item} />;
                        })}
                    </div>
                )}

                {data.data && (
                    <div className="flex gap-4 justify-evenly">
                        <Button
                            value={
                                pagination.skip === 0
                                    ? "First Page"
                                    : "Previous"
                            }
                            color={pagination.skip === 0 ? "black" : "white"}
                            bgClr={pagination.skip === 0 ? "gray" : "green"}
                            // fn={pagination.skip !== 0 && previous}
                            fn={previous}
                            isDi
                            sabled={pagination.skip === 0 ? true : false}
                        />
                        <Button
                            value={
                                pagination.skip === data.data.total - 10
                                    ? "Last Page"
                                    : "Next"
                            }
                            color={
                                pagination.skip === data.data.total - 10
                                    ? "black"
                                    : "white"
                            }
                            bgClr={
                                pagination.skip === data.data.total - 10
                                    ? "gray"
                                    : "blue"
                            }
                            // fn={
                            //     pagination.skip !== data.data.total - 10 && next
                            // }
                            fn={next}
                            isDisabled={
                                pagination.skip === data.data.total - 10
                                    ? true
                                    : false
                            }
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default index;
