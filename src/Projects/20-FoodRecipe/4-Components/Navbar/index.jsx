import { useContext, useEffect } from "react";
import { GlobalContext } from "../../0-GlobalApp";
const url = "https://forkify-api.herokuapp.com/api/v2/recipes";

function index() {
    const { search, setsearch, setPage } = useContext(GlobalContext);

    const fetchRecipes = async () => {
        setsearch((pre) => ({ ...pre, loading: true }));

        try {
            const res = await fetch(`${url}?search=${search.search}`);

            if (!res.ok) {
                setsearch((pre) => ({ ...pre, error: res.statusText }));
                return;
            } else {
                const data = await res.json();
                setsearch((pre) => ({ ...pre, recipes: data?.data?.recipes }));
            }
        } catch (error) {
            setsearch((pre) => ({
                ...pre,
                error: "Something went wrong. Refreash the page..",
            }));
        } finally {
            setsearch((pre) => ({ ...pre, loading: false }));
        }
    };

    useEffect(() => {
        if (search.search) {
            fetchRecipes();
        }
    }, [search.search]);
    return (
        <nav className=" flex py-2 justify-between md:p-4">
            <button
                style={{ fontFamily: "cursive" }}
                className=" font-bold text-lg "
                onClick={(e) => setPage("home")}
            >
                FoodRecipe
            </button>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const data = Object.fromEntries(
                        new FormData(e.currentTarget),
                    );
                    const search = data["search"];
                    setsearch((pre) => ({ ...pre, search: search }));
                    e.currentTarget.reset();
                    setPage("home");
                }}
            >
                <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search for recipe.."
                    className=" border border-black px-4 py-1 rounded-[100vw]"
                />
            </form>
            <div className=" flex gap-2">
                <button
                    className=" text-purple-600 underline"
                    onClick={(e) => setPage("details")}
                >
                    Details
                </button>
                <button
                    className=" text-purple-600 underline"
                    onClick={(e) => setPage("favorites")}
                >
                    Favorites
                </button>
            </div>
        </nav>
    );
}

export default index;
