import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';


const ChefDetails = () => {
    const ChefDetails = useLoaderData();
    console.log(ChefDetails);
    const { id, name, picture, experience, recipes, likes, bio, recipeName, recipeName_2, recipeName_3, img_url, img_url_2, img_url_3, ingredients, ingredients_2, ingredients_3, cookingMethod, cookingMethod_2, cookingMethod_3, rating, rating_2, rating_3 } = ChefDetails;

    const [isDisabled, setIsDisabled] = useState(false);

    const handleDisabled = () => {
        setIsDisabled(true)
    }

    return (
        <div className='container mx-auto mt-12 mb-12'>
            <div className="md:flex justify-around gap-10 items-center w-100 bg-gray-200 rounded-lg p-5">
                <img className='w-80 rounded-xl' src={picture} />
                <div className="space-y-2">
                    <div className='space-y-2'>
                        <h2 className="text-3xl font-semibold">{name}</h2>
                        <p><span className='font-semibold pb-3'>Year of experience:</span> {experience} </p>
                        <p><span className='font-semibold'>Numbers of recipes:</span> {recipes} </p>
                        <p><span className='font-semibold'>Biography:</span> {bio} </p>
                        {/* <p><span className='font-semibold'>Description:</span> {description} </p> */}
                    </div>
                    <div className=" md:flex gap-5 items-center space-y-2 justify-between mt-3">
                        <div className='flex items-center'>
                            <FcLike style={{ fontSize: '1.5rem' }}></FcLike>
                            <p className='ps-2'>{likes} Likes </p>
                        </div>
                        <button
                            onClick={handleDisabled}
                            disabled={isDisabled}
                            className={`bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg ${isDisabled ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                        >
                            {isDisabled ? "Favorite" : "Favorite"}
                        </button>
                    </div>
                </div>
            </div>

            <div className='container mx-auto text-center mt-10'>
                <h2 className='text-4xl font-bold mx-auto  text-purple-700 mb-5'>Most Popular Recipes </h2>
            </div>

            <div className='container mx-auto grid lg:grid-cols-3 gap-6 mt-12'>
                <div className="card w-100 h-100 bg-base-100 border">
                    <figure><img className='w-100' src={img_url} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{recipeName}</h2>
                        <p><small><span className='font-semibold pb-3'>Ingredients:</span> {ingredients}</small> </p>
                        <p><small><span className='font-semibold pb-3'>CookingMethod:</span> {cookingMethod}</small> </p>

                        <div className=" md:flex gap-5 items-center space-y-2 justify-between mt-3">
                            <div className='flex items-center'>
                                <FcLike style={{ fontSize: '1.5rem' }}></FcLike>
                                <p className='ps-2'>{likes} Likes </p>
                            </div>
                            <button
                                onClick={handleDisabled}
                                disabled={isDisabled}
                                className={`bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg ${isDisabled ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                            >
                                {isDisabled ? "Favorite" : "Favorite"}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card w-100 h-100 bg-base-100 border">
                    <figure><img className='w-100' src={img_url_2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{recipeName_2}</h2>
                        <p><small><span className='font-semibold pb-3'>Ingredients:</span> {ingredients_2}</small> </p>
                        <p><small><span className='font-semibold pb-3'>CookingMethod:</span> {cookingMethod_2}</small> </p>

                        <div className=" md:flex gap-5 items-center space-y-2 justify-between mt-3">
                            <div className='flex items-center'>
                                <FcLike style={{ fontSize: '1.5rem' }}></FcLike>
                                <p className='ps-2'>{likes} Likes </p>
                            </div>
                            <button
                                onClick={handleDisabled}
                                disabled={isDisabled}
                                className={`bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg ${isDisabled ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                            >
                                {isDisabled ? "Favorite" : "Favorite"}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card w-100 h-100 bg-base-100 border">
                    <figure><img className='w-100' src={img_url_3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{recipeName_3}</h2>
                        <p><small><span className='font-semibold pb-3'>Ingredients:</span> {ingredients_3}</small> </p>
                        <p><small><span className='font-semibold pb-3'>CookingMethod:</span> {cookingMethod_3}</small> </p>

                        <div className=" md:flex gap-5 items-center space-y-2 justify-between mt-3">
                            <div className='flex items-center'>
                                <FcLike style={{ fontSize: '1.5rem' }}></FcLike>
                                <p className='ps-2'>{likes} Likes </p>
                            </div>
                            <button
                                onClick={handleDisabled}
                                disabled={isDisabled}
                                className={`bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg ${isDisabled ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                            >
                                {isDisabled ? "Favorite" : "Favorite"}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChefDetails;