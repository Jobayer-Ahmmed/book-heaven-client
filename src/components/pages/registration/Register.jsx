import { useContext, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import myAuth from "../../../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import URL from "../../../url/URL";
import { MyContext } from "../../../contextApi/MyAuthProvider";



const Register = () => {
    const {createMyUser, googleLogin} = useContext(MyContext)
    const [message, setMessage]  = useState('')

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
        const data = {email}

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
                      fetch(`${URL}/user`,{
                        method: "POST",
                        headers:{"content-type":"application/json"},
                        body:JSON.stringify(data)
                      })
                      .then(res=>res.json())
                      .then(()=>{
                        toast.success("Congratulations! Registration successfull")
                        forFormReset.reset()
                      })
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
        <div className="bg-textColor py-10 px-4 rounded-lg text-center">
            <h1  className=" text-2xl font-medium my-mtMargin">Registration Now</h1>
            <h3  className="text-red-500 text-xl my-mtMargin">{message}</h3>
            <form onSubmit={handleRegsiter}>
                <input className="w-4/5 h-10 pl-5 rounded" type="text" placeholder="Name" name="name" required/><br />
                <input className="my-2 w-4/5 h-10 pl-5 rounded" type="text" placeholder="Email" name="email" required /> <br />
                <input className="w-4/5 h-10 pl-5 rounded" type="password" placeholder="Password" name="password" required/> <br />
                <input className="my-2 w-4/5 h-10 pl-5 rounded" type="text" placeholder="URL of Your Photo" name="photo" required/><br/>
                <input  className="mt-4 rounded-sm px-16  py-2 text-lg font-bold bg-[#DF6242] text-textColor cursor-pointer active:text-xl" type="submit" value="Register" />
            </form>
            <p  className=" my-mtMargin">Already have an account? <Link to="/login" className="underline text-green-600">Login Now!</Link></p>
            <p className="underline cursor-pointer" onClick={handleGoogle}>Login with Google</p>
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