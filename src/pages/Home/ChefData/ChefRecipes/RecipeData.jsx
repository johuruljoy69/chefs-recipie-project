import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const RecipeData = ({ recipes }) => {
    const { likes, recipeName, img_url, ingredients, cookingMethod, rating } = recipes;
    const [isDisabled, setIsDisabled] = useState(false);
    const handleDisabled = () => {
        toast.success("Wow! You add Favorite successfully")
        setIsDisabled(true)
    }

    return (
        <div className="card w-100 h-100 bg-base-100 border">
            <figure><img className='w-100' src={img_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{recipeName}</h2>
                <p><small><span className='font-semibold pb-3'>Ingredients:</span> {ingredients}</small> </p>
                <p><small><span className='font-semibold pb-3'>CookingMethod:</span> {cookingMethod}</small> </p>

                <div className=" md:flex gap-5 items-center space-y-2 justify-between mt-3">
                    <div className='flex items-center'>
                        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                        <p className='ps-2'>{rating} </p>
                    </div>
                    <button
                        onClick={handleDisabled}
                        disabled={isDisabled}
                        className={`bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg ${isDisabled ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {isDisabled ? "Favorite" : "Favorite"}
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </div>

    );
};

export default RecipeData;