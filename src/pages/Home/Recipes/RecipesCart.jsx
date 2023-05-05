import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BsStopwatch } from 'react-icons/bs';

const RecipesCart = ({ recipes }) => {
    const { id, recipeName, img_url, description, rating, cookingTime } = recipes;

    return (
        <div className="card w-100 h-100 bg-base-100 border p-2">
            <figure><img className='w-100 rounded' src={img_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{recipeName}</h2>
                <p><small>{description}</small></p>
                <div className=" md:flex gap-3 items-center space-y-2 justify-between mt-3">
                    <div className='flex items-center'>
                        <Rating style={{ maxWidth: '5rem' }} value={rating} readOnly />
                        <p className='ps-2'><span className='font-semibold text-purple-700'>{rating}</span> </p>
                    </div>
                    <div className='flex items-center'>
                        <BsStopwatch style={{ fontSize: '1.2rem' }}></BsStopwatch>
                        <p className='ps-2'><span className='font-semibold text-purple-700'>{cookingTime}</span> mins</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default RecipesCart;