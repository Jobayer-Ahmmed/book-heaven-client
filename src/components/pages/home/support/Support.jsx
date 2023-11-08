import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Support = () => {
  const handleDonate =e=>{
    e.preventDefault()
    // const forFormReset = e.target
    // const form  = new FormData(e.currentTarget)
    // const email =form.get("email")
    // const password = form.get("password")
    // const name = form.get("name")
    // const photo = form.get("photo")

    toast.success("Thanks for your donation")
  }
  return (
    <div className=" px-xPadding2 md:px-xPadding my-myMargin">
        <div>
            <h1 className="text-3xl font-bold mb-titleMargin text-center">Support the Library</h1>
            <div>
                <p className='text-xl'>The library is not just a collection of books; it is a sanctuary of knowledge, a haven for the curious, and a bridge to a world of possibilities. It's a place where dreams take flight on the wings of imagination, where young minds are nourished, and where the stories of generations past continue to whisper their wisdom to those who listen. Supporting the library is not merely an act of generosity; it's an investment in the heart and soul of our community. It's an affirmation that education, exploration, and enlightenment are the cornerstones of a thriving society. Let us join hands to protect this beacon of wisdom, for in its silent shelves and bustling spaces, we find the keys to our collective future, and the beauty of boundless knowledge waiting to be discovered.</p>
                <p className="text-xl my-4">In the heart of our community lies a treasure trove of knowledge, inspiration, and transformation - our cherished library. It's a place where minds bloom and dreams take flight, where stories come to life, and where curiosity knows no bounds. But the magic of our library depends on your support. Your donation can be the spark that lights up a child's imagination, the key to unlocking new opportunities for a student, or the solace for a seeker of knowledge. Your generosity ensures that this sanctuary of wisdom thrives, empowering our community to learn, grow, and connect. Join us in preserving this vital hub of education and exploration, and be a part of the legacy that continues to enrich lives for generations to come. Your contribution is not just a gift to the library; it's an investment in a brighter, more enlightened future for all. Donate today, and help us write the next chapter in the incredible story of our library.</p>
            </div>
            <div className="flex justify-center mt-10 ">
                <form className="w-full bg-base-300 p-10" onSubmit={handleDonate}>
                  <input className="w-4/5 h-10 pl-5 rounded" type="text" placeholder="Name" name="name" /><br />
                  <input className="my-2 w-4/5 h-10 pl-5 rounded" type="address" placeholder="address" name="address"  /> <br />
                  <textarea  className="w-4/5 pl-5 rounded" name="message" placeholder="Give  a message" rows="10"></textarea> <br />
                  <input className="mt-2 w-4/5 h-10 pl-5 rounded" type="number" placeholder="Credit or Debit Card Number" name="card" required/><br/>
                  <input className="my-2 w-4/5 h-10 pl-5 rounded" type="number" placeholder="Amount ($)" name="money" required/><br/>
                  <input  className="mt-4 rounded-sm px-12  py-2 text-2xl text-white tracking-wider font-medium bg-btnColor  text-textColor cursor-pointer hover:bg-hoverColor active:font-bold" type="submit" value="Donate Now" />
                </form>
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

export default Support