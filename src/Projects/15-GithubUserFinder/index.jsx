import Header from "./1-Header";
import Main from "./Home/2-Main";

function index({ adjustHeader }) {
    const Logo = "github_API";
    const Url = "https://docs.github.com/en/rest/users?apiVersion=2022-11-28";
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
