import React from 'react';
import { FcLike } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Cart = ({ chef }) => {
    const { id, name, picture, experience, recipes, likes } = chef;
    return (
        <div className="card card-compact h-100 bg-sky-100 shadow-xl">
            <figure><img className='h-100' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className='font-semibold'>Year of experience:</span> {experience} </p>
                <p><span className='font-semibold'>Numbers of recipes:</span> {recipes} </p>
                <div className="flex justify-between items-center mt-5">
                    <FcLike style={{ fontSize: '1.5rem' }}></FcLike>
                    <p className='ps-2'>{likes} Likes </p>
                    <Link to={`/chefs/${id}`}><button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;