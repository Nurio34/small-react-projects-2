import React from "react";
import Header from "./1-Header";
import Main from "./2-Main";

function index({ adjustHeader }) {
    if (adjustHeader) {
        const Logo = "Tabs";
        const Url = "";
        const Header = {
            logo: Logo,
            url: Url,
        };
        adjustHeader(Header);
    }

    return (
        <div>
            <Main />
        </div>
    );
}

export default index;
