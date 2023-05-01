import React from 'react';
import Banner from './Banner';
import ChefCart from './ChefCart';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <ChefCart></ChefCart>
            <div className="flex flex-col container mx-auto mt-12">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
                <div className="divider"></div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
            </div>
        </div>
    );
};

export default Home;