import React, { useCallback, useEffect, useRef, useState } from "react";
import { url } from "../API_Url";
import Button from "../../../Components/Button";

function Main() {
    const [totalRequest, setTotalRequest] = useState(0);
    const [user, setUser] = useState("");
    const Input = useRef();
    const [gitUser, setGitUser] = useState(0);
    const [followers, setFollowers] = useState([]);
    const { login, company, avatar_url, bio, followers_url } = gitUser || "";

    const fetchUser = useCallback(async () => {
        const res = await fetch(`${url}${user}`);
        const data = await res.json();
        setGitUser(data);
        setTotalRequest((pre) => pre + 1);
    });

    const submitForm = useCallback((e) => {
        e.preventDefault();
        setUser(Input.current.value);
    });

    useEffect(() => {
        if (user) fetchUser();
    }, [user]);

    useEffect(() => {
        const fetchFollowers = async () => {
            const res = await fetch(followers_url);
            const data = await res.json();
            setFollowers(data);
            setTotalRequest((pre) => pre + 1);
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
                    className="p-1 rounded-md "
                    ref={Input}
                />
                <Button
                    value={"Submit"}
                    bgClr={"black"}
                    color={"white"}
                    fn={submitForm}
                />
            </form>
            <section className="p-4 bg-pink-300 min-h-screen">
                <div className="flex items-start">
                    <div>
                        <div className="flex gap-4">
                            <h2>{login}</h2>
                            <p className=" text-sm">{company}</p>
                        </div>
                        <img
                            src={avatar_url}
                            alt=""
                            className=" max-w-28 rounded-full"
                        />
                    </div>

                    <div className=" flex overflow-hidden">
                        {followers?.map((follower, ind) => {
                            return (
                                <img
                                    key={ind}
                                    src={follower.avatar_url}
                                    className={`w-8 aspect-square rounded-full cursor-pointer `}
                                    style={{
                                        transform: `translateX(-${ind * 1}rem)`,
                                    }}
                                    alt=""
                                    onClick={() => setUser(follower.login)}
                                />
                            );
                        })}
                    </div>
                </div>
                <p>{bio}</p>
                <div></div>
            </section>
        </main>
    );
}

export default Main;
