import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <div style={{
                backgroundImage: `url("https://i.ibb.co/d72jv27/banner-3.jpg")`, backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}  >
                <div className='container mx-auto pt-24 pb-24'>
                    <h2 className='text-center lg:text-8xl text-6xl text-white font-bold'>JS FoodHub Blog</h2>

                </div>
            </div>
        </div>
    );
};

export default Blog;