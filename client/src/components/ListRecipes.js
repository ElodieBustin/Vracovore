import React, { useEffect, useState } from 'react';
import ListRecipesCard from "./ListRecipesCard";

function ListRecipies(){
    const [recipesData, setRecipiesData] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            try {
                const recipesResponse = await fetch('http://localhost:3001/data/listRecipes');
                const recipesData = await recipesResponse.json();
                setRecipiesData(recipesData);
            } catch (error) {
                console.log(error.message);
            }

        }
        fetchData();
    }, []);

    return (
        <>
        <div className="listRecipies">
            {recipesData.map(recipe =>
                <ListRecipesCard key={recipe.id} recipeData={recipe} />)
            }
    </div>
    </>
    );
};

export default ListRecipies;