
import Recipecard from "../Components/Recipecard"

const Fav = () => {

    const favourate = JSON.parse(localStorage.getItem('fav') || '[]')

    return (
        <div className="flex flex-wrap gap-8 p-10 ml-18" >
            {favourate?.length > 0 ? (
                favourate?.map((recipe, id) =>
                    <Recipecard key={id} recipe={recipe} />
                )
            ) : (
                <p className="text-white text-6xl mt-20 font-light tracking-tight">No favourate found!</p>
            )}
        </div>
    )
}

export default Fav