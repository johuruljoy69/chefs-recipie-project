import React, { useEffect, useState } from 'react';


const ChefCart = () => {
    const [chefsData, setChefsData] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefsData(data))
    },[])
    console.log(chefsData);

    return (
        <div className='container mx-auto mt-12'>
            <h2 className='text-3xl font-bold text-center mb-10 text-purple-700'>World Famous Chef : {chefsData.length}  </h2>
            <div className='grid lg:grid-cols-3 gap-12'>
                {chefsData?.map((chef) => (
                    <div className="card card-compact w-100 bg-base-100 shadow-xl">
                    <figure><img className='h-100 w-100' src={chef?.picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{chef?.name}</h2>
                        <p><span className='font-semibold'>Year of experience:</span> {chef?.experience} </p>
                        <p><span className='font-semibold'>Numbers of recipes:</span> {chef?.recipes} </p>
                        <div className="flex justify-between items-center">
                            <p>Likes</p>
                            <button className="btn btn-primary">View Recipe Details</button>
                        </div>
                    </div>
                </div>   
                ) )}            
                
            </div>
        </div>
    );
};

export default ChefCart;