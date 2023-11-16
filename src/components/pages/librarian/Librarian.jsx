
import Book from "./Book"
import axios from "axios"
import URL from "../../../url/URL"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";


const Librarian = () => {
    const [books, setBooks] = useState([])
    const getData=()=>{
        axios.get(`${URL}/librarian`)
        .then((res)=>{
            setBooks(res.data)
            console.log("data get successfull")
        })
    }
    useEffect(()=>{
        getData()
    }, [])

    const handleDelete=(id)=>{
        axios.delete(`${URL}/delete/${id}`)
        .then(()=>{
            toast.success("Delete successfull")
            getData()
        })
    }

  return (
    <div className="flex justify-center px-xPadding2 md:px-xPadding my-myMargin">
        <div>
            <h1 className="text-3xl font-bold mb-titleMargin text-center">Books are in the Library</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {
                    books?.map(book=> <Book key={book._id} book={book} handleDelete={handleDelete}/>)
                }
            </div>
        </div>


        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    </div>
  )
}

export default Librarian