import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';


const ChefDetails = () => {
    const ChefDetails = useLoaderData();
    console.log(ChefDetails);
    const { id, name, picture, experience, recipes, likes, bio, description } = ChefDetails;

    return (
        <div className='container mx-auto mt-12 mb-12'>
            <div className="card card-compact w-2/3 container mx-auto bg-base-100 border p-5">
                <figure><img className='rounded-xl' src={picture} alt="Shoes" /></figure>
                <div className="card-body my-3">
                    <h2 className="text-3xl font-semibold">{name}</h2>
                    <p><span className='font-semibold'>Year of experience:</span> {experience} </p>
                    <p><span className='font-semibold'>Numbers of recipes:</span> {recipes} </p>
                    <p><span className='font-semibold'>Biography:</span> {bio} </p>
                    <p><span className='font-semibold'>Description:</span> {description} </p>
                    <div className="card-actions items-center justify-end mt-5">
                        <FcLike style={{ fontSize: '1.5rem' }}></FcLike>
                        <p className='ps-2'>{likes} Likes </p>
                        <button className="btn btn-primary">Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;