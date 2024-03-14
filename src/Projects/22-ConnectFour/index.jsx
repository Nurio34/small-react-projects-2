import { useContext } from "react";
import GlobalApp, { GlobalContext } from "./0-GlobalApp/";
import Home from "./1-Pages/1-Home";
import Game from "./1-Pages/2-Game";

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
    // const { gridPosition } = useContext(GlobalContext);

    return <GlobalApp></GlobalApp>;
}

export default index;
