import { Link } from "react-router-dom";
import Button from "./Button";

const Main = () => {
  return (
    <div>
      <main className="container mx-auto px-6 py-8">
        {/* First Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Your Daily Dish</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-red-500 mb-4">A Food Journey</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Button text={"Sign Up"} />
          </div>
          <div className="w-full md:w-1/2 relative">
            {/* <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 rounded-full -z-10 hidden md:block"></div> */}
            <img
              src="https://www.allrecipes.com/thmb/MH-78wuLP6XOj4dqLWVd8UrmK4k=/2000x666/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/8707673-country-ham-biscuits-3x1-13a7611823f34857b2a1a56a877ad42f.jpg"
              alt="Delicious dish"
              width={1000}
              height={1000}
              className="w-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 right-0 bg-white shadow-lg rounded-lg p-4 flex items-center space-x-2">
              <img
                src="https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain"
                alt="User avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="flex items-center">
                  <p>******</p>
                </div>
                <p className="text-sm text-gray-600">John Doe</p>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://s1.1zoom.me/big0/588/The_second_dishes_Shrimp_Tomatoes_White_background_517162_1280x853.jpg"
              alt="Share your recipes"
              width={400}
              height={400}
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Share Your <span className="text-red-500">Recipes</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Link to="/sharerecipe">
              <Button text={"Share recipe"} />
            </Link>
          </div>
        </section>

       </main>
    </div>
  );
};

export default Main;
