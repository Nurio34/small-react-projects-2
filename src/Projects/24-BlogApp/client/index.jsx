import React from "react";

function index({ adjustHeader }) {
    const Logo = "mongoDB";
    const Url =
        "https://cloud.mongodb.com/v2/65f8889ba3dd2542027542f2#/overview";
    const Header_Obj = {
        logo: Logo,
        url: Url,
    };
    adjustHeader(Header_Obj);

    return <div>index</div>;
}

export default index;
