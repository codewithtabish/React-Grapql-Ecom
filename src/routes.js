import { SingleFieldSubscriptionsRule } from "graphql";
import { baseUrl } from "./helpers/BaseUrl";
import AddToCart from "./pages/AddToCart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SingleProduct from "./pages/SingleProduct";
import CreateBlog from "./pages/CreateBlog";



export const routeArray=[
    {path:"/",element:<Home/>},
    {path:"/single/:pid", element:<SingleProduct/>},
    {path:"/login",element:<Login/>},
    {path:"/signup",element:<SignUp/>},
    {path:"/cart",element:<AddToCart/>},
    {path:"/category/:cid",element:<AddToCart/>},
    {path:"/create",element:<CreateBlog/>}

]
// baseUrl