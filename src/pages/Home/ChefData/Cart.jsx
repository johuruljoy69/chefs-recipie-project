import React from 'react';
import { FcLike } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Cart = ({ chef }) => {
    const { id, name, picture, experience, recipes, likes } = chef;
    return (
        <div className='px-5'>
            <div className="card card-compact w-100 h-100 bg-base-100 shadow-xl">
                <figure><img className='h-100' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p><span className='font-semibold'>Year of experience:</span> {experience} </p>
                    <p><span className='font-semibold'>Numbers of recipes:</span> {recipes} </p>
                    <div className="flex justify-between items-center mt-5">
                        <FcLike style={{ fontSize: '1.5rem' }}></FcLike>
                        <p className='ps-2'>{likes} Likes </p>
                        <Link to={`/chefs/${id}`}><button className="btn bg-purple-700">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;