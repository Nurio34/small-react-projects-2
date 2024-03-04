import Header from "../6-LoadMore/1-Header";
import Main from "./2-Main";
import "./index.css";

function index({ adjustHeader }) {
    const Logo = "dummy_json_API";
    const Url = "https://dummyjson.com/";
    const Header = {
        logo: Logo,
        url: Url,
    };
    adjustHeader(Header);

    return (
        <div>
            <Main />
        </div>
    );
}

export default index;
