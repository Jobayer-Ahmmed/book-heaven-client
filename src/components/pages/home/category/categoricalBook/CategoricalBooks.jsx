import { useLoaderData, useParams } from "react-router-dom"
import SingleBook from "../../../allBooks/SingleBook"


const CategoricalBooks = () => {
  const {category} = useParams()
  console.log(category)
  const data = useLoaderData()
  const books = data.data
  console.log(books)
  return (
    <div className="flex justify-center px-xPadding my-myMargin">
        <div>
            <h1 className="text-3xl font-bold mb-titleMargin text-center">Books of {category} </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {
                    books?.map(book=> <SingleBook key={book._id} book={book}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default CategoricalBooks