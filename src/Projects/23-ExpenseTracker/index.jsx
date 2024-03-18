import GlobalApp from "./0-GlobalApp";
import Header from "./1-Header";
import ModalOverlay from "./Components/ModalOverlay";
import Modal from "./Components/Modal";
import Main from "./2-Main";

function index({ adjustHeader }) {
    const Logo = "react-apexchart";
    const Url = "https://www.npmjs.com/package/react-apexcharts";
    const Header_Obj = {
        logo: Logo,
        url: Url,
    };
    adjustHeader(Header_Obj);
    return (
        <GlobalApp>
            <div className=" w-full min-h-full ">
                <Header />
                <ModalOverlay />
                <Modal />
                <Main />
            </div>
        </GlobalApp>
    );
}

export default index;
