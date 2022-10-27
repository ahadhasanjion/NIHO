import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Course from "../Pages/Course/Course";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Blog from "../Pages/Shared/Blog/Blog";
import Faq from "../Pages/Shared/Faq/Faq";
import Premium from "../Pages/Premium/Premium";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Error from "../Error/Error";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/courses',
                element:<Courses></Courses> ,
                loader: () => fetch('https://niho-server.vercel.app/course')
            },
            {
                path:'/course/:id',
                element:<Course></Course>,
                loader: ({params}) => fetch(`https://niho-server.vercel.app/course/${params.id}`)
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/premium/:id',
                element:<PrivateRoute><Premium></Premium></PrivateRoute>,
                 loader: ({params}) => fetch(`https://niho-server.vercel.app/premium/${params.id}`)
            }
        ]
    }
])