import React, { useEffect, useState } from "react";
import Button from "../../Components/Button";
import { useChangeTheme } from "./useChangeTheme";
import "./index.css";

function index({ adjustHeader }) {
    const Logo = "ThemeChange";
    const Url = "";
    const Header = {
        logo: Logo,
        url: Url,
    };
    adjustHeader(Header);

    const { theme, changeTheme } = useChangeTheme();

    return (
        <div className="divClass min-h-screen " data-theme={theme}>
            <Button value={"Change Theme"} bgClr={"orange"} fn={changeTheme} />
            <p>text</p>
        </div>
    );
}

export default index;
