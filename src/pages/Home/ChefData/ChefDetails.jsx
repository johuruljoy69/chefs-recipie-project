import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from 'react-lazy-load';
import Recipes from './ChefRecipes/Recipes';


const ChefDetails = () => {
    const ChefDetails = useLoaderData();
    console.log(ChefDetails);
    const { id, name, picture, experience, recipes, likes, bio, description } = ChefDetails;
    const [isDisabled, setIsDisabled] = useState(false);

    const handleDisabled = () => {
        toast.success("Wow! You add Favorite successfully")
        setIsDisabled(true)
    }

    return (
        <div className='container mx-auto mt-12 mb-12'>
            <div className=" w-100 bg-green-300 rounded-lg p-10">
                <LazyLoad height={300} width={400} threshold={0.95}>
                    <img className=' rounded-3xl' src={picture} />
                </LazyLoad>
                {/* <img className='w-80 rounded-3xl' src={picture} /> */}
                <div className="">
                    <div className='space-y-2'>
                        <h2 className="text-3xl font-semibold">{name}</h2>
                        <p><span className='font-semibold pb-3'>Year of experience:</span> {experience} </p>
                        <p><span className='font-semibold'>Numbers of recipes:</span> {recipes} </p>
                        <p><span className='font-semibold'>Biography:</span> {bio} </p>
                        <p><span className='font-semibold'>Description:</span> {description} </p>
                    </div>
                    <div className=" md:flex gap-10 items-center space-y-2 mt-3">
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
                        <ToastContainer />
                    </div>
                </div>
            </div>

            <div className='container mx-auto text-center mt-20 mb-20'>
                <h2 className='text-4xl font-bold mx-auto  text-purple-700 mb-5'>Most Popular Recipes </h2>
            </div>
            <Recipes></Recipes>                                
            
        </div>
    );
};

export default ChefDetails;