import { Link } from "react-router-dom";

const Recipecard = (props) => {

    const {id , title , image , chef , description} = props.recipe;

  return (
    <Link to={`/recipes/details/${id}`} className=" bg-teal-500 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 max-w-sm p-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">{title}.</h1>
          <img className="h-48 w-full object-cover rounded " src={image} alt="" />
          <h2 className="mt-4 text-2xl font-medium">{chef}</h2>
          <p className="mt-2 text-gray-700 text-sm">{description.slice(0,100)}...<small className="text-cyan-800">more</small></p>
    </Link>
  )
}

export default Recipecard