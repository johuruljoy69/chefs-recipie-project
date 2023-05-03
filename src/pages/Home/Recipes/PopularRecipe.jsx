import React, { useEffect, useState } from 'react';
import RecipesCart from './RecipesCart';

const PopularRecipe = () => {
    const [recipesData, setRecipesData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/recipes')
            .then(res => res.json())
            .then(data => setRecipesData(data))
            .catch(error => error.message)
    }, [])

    return (
        <div className='mt-12'>
            <h2 className='text-4xl font-bold text-center mx-auto text-purple-700 mb-5'>Most Popular Recipes</h2>
            <p className='text-center mx-auto mb-10 w-2/3'>The most popular recipes in restaurants can vary depending on the type of cuisine and location, but here are some common dishes that are often ordered:</p>
            <div style={{
                backgroundImage: `url("https://i.ibb.co/XJtvk3C/banner-4.jpg")`, backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className='container mx-auto grid lg:grid-cols-3 gap-6 pt-10 pb-10'>
                    {recipesData?.map((recipes) => <RecipesCart
                        key={recipes.recipe_id}
                        recipes={recipes}
                    ></RecipesCart>)}
                </div>
            </div>
        </div>
    );
};

export default PopularRecipe;