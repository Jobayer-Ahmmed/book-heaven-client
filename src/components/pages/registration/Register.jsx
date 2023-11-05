import { useContext, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../../contextApi/MyAuthProvider";
import myAuth from "../../../firebase/firebase.config";
import axios from "axios";
import URL from "../../../url/URL";





const Register = () => {
    const {createMyUser, googleLogin} = useContext(MyContext)
    const [message, setMessage]  = useState('')
    const navigate = useNavigate()

    const handleGoogle=()=>{
      googleLogin()
      .then((res)=>{
        console.log(res)
        toast.success("You have logged with Google successfully")
      })
      .catch(err=>console.log(err.message))
  }

    const handleRegsiter = e=>{
        e.preventDefault()
        const forFormReset = e.target
        const form  = new FormData(e.currentTarget)
        const email =form.get("email")
        const password = form.get("password")
        const name = form.get("name")
        const photo = form.get("photo")


        setMessage('')
        if(password.length>=6){
            if(/(?=.*[A-Z])/.test(password)){
              if(/(?=.*[@#$%^&*!])/.test(password)){
                createMyUser(email, password)
                .then(()=>{
                    updateProfile(myAuth.currentUser, {
                        displayName: name, 
                        photoURL: photo
                        })
                    .then(() => {
                        axios.post(`${URL}/user`,{
                          email
                        })
                        .then(()=>{
                          toast.success("Congratulations! Registration successfull")
                          forFormReset.reset()
                          navigate("/")
                        })
                        .catch(err=>console.log(err))
                      })
                    .catch(err=>console.log(err.message))
                })
                .catch(()=>setMessage("Email is aready used"))
    
              }
              else{
                setMessage("Password must have at least one special character")             
              }
    
            }
            else{
              setMessage("Password must have at least one uppercase")          
            }
    
        }
        else{
          setMessage("Password must be 6 characters or, more")
        }

}



  return (
    <div className="w-4/5 md:w-3/5 mx-auto my-myMargin">
        <div className="bg-gray-300 py-10 px-4 rounded-lg text-center">
            <h1  className=" text-4xl font-medium my-xPadding2">Registration Now</h1>
            <h3  className="text-red-500 text-xl my-mtMargin">{message}</h3>
            <form onSubmit={handleRegsiter}>
                <input className="w-4/5 h-10 pl-5 rounded" type="text" placeholder="Name" name="name" required/><br />
                <input className="my-2 w-4/5 h-10 pl-5 rounded" type="text" placeholder="Email" name="email" required /> <br />
                <input className="w-4/5 h-10 pl-5 rounded" type="password" placeholder="Password" name="password" required/> <br />
                <input className="my-2 w-4/5 h-10 pl-5 rounded" type="text" placeholder="URL of Your Photo" name="photo" required/><br/>
                <input  className="mt-4 rounded-sm px-12  py-2 text-2xl text-white tracking-wider font-medium bg-btnColor  text-textColor cursor-pointer hover:bg-hoverColor active:font-bold" type="submit" value="Register" />
            </form>
            <p  className="mt-10 mb-3 text-lg">Already have an account? <Link to="/login" className="underline text-green-600">Login Now!</Link></p>
            <p className="underline cursor-pointer text-lg"  onClick={handleGoogle}>or, Login with Google</p>
           
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

export default Register