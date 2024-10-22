export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-8 border-t">
      <div className="container mx-auto px-4">
        {/* Responsive grid: 1 column on mobile, 4 columns on medium screens and above */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">PerfectRecipe</h2>
            <p className="text-sm text-gray-600">
              The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn`t distract from the layout.
            </p>
          </div>

          {/* Footer Section 2 */}
          <div>
            <h3 className="font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-red-500">Home</a></li>
              <li><a href="/recipes" className="hover:text-red-500">Recipes</a></li>
              <li><a href="/blog" className="hover:text-red-500">Blog</a></li>
            </ul>
          </div>

          {/* Footer Section 3 */}
          <div>
            <h3 className="font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li><a href="/share" className="hover:text-red-500">Share Recipe</a></li>
              <li><a href="/about" className="hover:text-red-500">About Us</a></li>
              <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
            </ul>
          </div>

          {/* Footer Section 4 */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="hover:text-red-500">Terms of Use</a></li>
              <li><a href="/privacy" className="hover:text-red-500">Privacy & Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter and social media icons */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="w-full lg:w-auto">
            <h3 className="font-semibold mb-2">Newsletter</h3>
            <p className="text-sm mb-2">Subscribe to our newsletter to get more free tips.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border rounded px-3 py-2 w-full sm:w-auto sm:max-w-xs"
              />
              <button type="submit" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social media icons */}
          <div className="flex gap-4">
            {/* Social media icons */}
            <a href="#" aria-label="TikTok" className="text-gray-600 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* TikTok icon path */}
                <path d="M12.525..."></path>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Twitter icon path */}
                <path d="M8.29..."></path>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Facebook icon path */}
                <path d="M22..."></path>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Instagram icon path */}
                <path d="M12.315..."></path>
              </svg>
            </a>
            <a href="#" aria-label="Pinterest" className="text-gray-600 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Pinterest icon path */}
                <path d="M12.017..."></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-8 text-center text-sm text-gray-600">
          © 2024 PerfectRecipe. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
