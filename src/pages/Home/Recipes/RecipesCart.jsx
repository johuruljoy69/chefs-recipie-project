import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const RecipesCart = ({ recipes }) => {
    const { id, recipeName, img_url, description, rating } = recipes;

    const [isDisabled, setIsDisabled] = useState(false);

    const handleDisabled = () => {
        setIsDisabled(true)
        toast.success("Wow! Favorite added successfully")
        console.log(toast);
    }

    return (
        <div className="card w-100 h-100 bg-base-100 border">
            <figure><img className='w-100 rounded' src={img_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{recipeName}</h2>
                <p><small>{description}</small></p>
                <div className=" md:flex gap-5 items-center space-y-2 justify-between mt-3">
                    <div className='flex items-center'>
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                        <p className='ps-2'>{rating} </p>
                    </div>
                    <button
                        onClick={handleDisabled}
                        disabled={isDisabled}
                        className={`bg-purple-700 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg ${isDisabled ? "opacity-50 cursor-not-allowed" : ""
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

export default RecipesCart;