import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Blog from "../Pages/Shared/Blog/Blog";
import Faq from "../Pages/Shared/Faq/Faq";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                // loader: () => fetch('http://localhost:5000/news')
            },
            {
                path:'/category/:id',
                element:<Category></Category>
                // loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/courses',
                element:<Courses></Courses>
                // loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }

        ]
    }
])