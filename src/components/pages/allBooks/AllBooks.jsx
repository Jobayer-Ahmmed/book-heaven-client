// import { useLoaderData } from "react-router-dom"

import axios from "axios"
import { useEffect, useState } from "react"
import URL from "../../../url/URL"
import SingleBook from "./SingleBook"


const AllBooks = () => {
    // const books = useLoaderData()
    // console.log(books)
    const [books, setBooks] = useState([])

    useEffect(()=>{
        axios.get(`${URL}/books`)
        .then(res=>setBooks(res.data))
    },[])

  return (
    <div className="flex justify-center px-xPadding my-myMargin">
        <div>
            <h1 className="text-3xl font-bold mb-titleMargin text-center">All Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {
                    books?.map(book=> <SingleBook key={book._id} book={book}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default AllBooks