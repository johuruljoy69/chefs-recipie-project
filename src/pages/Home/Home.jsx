import React from 'react';
import ChefCart from './ChefData/ChefCart';
import PopularRecipe from './Recipes/PopularRecipe';
import RecipeCategory from './Recipes/RecipeCategory';
import useTitle from '../../hooks/useTitle';



const Home = () => {
    useTitle('Home');

    return (
        <div className=''>            
            <div style={{
                backgroundImage: `url("https://i.ibb.co/zxmnMv7/Banner-img-2.jpg")`, backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}  >
                <div className='container mx-auto text-center pt-12 pb-12'>
                    <h2 className='text-center lg:text-8xl text-6xl text-white font-extrabold'>JS FoodHub</h2>
                    <p className='text-center lg:text-2xl font-semibold text-purple-900 bg-sky-50 opacity-60 mx-auto rounded-xl p-3 mt-7 w-10/12'>JS FoodHub Restaurant is a physical establishment that offers delicious food and drinks to its customers. The restaurant is part of the JS FoodHub brand, which also includes the online food ordering platform discussed earlier.</p>
                    <button className="mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg">View Recipes</button>
                </div>
            </div>

            <ChefCart></ChefCart>

            <RecipeCategory></RecipeCategory>

            <PopularRecipe></PopularRecipe>

        </div >
    );
};

export default Home;