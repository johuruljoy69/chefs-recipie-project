import React, { useEffect, useState } from 'react';
import Cart from './Cart';


const ChefCart = () => {
    const [chefsData, setChefsData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefsData(data))
            .catch(error => error.message)
    }, [])
    // console.log(chefsData);

    return (
        <div className=' mt-20 mb-20'  >
            <div className='text-center mb-14 mx-10'>
                <h2 className='text-4xl font-bold mx-auto text-purple-700 mb-5'>Most Popular Chefs </h2>
                <p className='w-2/3 text-center mx-auto'>There are many popular chefs in the world, each with their own unique style and approach to cooking. Some of the most famous chefs include:</p>
            </div>
            <div style={{
                backgroundImage: `url("https://i.ibb.co/tC8K7ZL/banner-1.jpg")`, backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}  >
                <div className='container mx-auto grid lg:grid-cols-3 gap-6 pt-10 pb-10'>
                    {chefsData?.map((chef) => <Cart
                        key={chef.id}
                        chef={chef}
                    ></Cart>)}
                </div>

            </div>
        </div>
    );
};

export default ChefCart;