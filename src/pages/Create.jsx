import { nanoid } from "nanoid"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { recipecontext } from "../Context/Recipecontext"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Create = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm()

    const { data, setdata } = useContext(recipecontext)

    const submitHandler = (recipe) => {
        recipe.id = nanoid()
        let copydata = [...data]
        copydata.push(recipe)
        setdata(copydata)
        localStorage.setItem("recipe", JSON.stringify(copydata))
        toast.success("New Recipe Created!")
        navigate("/recipes")
        reset()
    }

    return (

        <>
            <h1 className="text-4xl font-bold text-teal-400 text-center mb-10 mt-10 tracking-tighter drop-shadow-lg">
                🍳 Create Your Recipe
            </h1>
            <form
                className="bg-teal-900 text-white rounded-3xl shadow-2xl p-10 w-full max-w-3xl mx-auto mb-10 "
                onSubmit={handleSubmit(submitHandler)}
            >
                {/* Image URL */}
                <input
                    className="w-full text-lg p-3 mb-5 rounded-xl bg-teal-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    {...register("image")}
                    type="url"
                    placeholder="Image URL here"
                />

                {/* Title */}
                <input
                    className="w-full text-lg p-3 mb-5 rounded-xl bg-teal-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    {...register("title")}
                    type="text"
                    placeholder="Recipe Title"
                />

                {/* Chef Name */}
                <input
                    className="w-full text-lg p-3 mb-5 rounded-xl bg-teal-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    {...register("chef")}
                    type="text"
                    placeholder="Chef Name"
                />

                {/* Description */}
                <textarea
                    className="w-full text-lg p-3 mb-5 rounded-xl bg-teal-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
                    {...register("description")}
                    placeholder="Description here"
                    rows="3"
                ></textarea>

                {/* Ingredients */}
                <textarea
                    className="w-full text-lg p-3 mb-5 rounded-xl bg-teal-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
                    {...register("ingredients")}
                    placeholder="Ingredients here"
                    rows="3"
                ></textarea>

                {/* Instructions */}
                <textarea
                    className="w-full text-lg p-3 mb-5 rounded-xl bg-teal-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
                    {...register("instruction")}
                    placeholder="Instructions"
                    rows="4"
                ></textarea>

                {/* Category */}
                <select
                    className="w-full text-lg p-3 mb-5 rounded-xl bg-teal-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                    {...register("category")}
                >
                    <option value="">Select Category</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-white text-teal-900 font-bold text-lg py-3 rounded-xl hover:bg-teal-100 transition duration-300 shadow-xl"
                >
                    🍽️ Create Recipe
                </button>
            </form>
        </>


    )
}

export default Create