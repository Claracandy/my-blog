import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();

  const posts = [
    {
      id: 1,
      image: "/images/Untitled.jpg",
      title: "Learning React",
      content:
        "React is a powerful JavaScript library for building user interfaces.",
      author: "John Doe",
      date: "2024-11-18",
      time: "11.00 AM",
    },
    {
      id: 2,
      image: "/images/Untitled.jpg 7.jpg",
      title: "Getting Started with Vite",
      content: "Vite makes development fast and simple.",
      author: "Jane Smith",
      date: "2024-11-18",
      time: "11.00 AM",
    },
  ];

  const blog = posts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center text-red-500 font-semibold mt-8">
        Blog not found!
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-72 object-cover rounded-lg mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
      <div className="text-sm text-gray-500 mb-6">
        <span>
          <b>By {blog.author}</b>
        </span>{" "}
        - {blog.date} at {blog.time}
      </div>
      <p className="text-lg text-gray-700 leading-relaxed">{blog.content}</p>
    </div>
  );
}

export default BlogDetails;