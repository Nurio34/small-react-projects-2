import { useContext } from "react";
import { GlobalContext } from ".";
import Accordion from "../1-Accordion";
import Animation from "../0-Animation";
import RandomColor from "../2-RandomColor";
import ReviewStars from "../3-ReviewStarts";
import ImageSlider from "../5-Image_Slider";
import LoadMore from "../7-LoadMore";
import SideMenuTree from "../9-SideMenuTree";
import QRCodeGenerator from "../10-QRCodeGenerator";
import ThemeChange from "../11-ThemeChange";
import ScrollProgressBar from "../12-ScrollProgressBar";
import Tabs from "../13-Tabs";
import Modal from "../14-Modal";
import GithubUserFinder from "../15-GithubUserFinder";
import SearchAutoComplate from "../16-SearchAutocomplate";
import TicTacToe from "../17-TicTacToe";

function HomePage({ adjustHeader, heights }) {
    const Logo = "Small_Projects_2";
    const Url = "http://localhost:5173/";
    const Header = {
        logo: Logo,
        url: Url,
    };
    adjustHeader(Header);

    const { flags } = useContext(GlobalContext);

    const Components = [
        {
            key: "showAccordion",
            component: <Accordion />,
        },
        {
            key: "showAnimation",
            component: <Animation />,
        },
        {
            key: "showRandomColor",
            component: <RandomColor />,
        },
        {
            key: "showReviewStars",
            component: <ReviewStars />,
        },
        {
            key: "showImageSlider",
            component: <ImageSlider />,
        },
        {
            key: "showLoadMore",
            component: <LoadMore />,
        },
        {
            key: "showSideMenuTree",
            component: <SideMenuTree />,
        },
        {
            key: "showQRCodeGenerator",
            component: <QRCodeGenerator />,
        },
        {
            key: "showThemeChange",
            component: <ThemeChange />,
        },
        {
            key: "showScrollProgressBar",
            component: <ScrollProgressBar heights={heights} />,
        },
        {
            key: "showTabs",
            component: <Tabs />,
        },
        {
            key: "showModal",
            component: <Modal />,
        },
        {
            key: "showGithubUserFinder",
            component: <GithubUserFinder />,
        },
        {
            key: "showSearchAutoComplate",
            component: <SearchAutoComplate />,
        },
        {
            key: "showTicTacToe",
            component: <TicTacToe />,
        },
    ];

    return (
        <div className=" w-full -z-10" style={{ top: `${heights.header}px` }}>
            {Components.map(({ key, component }, index) => {
                if (flags[key]) {
                    return component;
                }
            })}
        </div>
    );
}

export default HomePage;
