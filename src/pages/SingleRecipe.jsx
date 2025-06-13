import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { recipecontext } from "../Context/Recipecontext"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

const SingleRecipe = () => {

  const { data, setdata } = useContext(recipecontext)
  const navigate = useNavigate()
  const params = useParams()
  const recipe = data.find((recipe) => params.id == recipe.id)
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe?.title,
      image: recipe?.image,
      chef: recipe?.chef,
      description: recipe?.description,
      instruction: recipe?.instruction,
      category: recipe?.category

    },
  })


  const submitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id)
    const copydata = [...data]
    copydata[index] = { ...copydata[index], ...recipe }
    setdata(copydata)
    localStorage.setItem("recipe", JSON.stringify(copydata))

    toast.success("Recipe Update!")
  }


  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id)
    setdata(filterdata)
    localStorage.setItem("recipe", JSON.stringify(filterdata))

    toast.success("Recipe Deleted!")
    navigate("/recipes")
  }


  const [favourate, setfavourate] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  )

  const favHandler = () => {
    let copyfav = [...favourate]
    copyfav.push(recipe)
    setfavourate(copyfav)
    localStorage.setItem("fav", JSON.stringify(copyfav))
  }

  const unfavHandler = () => {
    const filterfav = favourate.filter((f) => f.id != recipe?.id)
    setfavourate(filterfav)
    localStorage.setItem("fav", JSON.stringify(filterfav))
  }



 return (
  recipe ? (
    <div className="w-full flex flex-col md:flex-row gap-10 bg-gradient-to-br from-gray-900 via-zinc-900 to-black text-white min-h-screen p-15 rounded-2xl">
      
      <div className="relative left md:w-1/2 p-10 rounded-xl shadow-lg bg-zinc-900">
        {favourate.find(f => f.id == recipe?.id) ? (
          <i onClick={unfavHandler} className="absolute right-[3%] text-4xl text-teal-400 ri-heart-3-fill"></i>
        ) : (
          <i onClick={favHandler} className="absolute right-[3%] text-4xl text-teal-400 ri-heart-3-line"></i>
        )}

        <h1 className="text-5xl font-extrabold text-lime-400">{recipe.title}</h1>
        <img className="w-full max-w-full h-[30vh] object-cover mt-6 rounded-lg shadow" src={recipe.image} alt="" />
        <h2 className="text-3xl font-semibold mt-5 text-teal-300">{recipe.chef}</h2>
        <p className="text-lg font-light text-gray-300 mt-3">{recipe.description}</p>
        <p className="text-lg font-light text-amber-300 mt-3">{recipe.ingredients}</p>
        <p className="text-lg text-lime-300 mt-2 whitespace-pre-line">{recipe.instruction}</p>
        <h3 className="text-2xl mt-5 text-teal-400 italic">{recipe.category}</h3>
      </div>

      <form
        className="md:w-1/2 p-8 rounded-xl bg-zinc-950 shadow-lg space-y-4"
        onSubmit={handleSubmit(submitHandler)}
      >
        {["image", "title", "chef"].map((field, index) => (
          <input
            key={index}
            className="w-full text-xl p-3 bg-zinc-800 text-white placeholder-gray-400 rounded border-none outline-none focus:ring-2 focus:ring-teal-400"
            {...register(field)}
            type={field === "image" ? "url" : "text"}
            placeholder={field[0].toUpperCase() + field.slice(1).replace("chef", "Chef Name")}
          />
        ))}

        <textarea
          className="w-full text-xl p-3 bg-zinc-800 text-white placeholder-gray-400 rounded border-none outline-none focus:ring-2 focus:ring-teal-400"
          {...register("description")}
          placeholder="Description"
        ></textarea>

        <textarea
          className="w-full text-xl p-3 bg-zinc-800 text-white placeholder-gray-400 rounded border-none outline-none focus:ring-2 focus:ring-teal-400"
          {...register("ingredients")}
          placeholder="Ingredients"
        ></textarea>

        <textarea
          className="w-full text-xl p-3 bg-zinc-800 text-white placeholder-gray-400 rounded border-none outline-none focus:ring-2 focus:ring-teal-400"
          {...register("instruction")}
          placeholder="Instructions"
        ></textarea>

        <select
          className="w-full text-xl p-3 bg-zinc-800 text-white rounded border-none outline-none focus:ring-2 focus:ring-teal-400"
          {...register("category")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="dinner">Dinner</option>
          <option value="lunch">Lunch</option>
        </select>

        <div className="flex gap-4 pt-3">
          <button
            type="submit"
            className="flex-1 h-[50px] bg-teal-500 hover:bg-teal-600 text-white text-lg font-medium rounded shadow transition-all duration-300"
          >
            Update Recipe
          </button>
          <button
            type="button"
            onClick={DeleteHandler}
            className="flex-1 h-[50px] bg-red-500 hover:bg-red-600 text-white text-lg font-medium rounded shadow transition-all duration-300"
          >
            Delete Recipe
          </button>
        </div>
      </form>

    </div>
  ) : (
    "loading...."
  )
)


}

export default SingleRecipe