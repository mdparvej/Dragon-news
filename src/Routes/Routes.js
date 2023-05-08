import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Catagory/Category/Category";
import News from "../Pages/News/News/News";
import Login from "../Pages/LoginResister/Login/Login/Login";
import Resister from "../Pages/LoginResister/Login/Resister/Resister";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditons from "../Pages/Others/TermsAndConditons";
import Profile from "../Pages/Others/Profile/Profile";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/resister',
                element: <Resister></Resister>
            },
            {
                path:'/terms',
                element: <TermsAndConditons></TermsAndConditons>
            },
            {
                path:'/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])