import "./index.css";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Skeleton from "./components/Weather/Skeleton";

import { weather_url } from "./API_Url";

function index({ adjustHeader }) {
    if (adjustHeader) {
        const Logo = "weather_API";
        const Url = "https://www.weatherapi.com/";
        const Header = {
            logo: Logo,
            url: Url,
        };
        adjustHeader(Header);
    }

    const [apiKey, setapiKey] = useState(() => {
        return JSON.parse(localStorage.getItem("apiKey")) || "";
    });
    const [search, setsearch] = useState(null);

    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);
    const [data, setdata] = useState({});

    const resetApiKey = (e) => {
        e.preventDefault();
        setapiKey("");
        localStorage.removeItem("apiKey");
    };
    const searchFn = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        if (data["apiKey"]) {
            setapiKey(data["apiKey"]);
            localStorage.setItem("apiKey", JSON.stringify(data["apiKey"]));
        }
        setsearch(data["search"]);
        e.target.reset();
    };

    useEffect(() => {
        const fetchWeather = async () => {
            setloading(true);
            seterror(null);
            setdata({});
            try {
                const res = await fetch(
                    `${weather_url}?key=${apiKey}&q=${search}`,
                );

                if (!res.ok) {
                    setTimeout(() => {
                        seterror(res.statusText);
                    }, 2000);

                    return;
                } else {
                    const data = await res.json();
                    setTimeout(() => {
                        setdata(data);
                        setloading(false);
                    }, 4000);
                }
            } catch (error) {
                setTimeout(() => {
                    seterror(error.message);
                }, 2000);
            }
        };
        fetchWeather();
    }, [search]);

    return (
        <div className=" bg-pink-300 p-4 relative">
            <Search
                apiKey={apiKey}
                resetApiKey={resetApiKey}
                searchFn={searchFn}
            />
            {loading && <Skeleton />}
            {error && (
                <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white -rotate-45 text-4xl w-max py-1 px-4">
                    {error} !!!
                </div>
            )}
            {!error && Object.keys(data).length > 0 && <Weather data={data} />}
        </div>
    );
}

export default index;
