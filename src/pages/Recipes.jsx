import { useContext } from "react"
import { recipecontext } from "../Context/Recipecontext"
import Recipecard from "../Components/Recipecard"

const Recipes = () => {

  const { data } = useContext(recipecontext)

  return (
    <div className="flex flex-wrap gap-8 p-10 ml-10 justify-center" >
      {data.length > 0 ? (
        data.map((recipe, id) =>
          <Recipecard key={id} recipe={recipe} />
        )
      ) : (
        <p className="text-amber-500 text-8xl mt-20 font-light tracking-tight">No Recipe found!</p>
      )}
    </div>
  )
}

export default Recipes