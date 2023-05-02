import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaGoogle, FaGithub} from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const Login = () => {     
    const { loginUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();
    const location = useLocation()
    // console.log('login page location', location);
    const from = location.state?.from?.pathname || '/home';

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn =() =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.error(error.message);
        })
    }

    const handleGitHubSignIn =() =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.error(error.message);
        })
    }


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setSuccess('')

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('User Login successfully')
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message)
            })
    }
    return (
        <div className='container mx-auto mt-12 mb-12'>
            <div className="hero min-h-screen">
                <div className="hero-content border p-12 flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-5">Login your account now!</h1>
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                            <p className='text-green-500'><small>{success}</small></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Don't have an Account? <Link className='text-purple-600' to='/register'>Please Register</Link></p>
                            <div className="inline-flex items-center justify-center w-full">
                                <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                                    <p className='text-xl font-semibold' >or</p>
                                </div>
                            </div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline mb-3"><FaGoogle /><span className='ps-2'>Login with Google</span> </button>
                            <button onClick={handleGitHubSignIn} className="btn btn-outline btn-primary mb-3"><FaGithub /><span className='ps-2'>Login with GitHub</span> </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;