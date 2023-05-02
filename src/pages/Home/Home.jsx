import React from 'react';
import ChefCart from './ChefData/ChefCart';
import PopularRecipe from './PopularRecipe';

const Home = () => {

    return (
        <div className=''>
            {/* <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/d72jv27/banner-3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/pbT9PmL/banner-2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/tC8K7ZL/banner-1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/XJtvk3C/banner-4.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}

            <div style={{
                backgroundImage: `url("https://i.ibb.co/d72jv27/banner-3.jpg")`, backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat', }}  >
                <div className='container mx-auto pt-24 pb-24'>
                    <h2 className='text-center text-7xl text-purple-900 font-bold'>JS FoodHub</h2>
                    <p className='text-center lg:text-xl font-semibold text-white mx-auto border mt-7 w-2/3'>JS FoodHub Restaurant is a physical establishment that offers delicious food and drinks to its customers. The restaurant is part of the JS FoodHub brand, which also includes the online food ordering platform discussed earlier.</p>
                </div>
            </div>

            <ChefCart></ChefCart>

            <PopularRecipe></PopularRecipe>

        </div >
    );
};

export default Home;