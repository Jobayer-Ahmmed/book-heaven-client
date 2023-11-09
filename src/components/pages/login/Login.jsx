import { useContext, useState,useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../../../contextApi/MyAuthProvider";
import axios from "axios";
import URL from "../../../url/URL";



const Login = () => {
    const { myLogin, googleLogin} = useContext(MyContext)
    const [message, setMessage] = useState('')
    const [emails, setEmails] = useState([])
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`${URL}/user`)
        .then(res=>setEmails(res.data))
    },[])
    console.log(emails)
    const handleGoogle=()=>{
        googleLogin()
        .then((res)=>{
          console.log(res)
          toast.success("You have logged with Google successfully")
        })
        .catch(err=>console.log(err.message))
    }

    const handleLogin=(e)=>{
        e.preventDefault()
        const myForm = new FormData(e.currentTarget)
        const email = myForm.get("email")
        const password = myForm.get("password")

        const findEmail = emails.find(emailObj=> emailObj.email===email)
        const getEmail = findEmail?.email

        setMessage('')

        if(getEmail){
            myLogin(email, password)
            .then(()=>{


                const aUser = {email}
                axios.post(`${URL}/jwt`, aUser, {withCredentials: true})
                .then((res)=>{
                    console.log(res.data)
                    toast.success("Login Successfull")
                    navigate(location?.state ? location?.state: '/')
                })

            })
            .catch(()=>setMessage("Invalid password"))
        }
        else{
            setMessage("Invalid Email")
        }

    }

  return (
    <div className="w-4/5 md:w-3/5 mx-auto my-myMargin">
        <div className="bg-gray-300 py-10 px-4 rounded-lg text-center">
            <h1  className=" text-4xl font-medium my-xPadding2">Login Now</h1>
            <h3  className="text-red-500 text-xl my-mtMargin">{message}</h3>
            <form onSubmit={handleLogin}>
                <input className="my-2 w-4/5 h-10 pl-5 rounded" type="email" placeholder="Email" name="email" required /> <br />
                <input className="w-4/5 h-10 pl-5 rounded" type="password" placeholder="Password" name="password" required/> <br />
                <input  className="mt-4 rounded-sm px-12  py-2 text-2xl text-white tracking-wider font-medium bg-btnColor  text-textColor cursor-pointer hover:bg-hoverColor active:font-bold" type="submit" value="Login" />
            </form>
            <p  className="mt-10 mb-3 text-lg">Don&apos;t have an account? <Link to="/register" className="underline text-green-600">Register Now!</Link></p>
            <p className="underline cursor-pointer text-lg" onClick={handleGoogle}>Login with Google</p>
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

export default Login