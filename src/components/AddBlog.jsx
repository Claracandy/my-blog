import React, { useState } from "react";{ // Import React and useState hookfunction AddBlog() 
    // State to store the list of blogs
    const [blogs, setBlogs] = useState([]);  // State to manage the form inputs
    const [formData, setFormData] = useState({
      title: "", // Blog title input
      content: "", // Blog content input
      author: "", // Blog author input
    });  // Function to handle changes in form inputs
    const handleChange = (e) => {
      const { name, value } = e.target; // Destructure name and value from the input
      setFormData((prevData) => ({
        ...prevData, // Spread existing form data
        [name]: value, // Update the value of the input being changed
      }));
    };  // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      const newBlog = {
        ...formData, // Include current form data
        id: Date.now(), // Generate a unique ID using the current timestamp
        date: new Date().toLocaleDateString(), // Add the current date in a readable format
        time: new Date().toLocaleTimeString(), // Add the current time in a readable format
      };
      setBlogs((prevBlogs) => [newBlog, ...prevBlogs]); // Add the new blog to the top of the blogs array
      setFormData({ title: "", content: "", author: "" }); // Reset form inputs after submission
    };  return (
      <div className="max-w-4xl mx-auto p-6">
        {/* Page title */}
        <h1 className="text-3xl font-bold mb-6">Add a New Blog</h1>      {/* Blog Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-10">
          {/* Input for Blog Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              name="title" // The name matches the key in the formData state
              value={formData.title} // Controlled input value
              onChange={handleChange} // Handle changes
              required // Mark field as required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter blog title"
            />
          </div>        {/* Input for Blog Content */}
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter blog content"
            ></textarea>
          </div>        {/* Input for Blog Author */}
          <div className="mb-4">
            <label htmlFor="author" className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter author name"
            />
          </div>        {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Blog
          </button>
        </form>      {/* Display Blogs */}
        <div>
          {/* Display title for the blog list */}
          <h2 className="text-2xl font-semibold mb-4">Blogs</h2>
          {blogs.length === 0 ? (
            // Show message if no blogs are added
            <p className="text-gray-500">No blogs added yet.</p>
          ) : (
            // Iterate over the blogs array and render each blog
            <div className="space-y-4">
              {blogs.map((blog) => (
                <div
                  key={blog.id} // Use unique id as the key
                  className="bg-gray-100 p-4 rounded-lg shadow-md border"
                >
                  {/* Blog Title */}
                  <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
                  {/* Blog Author and Timestamp */}
                  <p className="text-sm text-gray-500">
                    By {blog.author} - {blog.date} at {blog.time}
                  </p>
                  {/* Blog Content */}
                  <p className="text-gray-700 mt-2">{blog.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
  export default AddBlog;