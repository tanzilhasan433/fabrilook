import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Products from "../Pages/Products/Products";
import About from "../Pages/Home/About/About";
import Blog from "../Pages/Home/Blog/Blog";
import Tshirt from "../Pages/Home/Categories/Tshirt/Tshirt";
import Shirt from "../Pages/Home/Categories/Shirt/Shirt";
import Panjabi from "../Pages/Home/Categories/Panjabi/Panjabi";
import Trouser from "../Pages/Home/Categories/Trouser/Trouser";
import Shocks from "../Pages/Home/Categories/Shocks/Shocks";
import Pant from "../Pages/Home/Categories/Pant/Pant";
import UnderPant from "../Pages/Home/Categories/UnderPant/UnderPant";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'tshirt',
                element: <Tshirt></Tshirt>
            },
            {
                path: 'shirt',
                element: <Shirt></Shirt>
            },
            {
                path: 'panjabi',
                element: <Panjabi></Panjabi>
            },
            {
                path: 'trouser',
                element: <Trouser></Trouser>
            },
            {
                path: 'shocks',
                element: <Shocks></Shocks>
            },
            {
                path: 'pant',
                element: <Pant></Pant>
            },
            {
                path: 'underpant',
                element: <UnderPant></UnderPant>
            },
            {
                path: 'products',
                element: <Products></Products>
            }
        ]
    },
   
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);