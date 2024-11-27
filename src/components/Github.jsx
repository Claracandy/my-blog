import { useEffect, useState } from "react"

const Github = () => {
    const [users, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then((response) => response.json())
            .then((json) => {
                setData(json)
                setLoading(false)
            });

    }, []);
    if (loading) return <p>loading...</p>;
    return (
        <>
            <div>
                <h1  className="text -2xl font-bold mb-4">users Post</h1>
                <div className=" grid grid-cols-2 gap-6">
                    {users.map((users) =>(
                    <div key={users.id} className="mb-6 border-b pb-4 ">
                        <h1> login:{users.login}</h1>
                        <p>id:{users.id}</p>
                        <p>node_id:{users.node_id}</p>
                        <p>avatar_url:{users.avatar_url}</p>
                        <p>url:{users.url}</p>
                        <p>html_url:{users.html_url}</p>
                        <p>followers_url:{users.followers_url}</p>
                        <p>following_url:{users.following_url}</p>
                        <p>gists_url:{users.gists_url}</p>
                       < p>starred_url:{users.starred_url}</p>
                        <p>subscriptions_url:{users.subscriptions_url}</p>
                        <p>repos_url:{users.repos_url}</p>
                        <p>events_url:{users.events_url}</p>
                        
                    </div>

                    ))};

                </div>

            </div>
        </>
    )
}
export default Github;