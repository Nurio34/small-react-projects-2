import Header from "./1-Header";
import SideMenu from "./2-SideMenu";

function index({ adjustHeader }) {
    const Logo = "SideMenuTree";
    const Url = "";
    const Header = {
        logo: Logo,
        url: Url,
    };
    adjustHeader(Header);

    return (
        <div
            className=" min-h-screen 
        grid grid-cols-[0.1fr,1fr] grid-rows-[auto,1fr]"
        >
            <SideMenu />
        </div>
    );
}

export default index;
