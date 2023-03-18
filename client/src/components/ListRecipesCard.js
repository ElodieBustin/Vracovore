import { Link } from 'react-router-dom';

function ListRecipesCard({recipeData}){
    return(
        <>
            <div className="recipiesCard">
        <Link to={`/recette/${recipeData.id}`}>
            <div className="recipiesCard__imgContainer">
            <img src={recipeData.image} alt="" />
            </div>
    
            <p className="recipiesCard__title">
                <span>{recipeData.title}</span> 
            </p>
        </Link>
    </div>
        </>
    )

}

export default ListRecipesCard;