import { useContext, useState } from "react"
import { BsStar, BsStarFill } from "react-icons/bs"
import Rating from "react-rating"
import { Link, useLoaderData } from "react-router-dom"
import Swal from 'sweetalert2'
import { MyContext } from "../../../contextApi/MyAuthProvider"
import axios from "axios"
import URL from "../../../url/URL"



const BookDetails = () => {
    const {myUser} = useContext(MyContext)
    const {data} = useLoaderData()
    const [date, setDate] = useState(null)

    const {image, name, author_name, category, rating} = data
    const {email, displayName} = myUser

    
    const handleBorrow=()=>{
        Swal.fire({
            title: "When will you return the book? ",
            input: "date",
            inputAttributes: {
              autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Borrow The Book",
            showLoaderOnConfirm: true,
            preConfirm: (returnDate)=> setDate(returnDate)
          });

    }

    if(date){
        axios.post(`${URL}/borrow`)
    }
    setDate(null)
  return (
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-xPadding2 md:px-xPadding my-myMargin">
    <div className='flex flex-col items-center md:items-start'>
        <div className="w-[310px]  bg-base-300 p-4">
            <img className='w-[300px] h-[450px]' src={image} alt="" />
        </div>
        <div>
            <h4 className='text-2xl font-bold mt-6'><span className="text-gray-700">Book Name : </span>{name}</h4>
            <p className='text-xl font-medium mb-4'><span className="text-gray-700">Author : </span>{author_name}</p>
        </div>
        <div className="w-full">
            <h3 className='text-xl font-medium'><span className="text-gray-700">Type : </span>{category}</h3>
            <div className="flex text-xl font-medium">
                <p className="text-gray-700">Rating : </p>
                <Rating
                  initialRating={rating}
                  emptySymbol={<BsStar/>}
                  fullSymbol={<BsStarFill/>}
                  readonly
                />
            </div>
        </div>
    </div>
    <div>
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor voluptatum consectetur. Ipsa dignissimos, error est perspiciatis officiis non alias esse quis reprehenderit. Incidunt nisi perferendis dolores assumenda ad laudantium.
            </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 mt-titleMargin">
            <Link onClick={handleBorrow} to={`/details/${name}`} className="text-center text-white text-lg font-semibold bg-btnColor px-8 py-2 active:bg-hoverColor hover:rounded-xl mt-2">Borrow</Link>
            <Link to={`/details/${name}`} className="text-center text-white text-lg font-semibold bg-btnColor px-8 py-2 active:bg-hoverColor hover:rounded-xl mt-2">Read</Link>
        </div>
    </div>
</div>
  )
}

export default BookDetails