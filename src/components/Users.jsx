import { useEffect, useState } from "react"

const Users = () => {
    const [users, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
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
                <h1  className="text -2xl font-bold mb-4">All users</h1>
                <div className=" grid grid-cols-2 gap-6">
                    {users.map((users) =>(
                    <div key={users.id} className="mb-6 border-b pb-4 ">
                        <h1> Name:{users.name}</h1>
                        <p>Username:{users.username}</p>
                        <p>Email:{users.email}</p>
                        <p>Address:{users.address.city},{users.address.street},{users.address.suite},{users.address.zipcode},</p> 
                    </div>

                    ))};

                </div>

            </div>
        </>
    )
}
export default Users;