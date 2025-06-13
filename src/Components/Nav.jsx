import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="w-full px-10 py-4 flex items-center justify-between bg-[#1e1e1e] adow-md">

            {/* Left: Logo */}
            <div className="flex items-center gap-3 cursor-pointer select-none">
                {/* Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9 text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 3v12M8 3H6a2 2 0 012 2v5a2 2 0 01-2 2H6m6 2v6m0-6h2a2 2 0 012 2v1a2 2 0 01-2 2h-2m0-6v6"
                    />
                </svg>
                {/* Logo Text */}
                <h1 className="text-2xl font-extrabold text-teal-400 tracking-wide">TasteBud</h1>
            </div>

            {/* Right: Nav Links */}
            <div className="flex gap-10 text-lg font-light items-center">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "text-teal-400 font-medium" : "hover:text-teal-300 transition"
                    }
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "text-teal-400 font-medium" : "hover:text-teal-300 transition"
                    }
                    to="/recipes"
                >
                    Recipes
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "text-teal-400 font-medium" : "hover:text-teal-300 transition"
                    }
                    to="/about"
                >
                    About
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "text-teal-400 font-medium" : "hover:text-teal-300 transition"
                    }
                    to="/create-recipe"
                >
                    Create Recipe
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "text-teal-400 font-medium" : "hover:text-teal-300 transition"
                    }
                    to="/fav"
                >
                    Favorite
                </NavLink>
            </div>
        </nav>
    );
}

export default Nav