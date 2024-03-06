import { useEffect, useState } from "react";
import Header from "./1-Header";
import Bar from "./2-Bar";
import Main from "./3-Main";

function index({ adjustHeader, heights }) {
    if (adjustHeader) {
        const Logo = "ScrollProgressBar";
        const Url = "";
        const Header = {
            logo: Logo,
            url: Url,
        };
        adjustHeader(Header);
    }

    const [percentage, setPercentage] = useState(0);

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
            <div style={{ height: `${heights.header}px` }}>
                <Bar heights={heights} percentage={percentage} />
            </div>
            <Main />
        </div>
    );
}

export default index;
