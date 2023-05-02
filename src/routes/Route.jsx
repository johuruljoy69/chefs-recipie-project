import React from "react";

import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import ChefCart from "../pages/Home/ChefData/ChefCart";
import ChefLayout from "../layouts/ChefLayout";
import ChefDetails from "../pages/Home/ChefData/ChefDetails";


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>            
        },
        {
          path: '/chefs',
          element: <ChefCart></ChefCart>,
          
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        }
    ]
  },
  {
    path: 'chefs',
    element: <ChefLayout></ChefLayout>,
    children: [
      {
        path: ':id',
        element: <ChefDetails></ChefDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
      }
    ]
  }
]);

export default router;