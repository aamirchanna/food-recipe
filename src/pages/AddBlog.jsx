import { useState } from "react";
import { Link } from "react-router-dom";



export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and start building your first component-based UI.",
      imageUrl: "https://th.bing.com/th/id/OIP.-4HJ5xiB3ctFO2uIh_f5wAHaE0?rs=1&pid=ImgDetMain?height=200&width=300",
      link: "#",
    },
    {
      id: 2,
      title: "Advanced CSS Techniques",
      excerpt: "Dive deep into CSS and discover advanced styling techniques for modern web design.",
      imageUrl: "https://th.bing.com/th/id/OIP.-4HJ5xiB3ctFO2uIh_f5wAHaE0?rs=1&pid=ImgDetMain?height=200&width=300",
      link: "#",
    },
    {
      id: 3,
      title: "The Future of JavaScript",
      excerpt: "Explore upcoming features and trends in JavaScript that will shape web development.",
      imageUrl: "https://th.bing.com/th/id/OIP.-4HJ5xiB3ctFO2uIh_f5wAHaE0?rs=1&pid=ImgDetMain?height=200&width=300",
      link: "#",
    },
  ]);

  const [newPost, setNewPost] = useState({
    id: "",
    title: "",
    excerpt: "",
    imageUrl: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogPosts((prevPosts) => [
      ...prevPosts,
      { ...newPost, id: prevPosts.length + 1 },
    ]);
    setNewPost({
      id: "",
      title: "",
      excerpt: "",
      imageUrl: "",
      link: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semi-bold mb-6">Blog Posts</h2>

      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="excerpt"
          value={newPost.excerpt}
          onChange={handleChange}
          placeholder="Excerpt"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="imageUrl"
          value={newPost.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="link"
          value={newPost.link}
          onChange={handleChange}
          placeholder="Link"
          className="border p-2 mb-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Blog Post
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="flex border rounded-lg shadow-lg flex-col">
            <div className="p-0">
              <img
                src={post.imageUrl}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
            <div className="flex-grow p-4">
              <div className="text-2xl mb-2 font-serif">{post.title}</div>
              <p className="text-muted-foreground text-gray-700">
  {`${post.excerpt.substr(0, 240)}...`}
</p>
            </div>
            <div className="p-4">
              <button className="text-red-600">
                <Link to={post.link}>Read More</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
