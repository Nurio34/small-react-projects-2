import GlobalApp from "./0-GlobalApp";
import Navbar from "./4-Components/Navbar";
import Main from "./4-Components/Main";
function index({ adjustHeader }) {
    if (adjustHeader) {
        const Logo = "forkify_API";
        const Url = "https://forkify-api.herokuapp.com/v2";
        const Header = {
            logo: Logo,
            url: Url,
        };
        adjustHeader(Header);
    }

    return (
        <GlobalApp>
            <Navbar />
            <Main />
        </GlobalApp>
    );
}

export default index;
