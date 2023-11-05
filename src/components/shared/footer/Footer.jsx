import { Link } from "react-router-dom"
import logo from "../../../assets/logo/bookhaven.png"
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"

const Footer = () => {
  return (
<footer className="w-full p-xPadding bg-base-300">
  <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
      <img src={logo} alt=""  />
      <ul>
        <h3 className="text-xl font-bold mb-3">Usefull Links</h3>
              <li className="hover:underline text-lg mb-2"><Link to="/addBook">Add Book</Link></li>
              <li className="hover:underline text-lg mb-2"><Link to="/allBooks">All Books</Link></li>
              <li className="hover:underline text-lg"><Link to="/borrowedBooks">Borrowed Books</Link></li>
      </ul>
      <div>
        <h3 className="text-xl font-bold mb-6">Find Us On</h3>
        <div className="flex justify-start gap-4 text-3xl font-bold">
          <Link><BsFacebook/></Link>
          <Link><BsTwitter/></Link>
          <Link><AiFillInstagram/></Link>
        </div>
      </div>
    </div>
  </div>
  <p className="text-center mt-myMargin">Copyright © 2023 - All right reserved by library</p>
</footer>
  )
}

export default Footer