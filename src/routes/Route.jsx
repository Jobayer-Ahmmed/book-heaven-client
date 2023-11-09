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
import BorrowBooks from "../components/pages/borrowBook/BorrowBooks";
import ErrorPage from "../components/pages/errorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Read from "../components/shared/bookDetails/Read";
import Librarian from "../components/pages/librarian/Librarian";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<ErrorPage/>,
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
                element:<PrivateRoute><AllBooks/></PrivateRoute>,
                loader: async()=> axios.get(`${URL}/books`, {
                    withCredentials:true
                })
            },
            {
                path:"books/:category",
                element:<PrivateRoute><CategoricalBooks/></PrivateRoute>,
                loader: async({params})=> axios.get(`${URL}/books/${params.category}`)
            },
            {
                path:"/addBook",
                element:<PrivateRoute><AddBook/></PrivateRoute>
            },
            {
                path:"/details/:name",
                element:<PrivateRoute><BookDetails/></PrivateRoute>,
                loader: async({params})=> axios.get(`${URL}/details/${params.name}`)
            },
            {
                path:"/borrow",
                element:<PrivateRoute><BorrowBooks/></PrivateRoute>
            },
            {
                path:"/read/:id",
                element:<PrivateRoute><Read/></PrivateRoute>,
                loader: async ({params})=> axios.get(`${URL}/read/${params.id}`)
            },
            {
                path:"/librarian",
                element:<PrivateRoute><Librarian/></PrivateRoute>,
                loader: async()=> axios.get(`${URL}/librarian`)
            }
    

              
        ]
    }
])

export default router