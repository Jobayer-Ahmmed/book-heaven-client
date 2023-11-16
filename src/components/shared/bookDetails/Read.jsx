import { useLoaderData } from "react-router-dom"


const Read = () => {
    const {data} = useLoaderData()
    console.log(data.read)
    const { read} =data
    
  return (
    <div className=" px-xPadding2 md:px-xPadding my-myMargin">
        <div>
            <p>
            {read}
            </p>
    
        </div>
    </div>
  )
}

export default Read

