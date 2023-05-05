import React, { useEffect, useState } from 'react';
import RecipeData from './RecipeData';

const Recipes = () => {
    const [recipesData, setRecipesData] = useState([]);
    useEffect(() => {
        fetch('https://b7a10-chef-recipe-hunter-server-side-johuruljoy69.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipesData(data))
            .catch(error => error.message)
    }, [])

    return (
        <div className="container mx-auto grid md:grid-cols-2 gap-5 bg-base-100">
            {
                recipesData?.slice(0,6)?.map(recipes => <RecipeData
                key={recipes.recipe_id}
                recipes={recipes}
                ></RecipeData> )
            }
        </div>
    );
};

export default Recipes;