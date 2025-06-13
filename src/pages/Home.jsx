import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#1e1e1e] text-white">

      <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-[url('/top-food.jpg')] bg-cover bg-center relative">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Welcome to <span className="text-teal-300">TasteBuds 🍽️</span>
          </h1>
          <p className="mt-6 text-xl text-gray-200">
            Discover, share and cook mouth-watering recipes from all over the world!
          </p>
          <Link to="/recipes">
            <button className="mt-8 px-8 py-3 bg-teal-500 hover:bg-teal-400 text-white rounded-full text-lg shadow-lg transition duration-300">
              Explore Recipes
            </button>
          </Link>
        </div>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-6xl font-thin text-center text-teal-300 mb-12 tracking-tight ">More Recipes Here</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              image: "/spice-paneer-delight.jpg",
              title: "Spicy Paneer Delight",
              desc: "Tasty, quick and healthy. Perfect for your cravings."
            },
            {
              image: "https://images.pexels.com/photos/13062441/pexels-photo-13062441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              title: "Cheesy Garlic Bread",
              desc: "A perfect evening snack with melted cheesy goodness."
            },
            {
              image: "https://images.pexels.com/photos/19681747/pexels-photo-19681747/free-photo-of-hand-holding-pizza.jpeg?auto=compress&cs=tinysrgb&w=600",
              title: "Classic Veggie Pizza",
              desc: "Crispy, fresh and full of flavor!"
            }
          ].map((recipe, i) => (
            <div key={i} className="bg-teal-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-5">
                <h3 className="text-xl font-black text-white mb-2">{recipe.title}</h3>
                <p className="text-gray-300 text-sm">{recipe.desc}</p>
              </div>

            </div>

          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-teal-300 mb-10">🍴 Browse Categories</h2>
        <div className="flex justify-center flex-wrap gap-6">
          {["Veg", "Non-Veg", "Snacks", "Desserts", "Beverages"].map((cat, idx) => (
            <div
              key={idx}
              className="bg-teal-700  text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-500 cursor-pointer transition"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-teal-900 py-5 text-center text-gray-400 text-sm tracking-tight border-t border-teal-700">
        © {new Date().getFullYear()} TasteBuds by Nazish. All rights reserved.
      </footer>
    </div>
  )
}

export default Home