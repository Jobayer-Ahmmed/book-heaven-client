
import { useContext, useEffect, useState } from "react"
import { MyContext } from "../../../contextApi/MyAuthProvider"
import axios from "axios"
import URL from "../../../url/URL"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const BorrowBooks = () => {
    // const {data} = useLoaderData()
    const [books, setBooks] = useState([])
    const { myUser} = useContext(MyContext);
    const email = myUser?.email


    

    const getBorrowData =()=> {
        axios.get(`${URL}/borrow/${email}`)
        .then((res)=>setBooks(res.data))
    }


    const handleReturn = (_id, id, quantity)=>{
        axios.delete(`${URL}/borrow/${_id}`)
        .then(()=>{
            toast.success("Thanks for the returning book")
            getBorrowData()
        })

        axios.put(`${URL}/books/${id}`, {
            myQuantity: quantity+1
          })
      
    }

    useEffect(()=>{
        getBorrowData()
    },[email])


  return (
    <div className="w-full flex justify-center px-xPadding2 md:px-xPadding my-myMargin">
        <div className="w-full">
            <h1 className="text-3xl font-bold mb-titleMargin text-center">You have borrowed Book(s) : {books.length}</h1>
            <div className="w-full">
                {
                    books?.map(book=>{
                        const {_id, id, image, name, quantity, category, borrowedDate, returnDate} = book
                        return(
    <div key={_id} className='w-full  rounded-lg bg-gray-300 p-5 flex flex-col lg:flex-row justify-between items-center lg:gap-32 md:gap-10 mt-titleMargin'>
        <div className='flex justify-between items-center  md:flex-row flex-col gap-10'>
            <div className=''>
                <img className='w-[170px] h-[230px]' src={image} alt="" />
            </div>
            <div className='flex flex-col lg:flex-row lg:flex-1 justify-between lg:items-center lg:gap-32 md:gap-10'>
                <div>
                    <p className='text-xl'>Book Name</p>
                    <p className='text-xl font-bold mb-5'>{name}</p>
                    <p className='text-xl'>Book Type</p>
                    <p className='text-xl font-bold' >{category}</p>
                </div>
                <div>
                    <p className='text-xl'>Borrowed Date</p>
                    <p className='text-xl font-bold mb-5'>{borrowedDate}</p>
                    <p className='text-xl'>Return Date</p>
                    <p className='text-xl font-bold'>{returnDate}</p>
                </div>
            </div>
        </div>
        <div>
                <button onClick={()=>handleReturn(_id, id, quantity)}  className="mt-4 rounded-sm px-12  py-2 text-2xl text-white tracking-wider font-medium bg-btnColor  text-textColor cursor-pointer hover:bg-hoverColor active:font-bold">Return The Book</button>
        </div>
    </div>
                        )
                    })
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

export default BorrowBooks