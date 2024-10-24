import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', excerpt: '', imageUrl: '' });
  const [loading, setLoading] = useState(true);

  // Load blog posts from local storage when the component mounts
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setBlogPosts(storedPosts);
    fetchBlogRecipes();
  }, []);

  // Function to fetch blog recipes from the Spoonacular API
  const fetchBlogRecipes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=20&apiKey=2b460e0e2c6d42cb9bfbbcdb077fbbdf`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const formattedRecipes = data.recipes.map((recipe) => ({
        id: recipe.id,
        title: recipe.title,
        excerpt: recipe.summary.replace(/<[^>]*>/g, '').substring(0, 100) + '...',
        imageUrl: recipe.image || 'https://via.placeholder.com/300x200',
      }));

      setBlogPosts(formattedRecipes);
    } catch (error) {
      console.error("Error fetching blog recipes:", error);
    }
    setLoading(false);
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prevPost => ({ ...prevPost, [name]: value }));
  };

  // Function to handle adding a new blog post
  const handleAddBlog = () => {
    if (newPost.title && newPost.excerpt && newPost.imageUrl) {
      const updatedPosts = [...blogPosts, { id: Date.now(), ...newPost }];
      setBlogPosts(updatedPosts);
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
      setNewPost({ title: '', excerpt: '', imageUrl: '' }); // Reset form
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semi-bold mb-6">Blog Posts</h2>
      <div className="flex mb-4">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={newPost.title}
          onChange={handleInputChange}
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          name="excerpt"
          placeholder="Blog Excerpt"
          value={newPost.excerpt}
          onChange={handleInputChange}
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={newPost.imageUrl}
          onChange={handleInputChange}
          className="border p-2 rounded mr-2"
        />
        <button onClick={handleAddBlog} className="bg-blue-500 text-white rounded p-2">Add Blog</button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-48">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500" role="status"></div>
          <span className="ml-2">Loading blog posts...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((blogPost) => (
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
                <p className="text-muted-foreground text-gray-700">{blogPost.excerpt}</p>
              </div>
              <div className="p-4">
                <Link to="#" className="text-red-600">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
