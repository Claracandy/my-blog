import { useState } from "react";

const BlogList = () => {

    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "Understanding React",
            excerpt: "React is a powerful JavaScript library for building user interfaces.",
          },
          {
            id: 2,
            title: "Getting Started with Vite",
            excerpt: "Vite is a modern, fast build tool for front-end development.",
          },
          {
            id: 3,
            title: "Why Tailwind CSS?",
            excerpt: "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
          },
    ]);

    const loadMorePosts = () => {
        const newPosts = [
            {
                id: 4,
                title: "Exploring JavaScript ES6",
                excerpt: "ES6 introduced many new features to JavaScript, making it more powerful.",
              },
              {
                id: 5,
                title: "The Future of Web Development",
                excerpt: "Discover trends and tools shaping the future of web development.",
              },
        ];
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
            <div>
                {posts.map((post) => (
                    <div key={post.id} className="border-b pb-4 mb-4">
                        <h2>{post.title}</h2>
                        <p>{post.excerpt}</p>
                    </div>
                ))}
            </div>
            <button
                onClick={loadMorePosts}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Load More posts
            </button>
        </>
    );

};



export default BlogList;