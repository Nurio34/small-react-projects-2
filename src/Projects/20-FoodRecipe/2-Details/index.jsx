import { useContext } from "react";
import { GlobalContext } from "../0-GlobalApp";

function index() {
    const { detail, favorites, setFavorites } = useContext(GlobalContext);
    const { image_url, cooking_time, servings, ingredients } = detail;

    const handleFavorites = () => {
        if (!favorites.length) {
            setFavorites((pre) => [...pre, detail]);
        }
        if (favorites.length) {
            if (favorites.map((obj) => obj.id).includes(detail.id)) {
                setFavorites(favorites.filter((item) => item.id !== detail.id));
            } else {
                setFavorites((pre) => [...pre, detail]);
            }
        }
    };

    return (
        detail && (
            <section className="grid sm:grid-cols-2 p-4 sm:gap-4">
                <img
                    src={image_url}
                    alt=""
                    className=" w-full h-full object-cover object-center"
                />
                <div className=" relative">
                    <p>Cooking time : {cooking_time} mins.</p>
                    <p>
                        For {servings} {servings < 2 ? "person" : "people"}
                    </p>
                    <ul className=" list-disc list-inside">
                        <h2 className=" pl-4 text-2xl font-bold">
                            Ingredients
                        </h2>
                        {ingredients?.map(
                            ({ quantity, unit, description }, ind) => {
                                return (
                                    <li key={ind} className=" pl-8">
                                        {quantity} {unit} {description}
                                    </li>
                                );
                            },
                        )}
                    </ul>
                    <button
                        className=" absolute top-4 right-4 py-1 px-2 rounded-lg bg-green-600 text-white font-semibold"
                        style={{
                            backgroundColor: `${
                                favorites
                                    ?.map((obj) => obj.id)
                                    .includes(detail.id)
                                    ? "Red"
                                    : "Green"
                            }`,
                        }}
                        onClick={handleFavorites}
                    >
                        {favorites?.map((obj) => obj.id).includes(detail.id)
                            ? "Remove Favorites"
                            : "Add Favorites"}
                    </button>
                </div>
            </section>
        )
    );
}

export default index;
