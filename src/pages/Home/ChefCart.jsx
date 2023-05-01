import React from 'react';

const ChefCart = () => {
    return (
        <div className='container mx-auto mt-12'>
            <h2 className='text-3xl font-bold text-center mb-10 text-purple-700'>World Famous Chef </h2>
            <div className='grid lg:grid-cols-3 gap-12'>
                <div className="card card-compact w-100 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1682969058~exp=1682969658~hmac=919439fa9f767f98a96a7cd6defbe3ec1099504496815d8034b2e0cd5b43a5c6" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Johurul Joy</h2>
                        <p><span className='font-semibold'>Experience:</span> </p>
                        <p><span className='font-semibold'>Experience:</span> </p>
                        <div className="flex justify-between items-center">
                            <p>Likes</p>
                            <button className="btn btn-primary">View Recipe Details</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-100 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1682969058~exp=1682969658~hmac=919439fa9f767f98a96a7cd6defbe3ec1099504496815d8034b2e0cd5b43a5c6" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Johurul Joy</h2>
                        <p><span className='font-semibold'>Experience:</span> </p>
                        <p><span className='font-semibold'>Experience:</span> </p>
                        <div className="flex justify-between items-center">
                            <p>Likes</p>
                            <button className="btn btn-primary">View Recipe Details</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-100 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1682969058~exp=1682969658~hmac=919439fa9f767f98a96a7cd6defbe3ec1099504496815d8034b2e0cd5b43a5c6" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Johurul Joy</h2>
                        <p><span className='font-semibold'>Experience:</span> </p>
                        <p><span className='font-semibold'>Experience:</span> </p>
                        <div className="flex justify-between items-center">
                            <p>Likes</p>
                            <button className="btn btn-primary">View Recipe Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCart;