import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Recipe(){
    const { id } = useParams();
    const [recipeData, setRecipeData] = useState([]);
    const [stepsData, setStepsData] = useState([]);
    const [ingredientsData, setIngredientsData] = useState([])

    useEffect(() => {

          async function fetchData() {
            const [recipeDetailsResponse, stepDetailResponse, ingredientsDetailResponse] = await Promise.all([
                fetch(`http://localhost:3001/data/recipe/${id}`),
                fetch(`http://localhost:3001/data/recipe/${id}/steps`),
                fetch(`http://localhost:3001/data/recipe/${id}/ingredient`)
            ]);
            const recipeData = await recipeDetailsResponse.json();
            const stepsData = await stepDetailResponse.json();
            const ingredientsData = await ingredientsDetailResponse.json();
            setRecipeData(recipeData[0]);
            setStepsData(stepsData);
            setIngredientsData(ingredientsData);
        }
        fetchData();
      }, [id]);

      return(
<article className="recipe">
        <div className="recipe__imgContainer">
            <img src={recipeData.image} alt=""></img>
        </div>
        <h1 className="recipe__title">{recipeData.title}</h1>

        <div className="recipe__informations">
            {
                recipeData.number_person > 0 &&
                <span> <i className="fa-solid fa-users"></i>
                Pour {recipeData.number_person} personnes
                </span>
            }
            <span>
                <i className="fa-solid fa-utensils"></i>
                {recipeData.duration} de préparation
                </span>
        </div>

        <div className="recipe__ingredients">
            <p className="recipe__ingredients--text">Les ingrédients disponibles sur Vracovore :</p>
            <ul className="recipe__ingredients--container">
                {ingredientsData.map(ingredient => 
                    <li className="recipe__ingredients--item" key={ingredient.id}>
                        <Link to={`/product/${ingredient.item_id}`}>
                        <span className="itemName">{ingredient.name}</span>
                        </Link>
                        <span className="quantity">{ingredient.quantity}</span></li>)}
            </ul>
        </div>
        
        <div className="recipe__steps">
            Les étapes de cette recette sont : 
            <ul className="recipe__steps__container">
                {stepsData.map(step =>
                    <li key={step.id} className="recipe__steps--step">{step.description}</li>)}
            </ul>
        </div>

</article>
      )
}

export default Recipe;