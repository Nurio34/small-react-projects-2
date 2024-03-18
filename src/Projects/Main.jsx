import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./HomePage";
import Animation from "./0-Animation";
import Accordion from "./1-Accordion";
import RandomColor from "./2-RandomColor";
import ReviewStarts from "./3-ReviewStarts";
import Image_Slider from "./4-Image_Slider";
import Image_Slider2 from "./5-Image_Slider";
import LoadMore from "./6-LoadMore";
import LoadMore2 from "./7-LoadMore";
import SideMenuTree from "./8-SideMenuTree ( Latest )";
import SideMenuTree2 from "./9-SideMenuTree";
import QRCodeGenerator from "./10-QRCodeGenerator";
import ThemeChange from "./11-ThemeChange";
import ScrollProgressBar from "./12-ScrollProgressBar";
import Tabs from "./13-Tabs";
import Modal from "./14-Modal";
import GithubUserFinder from "./15-GithubUserFinder";
import SearchAutocomplate from "./16-SearchAutocomplate";
import TicTacToe from "./17-TicTacToe";
import CustomHooks from "./18-CustomHooks";
import WeatherApp from "./19-WeatherApp";
import FoodRecipe from "./20-FoodRecipe";
import ShoppingCart from "./21-ShoppingCart";
import ConnectFour from "./22-ConnectFour";
import ExpenseTracker from "./23-ExpenseTracker";
import BlogApp from "./24-BlogApp/client";

function Main({ heights, adjustHeader }) {
    const fullVh = window.innerHeight;
    const minMainHeight = fullVh - heights.header;

    const location = useLocation();
    return (
        <main
            className={
                (location.pathname === "/tictactoe" &&
                    "grid place-content-center",
                "overflow-y-auto")
            }
            style={{
                height: `${minMainHeight - 1}px`,
            }}
        >
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage
                            adjustHeader={adjustHeader}
                            heights={heights}
                        />
                    }
                ></Route>
                <Route
                    path="/animation"
                    element={<Animation adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/accordion"
                    element={<Accordion adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/randomcolor"
                    element={<RandomColor adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/reviewstars"
                    element={<ReviewStarts adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/imageslider"
                    element={<Image_Slider adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/imageslider2"
                    element={<Image_Slider2 adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/loadmore"
                    element={<LoadMore adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/loadmore2"
                    element={<LoadMore2 adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/sidemenutree"
                    element={<SideMenuTree adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/sidemenutree2"
                    element={<SideMenuTree2 adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/qrcodegenerator"
                    element={<QRCodeGenerator adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/themechange"
                    element={<ThemeChange adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/scrollprogressbar"
                    element={
                        <ScrollProgressBar
                            adjustHeader={adjustHeader}
                            heights={heights}
                        />
                    }
                ></Route>
                <Route
                    path="/tabs"
                    element={<Tabs adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/modal"
                    element={<Modal adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/githubuserfinder"
                    element={<GithubUserFinder adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/searchautocomplate"
                    element={<SearchAutocomplate adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/tictactoe"
                    element={<TicTacToe adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/customhooks"
                    element={<CustomHooks adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/weatherapp"
                    element={<WeatherApp adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/foodrecipe"
                    element={<FoodRecipe adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/shoppingcart/*"
                    element={<ShoppingCart adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/connectfour/*"
                    element={<ConnectFour adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/expensetracker"
                    element={<ExpenseTracker adjustHeader={adjustHeader} />}
                ></Route>
                <Route
                    path="/blogapp"
                    element={<BlogApp adjustHeader={adjustHeader} />}
                ></Route>
            </Routes>
        </main>
    );
}

export default Main;
