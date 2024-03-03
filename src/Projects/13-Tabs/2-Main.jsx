import { useCallback, useEffect, useState } from "react";
import { url } from "./API_Url";
import TabButon from "./3-TabButon";

function Main() {
    const [tabs, setTabs] = useState([]);
    const [current, setCurrent] = useState(1);

    useEffect(() => {
        if (!tabs.length) {
            fetchData();
            return;
        }
    }, [tabs]);

    const fetchData = useCallback(async () => {
        const res = await fetch(url);
        const data = await res.json();
        setTabs((pre) => [...pre, ...data.filter((_, ind) => ind < 3)]);
    }, []);

    const handleClick = (id) => {
        setCurrent(id);
    };

    return (
        <main>
            <section className="grid grid-cols-3 border-t border-l border-black ">
                {tabs.map((item) => {
                    return (
                        <TabButon
                            key={item.id}
                            item={item}
                            handleClick={handleClick}
                            current={current}
                        />
                    );
                })}
            </section>
            <div className=" p-4 border-black border row-start-2 row-span-full col-span-full">
                {tabs.length &&
                    [...tabs.filter((item) => item.id == current)][0].body}
            </div>
        </main>
    );
}

export default Main;
