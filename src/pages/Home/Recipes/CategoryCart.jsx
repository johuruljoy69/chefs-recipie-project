import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCart = ({ category }) => {
    const { id, picture, name } = category;

    return (
        <div className="card w-100 mx-auto bg-base-100 transform transition duration-500 hover:scale-110">
            <figure><img className='rounded-full w-2/3' src={picture} /></figure>
            <Link><p className="mt-3 text-xl font-semibold hover:text-purple-700 text-center">{name}</p></Link>
        </div>
    );
};

export default CategoryCart;