import { useState } from "react";

export const useFetch = (url, options) => {
    const [loading, setisloading] = useState(false);
    const [data, setdata] = useState({});
    const [error, seterror] = useState(false);

    const fetchData = async () => {
        setisloading(true);
        try {
            const res = await fetch(url, options);

            if (!res.ok) {
                console.log(res);
                seterror(`Error : ${res.status}`);
            }

            const data = await res.json();
            setdata(data);
        } catch (error) {
            seterror(`Error ${error}`);
        } finally {
            setisloading(false);
        }
    };

    useState(() => {
        fetchData();
    }, [url, options]);

    return { loading, data, error };
};
