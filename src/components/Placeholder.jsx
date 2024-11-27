import { useEffect, useState } from "react"

const DataFetch = () => {
    const [posts, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
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
                <h1  className="text -2xl font-bold mb-4">All Post</h1>
                <div className=" grid grid-cols-2 gap-6">
                    {posts.map((post) =>(
                    <div key={post.id} className="mb-6 border-b pb-4 ">
                        <h1> Title:{post.title}</h1>
                        <p>Body:{post.body}</p>

                    </div>

                    ))};

                </div>

            </div>
        </>
    )
}
export default DataFetch;