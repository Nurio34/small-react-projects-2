import React, { useContext } from "react";
import { GlobalContext } from "../../0-GlobalApp";
const url = "https://forkify-api.herokuapp.com/api/v2/recipes/";

function index({ recipe }) {
    const { setdetail, setPage } = useContext(GlobalContext);

    const fetchDetails = async () => {
        try {
            const res = await fetch(`${url}${recipe.id}`);

            if (!res.ok) {
                console.log(res);
                return;
            } else {
                const data = await res.json();
                setdetail(data.data.recipe);
            }
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    return (
        <div
            className="w-full xs:w-1/3 sm:w-1/4  md:w-1/5 lg:w-1/6 grow overflow-hidden 
        bg-black p-4 text-white rounded-xl text-sm 
        grid gap-2 "
            onClick={(e) => {
                fetchDetails();
                setPage("details");
            }}
        >
            <h2
                className=" w-full truncate text-center overflow-hidden "
                title={recipe.title}
            >
                {recipe.title}
            </h2>
            <div
                className="w-full aspect-square "
                style={{
                    backgroundImage: `url(${recipe.image_url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>
            <p className=" w-full truncate text-center overflow-hidden text-[7px] ">
                Published by{" "}
                <span className=" italic font-semibold text-sm">
                    {recipe.publisher}
                </span>
            </p>
        </div>
    );
}

export default index;
