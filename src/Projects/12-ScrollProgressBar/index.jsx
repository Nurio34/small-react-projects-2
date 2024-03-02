import { useEffect, useState } from "react";
import Header from "./1-Header";
import Bar from "./2-Bar";
import Main from "./3-Main";

function index() {
    const [headerHeight, setHeaderHeight] = useState(null);
    const [percentage, setPercentage] = useState(0);
    console.log(percentage);
    const handleHeader = (height) => {
        setHeaderHeight(height);
    };

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            const scrollAmount = document.documentElement.scrollTop;
            const overflowPageHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const percentage = (scrollAmount / overflowPageHeight) * 100;
            setPercentage(percentage);
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, [percentage]);

    return (
        <div>
            <div style={{ height: `${headerHeight}px` }}>
                <Header handleHeader={handleHeader} />
                <Bar
                    width={"width"}
                    headerHeight={headerHeight}
                    percentage={percentage}
                />
            </div>
            <Main />
        </div>
    );
}

export default index;
