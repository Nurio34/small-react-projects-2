import React, { useEffect, useState } from "react";
import Button from "../../Components/Button";
import { useChangeTheme } from "./useChangeTheme";

function index() {
    const { theme, changeTheme } = useChangeTheme();

    return (
        <div className=" min-h-screen ">
            <Button value={"Change Theme"} bgClr={"orange"} fn={changeTheme} />
        </div>
    );
}

export default index;
