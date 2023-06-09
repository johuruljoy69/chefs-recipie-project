import React from "react";

import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import ChefCart from "../pages/Home/ChefData/ChefCart";
import ChefLayout from "../layouts/ChefLayout";
import ChefDetails from "../pages/Home/ChefData/ChefDetails";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage";
import Recipes from "../pages/Home/ChefData/ChefRecipes/Recipes";


const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Navigate to='/home'></Navigate>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },

  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/chefs',
        element: <ChefCart></ChefCart>,
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },

    ]
  },
  {
    path: '/chefs',
    element: <ChefLayout></ChefLayout>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://b7a10-chef-recipe-hunter-server-side-johuruljoy69.vercel.app/chefs/${params.id}`)
      },
      
    ]
  }
]);

export default router;