import React, { useContext } from "react";
import { GlobalContext } from "../../0-GlobalApp";

function index({ favorite }) {
    const { setPage, setdetail } = useContext(GlobalContext);
    return (
        <div
            className=" basis-full  xs:basis-1/2 sm:basis-1/3  md:basis-1/4 lg:basis-1/5 grow  overflow-hidden
        bg-black p-4 text-white rounded-xl text-sm
        grid gap-2 "
            onClick={(e) => {
                console.log("click");
                setPage("details");
                setdetail(favorite);
            }}
        >
            <h2
                className=" w-full truncate text-center overflow-hidden "
                title={favorite.title}
            >
                {favorite.title}
            </h2>
            <div
                className="w-full aspect-square "
                style={{
                    backgroundImage: `url(${favorite.image_url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>
        </div>
    );
}

export default index;
