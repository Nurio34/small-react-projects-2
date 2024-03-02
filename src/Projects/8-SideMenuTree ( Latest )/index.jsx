import Header from "./1-Header";
import SideMenu from "./2-SideMenu";

function index() {
    return (
        <div
            className=" min-h-screen 
        grid grid-cols-[0.1fr,1fr] grid-rows-[auto,1fr]"
        >
            <Header />
            <SideMenu />
        </div>
    );
}

export default index;
