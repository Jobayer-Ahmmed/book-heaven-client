import { Link } from "react-router-dom"
import img from "../../../assets/404.png"

const ErrorPage = () => {
    
  return (
    <div className="flex justify-center my-myMargin">
        <div>
            <img src={img} alt="" className="mb-12" />
            <div className="flex justify-center">
            <Link to="/" className="text-btnColor text-xl px-10 py-2 border-[2px] border-btnColor">Go Home</Link>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage