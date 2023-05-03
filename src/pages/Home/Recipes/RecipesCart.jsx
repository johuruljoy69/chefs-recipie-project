import React, { useState } from 'react';
import { FcLike } from 'react-icons/fc';

const RecipesCart = ({ recipes }) => {
    const { id, recipeName, img_url, description, rating, likes } = recipes;

    const [isDisabled, setIsDisabled] = useState(false);

    const handleDisabled = () => {
        setIsDisabled(true)
    }

    return (
        <div className="card w-100 h-100 bg-base-100 border">
            <figure><img className='w-100' src={img_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{recipeName}</h2>
                {/* <p><small>{description}</small></p> */}
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

    );
};

export default RecipesCart;