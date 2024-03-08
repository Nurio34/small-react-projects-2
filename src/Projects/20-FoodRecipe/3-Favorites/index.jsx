import { useContext } from "react";
import { GlobalContext } from "../0-GlobalApp";
import FavoriteCard from "../4-Components/FavoriteCard";

function index() {
    const { favorites } = useContext(GlobalContext);
    console.log(favorites);
    return (
        <section className=" flex flex-wrap gap-4 p-4 ">
            {favorites?.map((favorite) => {
                return <FavoriteCard key={favorite.id} favorite={favorite} />;
            })}
        </section>
    );
}

export default index;
