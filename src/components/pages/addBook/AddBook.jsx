import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import URL from '../../../url/URL';
import { useState } from 'react';


const AddBook = () => {
  const [category, setCategory] = useState('')


  const handleCategory=e=>{
    const val = e.target.value
    // console.log(val)

    if(val=== "Select A Category"){
      toast.warn("Please, Select A Category")
    }
    else{
      setCategory(val)
    }
  }
  const handleAdd = (e)=>{
    e.preventDefault()

    const forFormReset = e.target
    const form = new FormData(e.currentTarget)
    const image = form.get("image")
    const name = form.get("name")
    const quantity = form.get("quantity")
    const author_name = form.get("author_name")
    const description = form.get("description")
    let rating = form.get("rating")
    rating = Number(rating)
    
    const read = form.get("read")

    if(category.length)
      if(rating){
        {
          axios.post(`${URL}/books`,{
            image,
            name,
            quantity,
            author_name,
            category,
            description,
            rating,
            read
          })
          .then(()=>{
            toast.success("Book Adding Successull!")
            forFormReset.reset()
          })
        }
      }
      else{
        toast.warn("Enter Valid Rating Between 1 to 5")
      }
  }



  return (
    <div className="w-4/5 md:w-3/5 mx-auto my-myMargin">
        <div className="bg-gray-300 py-10 px-4 rounded-lg text-center">
            <h1  className=" text-4xl font-medium my-xPadding2">ADD Book Now</h1>
            <form onSubmit={handleAdd}>
                <input className="w-4/5 h-10 pl-5 rounded" type="text" placeholder="Book Name" name="name" required/><br />
                <input className="my-2 w-4/5 h-10 pl-5 rounded" type="text" placeholder="Author Name" name="author_name" required/><br />
                {/* <input className="w-4/5 h-10 pl-5 rounded" type="test" placeholder="Book Category" name="category" required /> <br /> */}
                <select  className="w-4/5 h-10 pl-5 rounded" onChange={handleCategory} required>
                  <option>Select A Category</option>
                  <option value="Science Fiction">Science Fiction</option>
                  <option value="Drama">Drama</option>
                  <option value="History">History</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Novel">Novel</option>
                </select><br />
  
                <input className="my-2 w-4/5 h-10 pl-5 rounded" type="number" placeholder="Quantity Of Book" name="quantity" required/> <br />
                <input className="w-4/5 h-10 pl-5 rounded" type="text" placeholder="Book Rating Out Of 5" name="rating" required/><br/>
                <input className="mt-2 w-4/5 h-10 pl-5 rounded" type="text" placeholder="Photo URL of The Book" name="image" required/><br/>
                <textarea className="my-2 w-4/5 pl-5 rounded" rows="8" type="text" placeholder="Book Description" name="description" required/><br/>
                <textarea className="w-4/5 pl-5 rounded" rows="15" type="text" placeholder="Write First Page Of The Book(as much as you want)" name="read" required/><br/>
                <input  className="mt-4 rounded-sm px-12  py-2 text-2xl text-white tracking-wider font-medium bg-btnColor  text-textColor cursor-pointer hover:bg-hoverColor active:font-bold" type="submit" value="Add Book Now" />
            </form>
           
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

export default AddBook