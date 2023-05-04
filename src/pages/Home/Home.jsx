import React from 'react';
import ChefCart from './ChefData/ChefCart';
import PopularRecipe from './Recipes/PopularRecipe';
import RecipeCategory from './Recipes/RecipeCategory';



const Home = () => {

    return (
        <div className=''>            
            <div style={{
                backgroundImage: `url("https://i.ibb.co/zxmnMv7/Banner-img-2.jpg")`, backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}  >
                <div className='container mx-auto text-center pt-12 pb-12'>
                    <h2 className='text-center lg:text-8xl text-6xl text-white font-bold'>JS FoodHub</h2>
                    <p className='text-center lg:text-2xl font-semibold text-purple-900 bg-sky-50 opacity-60 mx-auto rounded-xl p-3 mt-7 w-10/12'>JS FoodHub Restaurant is a physical establishment that offers delicious food and drinks to its customers. The restaurant is part of the JS FoodHub brand, which also includes the online food ordering platform discussed earlier.</p>
                    <button className='px-5 py-2 text-white font-semibold rounded-lg bg-purple-700 hover:bg-purple-900 mt-6 '>View Recipes</button>
                </div>
            </div>

            <ChefCart></ChefCart>

            <RecipeCategory></RecipeCategory>

            <PopularRecipe></PopularRecipe>

        </div >
    );
};

export default Home;