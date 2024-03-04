import "./App.css";
import Header from "./Projects/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Projects/Footer";
import Main from "./Projects/Main";
import { useState } from "react";

function App() {
    const [heights, setHeights] = useState({});
    const [header, setHeader] = useState({});
    const [headerPosition, setHeaderPosition] = useState("");

    const adjustHeight = (height) => {
        if (!Object.keys(heights).length) {
            setHeights((pre) => ({ ...pre, ...height }));
        }
    };

    const adjustHeader = (obj) => {
        if (JSON.stringify(obj) != JSON.stringify(header)) {
            setHeader(obj);
        }
    };

    const adjustHeaderPosition = (position) => {
        setHeaderPosition(position);
        console.log(position);
    };

    return (
        <>
            <BrowserRouter>
                <Header
                    adjustHeight={adjustHeight}
                    header={header}
                    headerPosition={headerPosition}
                />
                <Main
                    heights={heights}
                    adjustHeader={adjustHeader}
                    adjustHeaderPosition={adjustHeaderPosition}
                />
                <Footer
                    adjustHeight={adjustHeight}
                    adjustHeader={adjustHeader}
                />
            </BrowserRouter>
        </>
    );
}

export default App;
