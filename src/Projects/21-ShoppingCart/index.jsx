import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./1-Components/1-Header";
import Home from "./2-Pages/1-Home";
import Cart from "./2-Pages/2-Cart";
import { store } from "./0-GlobalStore";
import { Provider } from "react-redux";
import { useFetch } from "./2-Pages/1-Home/useFetch";
function index({ adjustHeader }) {
    const Logo = "fake_store_API";
    const Url = "https://fakestoreapi.com/";
    const Header_Obj = {
        logo: Logo,
        url: Url,
    };
    adjustHeader(Header_Obj);

    const location = useLocation();

    const products = useFetch();

    return (
        <Provider store={store}>
            <div>
                <Header />
                {location.pathname === "/shoppingcart" && (
                    <Home products={products} />
                )}
                <Routes>
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Provider>
    );
}

export default index;
