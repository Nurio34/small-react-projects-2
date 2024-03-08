import { useContext } from "react";
import Home from "../../1-Home";
import Details from "../../2-Details";
import Favorites from "../../3-Favorites";
import { GlobalContext } from "../../0-GlobalApp";

function index() {
    const { page } = useContext(GlobalContext);
    return (
        <main>
            {page === "home" && <Home />}
            {page === "details" && <Details />}
            {page === "favorites" && <Favorites />}
        </main>
    );
}

export default index;
