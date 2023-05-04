import React, { useEffect, useState } from 'react';
import CategoryCart from './CategoryCart';

const RecipeCategory = () => {
    const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {
        fetch('https://b7a10-chef-recipe-hunter-server-side-johuruljoy69.vercel.app/recipe-category')
            .then(res => res.json())
            .then(data => setCategoryData(data))
            .catch(error => error.message)
    }, [])
    return (
        <div>
            <p className='text-center mx-auto mb-2 w-2/3'>Choose a Category</p>
            <h2 className='text-4xl text-center mx-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 mb-10 pb-10'>Recipe Categories</h2>
            <div className='container mx-auto grid lg:grid-cols-5 gap-5 pt-10 pb-10'>
                {
                    categoryData?.map(category => <CategoryCart
                        key={category.id}
                        category={category}
                    ></CategoryCart>)
                }
            </div>
        </div>
    );
};

export default RecipeCategory;