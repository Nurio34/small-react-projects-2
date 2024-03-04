import { Link } from "react-router-dom";

function Footer({ adjustHeight, adjustHeader }) {
    return (
        <footer
            className="p-4 bg-pink-200"
            ref={(ref) => {
                if (ref) {
                    const height = parseInt(getComputedStyle(ref).height);
                    adjustHeight({ footer: height });
                }
            }}
        >
            <div>
                <h1 className=" font-bold">Projects</h1>
                <div className=" grid grid-cols-3 text-purple-600 underline justify-items-start ">
                    <Link to={"/"} onClick={() => adjustHeader({})}>
                        Home
                    </Link>
                    <Link to={"/animation"} onClick={() => adjustHeader({})}>
                        Animation
                    </Link>
                    <Link to={"/accordion"} onClick={() => adjustHeader({})}>
                        Accordion
                    </Link>
                    <Link to={"/randomcolor"} onClick={() => adjustHeader({})}>
                        RandomColor
                    </Link>
                    <Link to={"/reviewstars"} onClick={() => adjustHeader({})}>
                        ReviewStarts
                    </Link>
                    <Link to={"/imageslider"} onClick={() => adjustHeader({})}>
                        Image_Slider
                    </Link>
                    <Link to={"/imageslider2"} onClick={() => adjustHeader({})}>
                        Image_Slider2
                    </Link>
                    <Link to={"/loadmore"} onClick={() => adjustHeader({})}>
                        LoadMore
                    </Link>
                    <Link to={"/loadmore2"} onClick={() => adjustHeader({})}>
                        LoadMore2
                    </Link>
                    <Link to={"/sidemenutree"} onClick={() => adjustHeader({})}>
                        SideMenuTree
                    </Link>
                    <Link
                        to={"/sidemenutree2"}
                        onClick={() => adjustHeader({})}
                    >
                        SideMenuTree2
                    </Link>
                    <Link
                        to={"/qrcodegenerator"}
                        onClick={() => adjustHeader({})}
                    >
                        QRCodeGenerator
                    </Link>
                    <Link to={"/themechange"} onClick={() => adjustHeader({})}>
                        ThemeChange
                    </Link>
                    <Link
                        to={"/scrollprogressbar"}
                        onClick={() => adjustHeader({})}
                    >
                        ScrollProgressBar
                    </Link>
                    <Link to={"/tabs"} onClick={() => adjustHeader({})}>
                        Tabs
                    </Link>
                    <Link to={"/modal"} onClick={() => adjustHeader({})}>
                        Modal
                    </Link>
                    <Link
                        to={"/githubuserfinder"}
                        onClick={() => adjustHeader({})}
                    >
                        GithubUserFinder
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
