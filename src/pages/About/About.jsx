import React from 'react';

const About = () => {
    return (
        <div className=''>
            <div style={{
                backgroundImage: `url("https://i.ibb.co/d72jv27/banner-3.jpg")`, backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}  >
                <div className='container mx-auto text-center pt-12 pb-12'>
                    <h2 className='text-center lg:text-8xl text-6xl text-white font-bold'>JS FoodHub Blog</h2>
                    <p className='text-center lg:text-2xl font-semibold text-purple-900 bg-sky-50 opacity-60 mx-auto rounded-xl p-3 mt-7 w-10/12'>JS FoodHub Restaurant is a physical establishment that offers delicious food and drinks to its customers. The restaurant is part of the JS FoodHub brand, which also includes the online food ordering platform discussed earlier.</p>
                    <button className='px-5 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 mt-6 '>View Recipes</button>
                </div>
            </div>
            <div className='container mx-auto mt-12 mb-12'>
                <div className="md:flex w-100 p-10 gap-10 items-center space-y-5 bg-base-100">
                    <div className='grid md:grid-cols-2 gap-5'>
                        <img className='rounded-lg w-100' src="https://i.ibb.co/JqDBF5f/Desserts.jpg" alt="" />
                        <img className='rounded-lg w-100' src="https://i.ibb.co/WcDKs1k/Vegetarian.jpg" alt="" />
                        <img className='rounded-lg w-100' src="https://i.ibb.co/n8y0vVn/Chicken.jpg" alt="" />
                        <img className='rounded-lg w-100' src="https://i.ibb.co/mzSKX7T/Beef.jpg" alt="" />
                    </div>
                    <div className="">
                        <h2 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 mb-5'>JS FoodHub</h2>
                        <p className=''>JS Food Hub is a trendy restaurant that offers a unique dining experience to its patrons. Located in the heart of the city, this restaurant serves a variety of cuisines that are expertly crafted by their skilled chefs. The restaurant has a modern and chic decor that creates a welcoming and comfortable atmosphere. Their menu includes a range of dishes, from traditional favorites to innovative fusion cuisine, catering to different dietary needs and preferences. In addition to their delicious food, JS Food Hub also offers a wide selection of beverages, including cocktails, wines, and craft beers. With excellent service and a relaxing ambiance, JS Food Hub is a must-visit restaurant for foodies looking for a delightful culinary adventure.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;