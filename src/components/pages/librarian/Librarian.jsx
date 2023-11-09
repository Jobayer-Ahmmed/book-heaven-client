

import { useLoaderData } from "react-router-dom"
import SingleBook from "../allBooks/SingleBook"


const Librarian = () => {
    const data = useLoaderData()
    const books = data.data


  return (
    <div className="flex justify-center px-xPadding2 md:px-xPadding my-myMargin">
        <div>
            <h1 className="text-3xl font-bold mb-titleMargin text-center">Books in Library are_</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {
                    books?.map(book=> <SingleBook key={book._id} book={book}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default Librarian