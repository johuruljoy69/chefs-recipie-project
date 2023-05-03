import React from 'react';
import { FcLike } from 'react-icons/fc';

const RecipesCart = ({ recipes }) => {
    const { id, recipeName, img_url, rating, likes} = recipes;
    return (
         <div className="card w-100 h-100 bg-base-100 border">
            <figure><img className='w-100' src={img_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{recipeName}</h2>
                <div className=" md:flex gap-5 items-center space-y-2 justify-between mt-3">
                    <div className='flex items-center'>
                        <FcLike style={{ fontSize: '1.5rem' }}></FcLike>
                        <p className='ps-2'>{likes} Likes </p>
                    </div>
                    <button className="btn btn-primary">Favorite</button>
                </div>
            </div>
        </div>
        
    );
};

export default RecipesCart;