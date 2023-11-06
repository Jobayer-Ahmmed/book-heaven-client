import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import URL from "../../../../url/URL"
import Category from "./Category"


const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        axios.get(`${URL}/category`)
        .then(res=>{
            setCategories(res.data)
        })
    },[])

  return (
    <div className=" px-xPadding2 md:px-xPadding my-myMargin">
        <div>
            <h1 className="text-3xl font-bold mb-titleMargin text-center">Categorical Book Shelves</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
                {
                    categories.map(Acategory=><Category key={Acategory._id} Acategory={Acategory}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default Categories