import { useContext, useEffect, useState} from "react"
import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { MyContext } from "../../../contextApi/MyAuthProvider"
import axios from "axios"
import URL from "../../../url/URL"
import moment from 'moment'
import Rating from "react-rating"
import { BsStar, BsStarFill } from "react-icons/bs"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const BookDetails = () => {
    const [bookNames, setBookNames] = useState([])
    const [isBoolean, setIsBoolean] = useState(false)
    const {myUser} = useContext(MyContext)
    const {data} = useLoaderData()
    const navigate = useNavigate()
    const borrowedDate = moment().format("YYYY-M-DD")


    const {_id,image, name, author_name, category, rating, quantity, description} = data
    console.log(quantity)
    const email = myUser?.email
    const username = myUser?.displayName
    const [available, setAvailable] = useState(quantity-1)
    

    useEffect(()=>{
      axios.get(`${URL}/borrowBook/${email}`)
      .then((res)=>setBookNames(res.data))
    },[])
    
    const borrowedBook = bookNames.find(book=>book.name === name)
    let checkBook = borrowedBook?.name

    useEffect(()=>{
      if(quantity){
        setIsBoolean(false)
        console.log("if is working")
      }
      else{
        setIsBoolean(true)
        console.log("else is working")
      }
    },[quantity, available])

    const handleBorrow=(e)=>{
        e.preventDefault()

          const form = new FormData(e.currentTarget)
          const returnDate = form.get("date")
          console.log(returnDate)


  
          axios.post(`${URL}/borrow`,{
              id:_id,
              username,
              email,
              name,
              quantity:quantity-1,
              category,
              image,
              borrowedDate,
              returnDate
          })
          .then(()=>{
            navigate("/borrow")
            toast.success("Please, return the book on time")
          })

          axios.put(`${URL}/books/${_id}`, {
            myQuantity:available
          })
          .then((res)=>{
            console.log(res)
            console.log("put successfull")
          })
          .catch((err)=>{
            console.log(err)
          }
          )


    }




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
            <Rating
              initialRating={rating}
              emptySymbol={<BsStar/>}
              fullSymbol={<BsStarFill/>}
              readonly
            />
        </div>
    </div>
    <div>
        <div>
            <h4 className="text-xl  font-medium">The Book About on </h4>
            <p className="text-xl">{description}</p>
            <p className="text-xl  font-medium my-10 ">Available Book : {quantity}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 mt-titleMargin">
            <button onClick={()=>document.getElementById('my_modal_5').showModal()} to={`/details/${name}`} className={` text-center text-white text-lg font-semibold bg-btnColor px-8 py-2 active:bg-hoverColor hover:rounded-xl mt-2`} disabled={isBoolean}>Borrow</button>
            <Link to={`/read/${_id}`} className="text-center text-white text-lg font-semibold bg-btnColor px-8 py-2 active:bg-hoverColor hover:rounded-xl mt-2">Read</Link>
        </div>
    </div>


    {/* modal start */}
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">

    {
      checkBook? 'You have alredy borrowed this book':
      <form onSubmit={handleBorrow}>
        <label>Username : </label>
        <input type="text" value={username} readOnly/><br />
        <label>Email : </label>
        <input  className="my-2"  type="email" value={email} readOnly /><br />
        <label>Return Date : </label>
        <input   className="mb-4"   type="date" name="date" required/> <br />
        <input className="text-center text-white text-lg font-semibold bg-btnColor px-8 py-2 hover:bg-hoverColor active:font-bold mt-2" type="submit" value="Borrow Now" />
    </form>
    }

    <div className="modal-action">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    </div>
  </div>
</dialog>
{/* modal end */}

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

export default BookDetails