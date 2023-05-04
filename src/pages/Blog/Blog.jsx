import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();


const Blog = () => {
    return (
        <div className='Blog' ref={ref}>
            <div style={{
                backgroundImage: `url("https://i.ibb.co/XJtvk3C/banner-4.jpg")`, backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}  >
                <div className='container mx-auto pt-24 pb-24'>
                    <h2 className='text-center lg:text-8xl text-6xl text-white font-bold'>JS FoodHub Blog</h2>

                </div>
            </div>

            <div className='container mx-auto mt-20 mb-20 grid md:grid-cols-2 gap-6'>
                <div className="card w-100 h-100 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/VgGJdVy/React-uncontrolled-and-controlled-components.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2><span className='font-semibold text-purple-700'>Question: </span> What is the differences between uncontrolled and controlled components?</h2>
                        <p><span className='font-semibold text-purple-700'>Answer: </span> In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. </p>
                        <button className='px-5 py-2 text-white font-semibold rounded-lg bg-purple-700 hover:bg-purple-900 '>View Details</button>
                    </div>
                </div>
                <div className="card w-100 h-100 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/RjYnYMF/validate-React-props-using-Prop-Types.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2><span className='font-semibold text-purple-700'>Question: </span> How to validate React props using PropTypes?</h2>
                        <p><span className='font-semibold text-purple-700'>Answer: </span> React PropTypes is a built-in feature in React that enables developers to validate the type and shape of props passed to a component. The PropTypes module exposes a range of validators that can be used to check whether the props match the expected type. To use PropTypes to validate React props, you'll first need to import the PropTypes module from the 'prop-types' package. </p>
                        <button className='px-5 py-2 text-white font-semibold rounded-lg bg-purple-700 hover:bg-purple-900 '>View Details</button>
                    </div>
                </div>
                <div className="card w-100 h-100 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/X8b9Mv3/what-is-the-difference-between-nodejs-and-express-js.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2><span className='font-semibold text-purple-700'>Question: </span> what is the difference between nodejs and express js?</h2>
                        <p><span className='font-semibold text-purple-700'>Answer: </span> js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses. </p>
                        <button className='px-5 py-2 text-white font-semibold rounded-lg bg-purple-700 hover:bg-purple-900 '>View Details</button>
                    </div>
                </div>
                <div className="card w-100 h-100 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/0Mvpzdj/What-is-a-custom-hook-and-why-will-you-create-a-custom-hook.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2><span className='font-semibold text-purple-700'>Question: </span> What is a custom hook, and why will you create a custom hook?</h2>
                        <p><span className='font-semibold text-purple-700'>Answer: </span> Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. </p>
                        <button className='px-5 py-2 text-white font-semibold rounded-lg bg-purple-700 hover:bg-purple-900 '>View Details</button>
                    </div>
                </div>
            </div>
            <div className='text-center mb-20'>
                <Pdf targetRef={ref} filename="blog-page.pdf">
                    {({ toPdf }) => <button onClick={toPdf} className='px-7 py-3 text-white text-center mx-auto font-semibold rounded-lg bg-purple-700 hover:bg-purple-900 '>Download pdf file</button>}
                </Pdf>                
            </div>
        </div>
    );
};

export default Blog;