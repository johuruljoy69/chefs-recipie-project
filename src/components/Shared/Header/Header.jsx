import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser()
            .then(result => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className='hover:text-purple-700' to='/'><li>Home</li></Link>
                            <Link className='hover:text-purple-700' to='/about'><li>About</li></Link>
                            <Link className='hover:text-purple-700' to='/blog'><li>Blog</li></Link>
                        </ul>
                    </div>
                    <a className="normal-case text-2xl font-bold text-purple-700">JS FoodHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal flex gap-5 items-center">
                        <Link className=' hover:text-purple-700' to='/'><li>Home</li></Link>
                        <Link className=' hover:text-purple-700' to='/about'><li>About</li></Link>
                        <Link className=' hover:text-purple-700' to='/blog'><li>Blog</li></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user && <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle border avatar">
                            <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>}

                    {user ?
                        <button onClick={handleLogout} className='px-7 py-2 mx-3 text-white font-semibold bg-purple-700 '>Logout</button> :
                        <Link to='/login'><button className='px-7 py-2 mx-3 text-white font-semibold bg-purple-700 '>Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;