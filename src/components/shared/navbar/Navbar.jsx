import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo/bookhaven.png"
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyContext } from "../../../contextApi/MyAuthProvider";


const Navbar = () => {
  // const { myUser, myLogOut } = useContext(MyContext);
  // const email = myUser?.email
  // console.log(email)
  const [theme, setTheme] = useState("light")
  
  const navlinks = <>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/addBook">Add Book</NavLink>
            </li>
            <li>
              <NavLink to="/allBooks">All Books</NavLink>
            </li>
            <li>
              <NavLink to="/borrowedBooks">Borrowed Books</NavLink>
            </li>
  </>

  const handleToggle=e=>{
    if(e.target.checked){
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
  }
  useEffect(()=>{
    localStorage.setItem("theme", theme)
    const localTheme = localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme",localTheme)
  },[theme])
  
  // const handleLogout = () => {
  //   myLogOut()
  //     .then(() =>{
  //       toast.success("You are successfully logout")
  //     })
  //     .catch((err) => console.log(err.message));
  // };
  return (
    <div className="navbar bg-base-100 px-xPadding2 md:px-xPadding">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
          {navlinks}
          </ul>
        </div>
        {/* for logo */}
        <div>
          <span className="">
            <img src={logo} className=" " />
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navlinks}
        </ul>
      </div>
{/* here will be test */}

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
  );
};

export default Navbar;
