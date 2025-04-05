import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function GitHub() {
    const [userData, setUserData] = useState({});
    const { user_id } = useParams();
    const [username, setUsername] = useState(user_id || "");
    const navigator = useNavigate();

    useEffect(() => {
        if (user_id) {
            fetch(`https://api.github.com/users/${user_id}`, {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
                },
            })
                .then((response) => response.json())
                .then((data) => setUserData(data))
                .catch((error) => console.log(`Error : ${error}`));
        }
    }, [user_id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigator(`/github/${username}`);
    };

    return (
        <div className="p-10 w-full">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"></label>
                <input
                    type="text"
                    placeholder="Enter your github username"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-3xs p-1 bg-slate-300 rounded-md border-2"
                    autoFocus
                />
                <button
                    className="p-2 ml-5 mb-5 bg-cyan-700 rounded-md text-cyan-100"
                    type="submit"
                >
                    Get Details
                </button>
            </form>

            {/* {Object.keys(userData).length ? ( */}
            {Object.hasOwn(userData, "id") ? (
                <main>
                    <img
                        src={userData.avatar_url}
                        alt="avatar"
                        className="h-20 mb-5 rounded-full"
                    />
                    <table className="w-full">
                        <tbody>
                            {Object.entries(userData).map(
                                ([key, value], index) => (
                                    <tr key={index}>
                                        <td className="border-1 p-2">{key}</td>
                                        <td className="border-1 p-2">
                                            {value || "NIL"}
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </main>
            ) : (
                user_id && <p>User with id : {user_id} Not Found</p>
            )}
        </div>
    );
}
