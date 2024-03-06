import { useEffect, useState } from "react";
import { url } from "./API_Url";
import placeImg from "../../assets/placeHolder.png";

function index({ adjustHeader }) {
    if (adjustHeader) {
        const Logo = "dummy_json_API";
        const Url = "https://dummyjson.com/";
        const Header = {
            logo: Logo,
            url: Url,
        };
        adjustHeader(Header);
    }

    const [users, setUsers] = useState({ loading: true });
    const [seacrhedUsers, setseacrhedUsers] = useState([]);
    const [user, setUser] = useState({ loading: true });
    const { image, firstName, lastName, gender, age, company } =
        user["user"] || "";

    const fetchUsers = async () => {
        try {
            const res = await fetch(url);

            if (!res.ok) {
                const error = "Something went wrong";
                setUsers((pre) => ({ ...pre, loading: false, error: error }));
                return;
            }

            const data = await res.json();

            setUsers(
                (pre) =>
                    (pre = {
                        ...pre,
                        users: data.users.map((user) => user.firstName),
                        loading: false,
                    }),
            );
        } catch (err) {
            const error = "Failed to fetch";
            setUsers((pre) => ({
                ...pre,
                loading: false,
                error: error,
            }));
            throw new Error(err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        const searchedUsers = users.users.filter(
            (user) => value !== "" && user.toLowerCase().indexOf(value) == 0,
        );
        setseacrhedUsers(searchedUsers);
    };

    const fetchUser = async () => {
        try {
            const res = await fetch(url);

            if (!res.ok) {
                const error = "Something went wrong";
                setUser((pre) => ({ ...pre, loading: false, error: error }));
                return;
            }

            const data = await res.json();
            const user = data.users.filter(
                (user) =>
                    user.firstName.toLowerCase() ===
                    seacrhedUsers[0].toLowerCase(),
            )[0];

            setUser(
                (pre) =>
                    (pre = {
                        ...pre,
                        user: user,
                        loading: false,
                    }),
            );
        } catch (err) {
            const error = "Failed to fetch";
            setUser((pre) => ({
                ...pre,
                loading: false,
                error: error,
            }));
            throw new Error(err);
        }
    };

    useEffect(() => {
        if (seacrhedUsers.length == 1) {
            fetchUser();
        }
    }, [seacrhedUsers]);

    return (
        <div>
            <form
                className=" flex justify-center py-2"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    type="search"
                    name="search"
                    id="searchInp"
                    className=" border border-black w-1/2 py-1 px-2"
                    list="list"
                    onChange={handleSearch}
                />
                {seacrhedUsers.length > 1 && (
                    <datalist
                        id="list"
                        className=" absolute top-0"
                        onClick={(e) => {}}
                    >
                        {seacrhedUsers.map((user, ind) => {
                            return (
                                <option key={ind} value={user}>
                                    {user}
                                </option>
                            );
                        })}
                    </datalist>
                )}
            </form>
            <section>
                {users.loading || (user.loading && <p>Loading...</p>)}
                {users.error || (user.error && <p>{users.error}</p>)}
                {user.user && (
                    <div className="p-4  ">
                        <div className="float-left mx-4 inline relative">
                            <img
                                src={image}
                                alt={firstName}
                                className=" w-12 aspect-square rounded-full border border-purple-500"
                                width={48}
                                height={48}
                            />
                            <div className=" absolute bg-purple-500 rounded-full -z-10 top-[2px] left-[2px] w-12 aspect-square"></div>
                        </div>
                        <p>Name : {firstName + " " + lastName}</p>
                        <p>
                            {gender} {age} years old
                        </p>
                        <p>
                            Working in {company.department} department as{" "}
                            {company.title} at {company.name}{" "}
                        </p>
                    </div>
                )}
            </section>
        </div>
    );
}

export default index;
