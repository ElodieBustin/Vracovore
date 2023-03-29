import { Link } from 'react-router-dom';

function ListRecipesCard({recipeData}){
    return(
        <>
            <div className="recipesCard">
        <Link to={`/recette/${recipeData.id}`}>
            <div className="recipesCard__imgContainer">
            <img src={recipeData.image} alt="" />
            </div>
    
            <p className="recipesCard__title">
                <span>{recipeData.title}</span> 
            </p>
        </Link>
    </div>
        </>
    )

}

export default ListRecipesCard;