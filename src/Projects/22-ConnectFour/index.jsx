import Game from "./1-Pages/2-Game";
import GlobalApp from "./0-GlobalApp/";

function index({ adjustHeader }) {
    const Logo = "Codewars";
    const Url = "https://www.codewars.com/kata/56882731514ec3ec3d000009";
    const Header_Obj = {
        logo: Logo,
        url: Url,
    };
    adjustHeader(Header_Obj);
    // console.log(
    //     "Her parçaya column ve row id'leri verdim. Positions Array ve bu id'leri kullanarak, tıkladığımda bg renk değişimlerini ayarlıcam",
    // );
    return (
        <GlobalApp>
            <Game />
        </GlobalApp>
    );
}

export default index;
