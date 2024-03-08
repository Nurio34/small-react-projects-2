import { useContext } from "react";
import { GlobalContext } from "../0-GlobalApp";
import FoodCard from "../4-Components/FoodCard";

function index() {
    const { search } = useContext(GlobalContext);
    const { loading, error, recipes } = search;

    return (
        <section className=" flex flex-wrap gap-4 p-4">
            {!search.search && (
                <p className=" font-bold text-2xl text-center p-8">
                    Nothing to show. Search food for recipe
                </p>
            )}
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {recipes?.map((recipe, ind) => {
                return <FoodCard key={recipe.id} recipe={recipe} />;
            })}
            {!loading && search.search && recipes == 0 && (
                <p>
                    There is not a damn food in the planet that you looking for.
                    Please try to search again.
                </p>
            )}
        </section>
    );
}

export default index;
