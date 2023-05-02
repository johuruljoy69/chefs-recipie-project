import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div className='container mx-auto mt-12 mb-12'>
            <div className="hero min-h-screen">
                <div className="hero-content border p-24 flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-5">Login your account now!</h1>
                    </div>
                    <form onSubmit={handleLogin}  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Enter your email address" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <input type='checkbox' />
                                    <p className="label-text ps-2">Remember Me </p>

                                </label>

                            </div>
                            {/* <p className='text-green-500'><small>{success}</small></p> */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p><small>Don't have an Account? <Link className='text-purple-600' to='/register'>Please Register</Link></small></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;