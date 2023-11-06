import axios from "axios"
import { useEffect, useState } from "react"
import URL from "../../../../url/URL"
import Employee from "./Employee"


const Employees = () => {
    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        axios.get(`${URL}/employee`)
        .then(res=>setEmployees(res.data))
    },[])
    
  return (
    <div className="flex justify-center mb-myMargin px-xPadding2 md:px-xPadding">
        <div>
            <div>
                <h1 className="text-3xl font-bold mb-titleMargin text-center">Employee History</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {
                    employees?.map(employee=> <Employee key={employee._id} employee={employee}/>)
                }
            </div>
            </div>
    </div>
  )
}

export default Employees