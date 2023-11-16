import { useLoaderData, useParams } from "react-router-dom"
import CategoricalBook from "./CategoricalBook"



const CategoricalBooks = () => {
  const {category} = useParams()
  const data = useLoaderData()
  const myBooks = data.data

  return (
    <div className="flex justify-center px-xPadding2 md:px-xPadding my-myMargin">
        <div>
            <h1 className="text-3xl font-bold mb-titleMargin text-center">Books of {category} </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {
                    myBooks?.map(book=> <CategoricalBook key={book._id} book={book}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default CategoricalBooks