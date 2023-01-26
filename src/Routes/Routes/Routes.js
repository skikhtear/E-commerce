
import Home from "../../Components/Pages/Home/Home";
import { productsAndCartLoader } from "../../Components/Pages/loader/productsAndCartLoader";
import Login from "../../Components/Pages/Login/Login";
import MyCart from "../../Components/Pages/MyCart/MyCart";
import Checkout from "../../Components/Pages/Shipping/Checkout";
import SignUp from "../../Components/Pages/SignUp/SignUp";
import Main from "../../Layout/Main";

import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('product.json'),
                element: <Home></Home>
            },
            {
                path: '/mycart',
                loader: productsAndCartLoader,
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute> 
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    // {
    //     path: '/dashboard',
    //     element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    //     children: [
    //         {
    //             path: '/dashboard/myposts',
    //             element: <SellerRoute><MyPosts></MyPosts></SellerRoute>
    //         },
    //         {
    //             path: '/dashboard/sellpost',
    //             element: <SellerRoute><SalePost></SalePost></SellerRoute>
    //         },
    //         {
    //             path: '/dashboard/allposts',
    //             element: <AdminRoute><AllPosts></AllPosts></AdminRoute>

    //         },
    //         {
    //             path: '/dashboard/allseller',
    //             element: <AdminRoute><AllSeller></AllSeller></AdminRoute>

    //         },
    //         {
    //             path: '/dashboard/allbuyer',
    //             element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>

    //         },
    //         {
    //             path: '/dashboard/mybookings',
    //             element: <MyBookings></MyBookings>
    //         }
    //     ]

    // },
   
])
export default router;