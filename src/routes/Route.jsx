import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/pages/home/Home";
import Register from "../components/pages/registration/Register";
import Login from "../components/pages/login/Login";
import AllBooks from "../components/pages/allBooks/AllBooks";
import axios from "axios";
import URL from "../url/URL";
import CategoricalBooks from "../components/pages/home/category/categoricalBook/CategoricalBooks";
import AddBook from "../components/pages/addBook/AddBook";
import BookDetails from "../components/shared/bookDetails/BookDetails";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/allBooks",
                element:<AllBooks/>,
                // loader: ()=> axios.get(`${URL}/books`)
            },
            {
                path:"books/:category",
                element:<CategoricalBooks/>,
                loader:({params})=> axios.get(`${URL}/books/${params.category}`)
            },
            {
                path:"/addBook",
                element:<AddBook/>
            },
            {
                path:"/details/:name",
                element:<BookDetails/>,
                loader:({params})=> axios.get(`${URL}/details/${params.name}`)
            }
        ]
    }
])

export default router