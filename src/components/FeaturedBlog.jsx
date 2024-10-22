import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FeaturedBlogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  // Load blog posts from local storage when the component mounts
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    setBlogPosts(storedPosts);
  }, []);

  // Function to truncate text to a specified length
  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semi-bold mb-6">Featured Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(0, 3).map((blogPost) => (
          <div key={blogPost.id} className="flex border rounded-lg shadow-lg flex-col">
            <div className="p-0">
              <img
                src={blogPost.imageUrl}
                alt={blogPost.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
            <div className="flex-grow p-4">
              <div className="text-2xl mb-2 font-serif">{blogPost.title}</div>
              <p className="text-muted-foreground text-gray-700">
                {truncateText(blogPost.excerpt, 250)}
              </p>
            </div>
            <div className="p-4">
              <Link to="#" className="text-red-600">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
