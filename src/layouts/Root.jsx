import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/navbar/Navbar"


const Root = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Root