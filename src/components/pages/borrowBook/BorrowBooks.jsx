import { useLoaderData } from "react-router-dom"
import BorrowBook from "./BorrowBook"


const BorrowBooks = () => {
    const {data} = useLoaderData()

  return (
    <div className="flex justify-center px-xPadding2 md:px-xPadding my-myMargin">
        <div>
            <h1 className="text-3xl font-bold mb-titleMargin text-center">You have borrowed below book(s)</h1>
            <div>
                {
                    data?.map(book=><BorrowBook key={book._id} book={book}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default BorrowBooks