import React, { useCallback, useEffect, useRef, useState } from "react";
import { url } from "./API_Url";
import Button from "../../Components/Button";

function Main() {
    const [user, setUser] = useState("");
    const [gitUser, setGitUser] = useState(null);
    const [followers, setFollowers] = useState([]);
    const { login, company, avatar_url, bio, followers_url } = gitUser || "";

    const fetchUser = useCallback(async () => {
        const res = await fetch(`${url}${user}`);
        const data = await res.json();
        console.log(data);
        setGitUser(data);
    });

    const submitForm = useCallback((e) => {
        e.preventDefault();
        fetchUser();
    });

    useEffect(() => {
        const fetchFollowers = async () => {
            const res = await fetch(followers_url);
            const data = await res.json();
            console.log(data);
            setFollowers(data);
        };

        if (gitUser?.login) {
            fetchFollowers();
        }
    }, [gitUser]);

    return (
        <main className=" grid">
            <form
                className=" bg-gray-400 p-4 text-center grid gap-4 grid-cols-[1fr,auto] items-center "
                onSubmit={submitForm}
            >
                <input
                    type="text"
                    name="User"
                    id="nameInp"
                    value={user}
                    className="p-1 rounded-md "
                    onChange={(e) => setUser(e.target.value)}
                />
                <Button
                    value={"Submit"}
                    bgClr={"black"}
                    color={"white"}
                    fn={submitForm}
                />
            </form>
            <section>
                <div className="flex gap-4">
                    <h2>{login}</h2>
                    <p className=" text-sm">{company}</p>
                </div>
                <img
                    src={avatar_url}
                    alt=""
                    className=" max-w-28 rounded-full"
                />
                <p>{bio}</p>
                <div></div>
            </section>
        </main>
    );
}

export default Main;
