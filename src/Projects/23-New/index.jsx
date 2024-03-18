import GlobalApp from "./0-GlobalApp";
import Header from "./1-Header";
import Modal from "./Components/Modal";

function index({ adjustHeader }) {
    const Logo = "Codewars";
    const Url = "https://www.codewars.com/kata/56882731514ec3ec3d000009";
    const Header_Obj = {
        logo: Logo,
        url: Url,
    };
    adjustHeader(Header_Obj);
    return (
        <GlobalApp>
            <div className=" w-full min-h-full bg-red-200">
                <Header />
                <Modal />
            </div>
        </GlobalApp>
    );
}

export default index;
