import { Link, useLoaderData } from "react-router-dom"


const Read = () => {
    const {data} = useLoaderData()
    console.log(data.read)
    const {_id, read} =data
    
  return (
    <div className=" px-xPadding2 md:px-xPadding my-myMargin">
        <div>
            <p>
            {read}
            </p>
          <Link to={`/pdf/${_id}`}>Make PDF The Page</Link>
        </div>
    </div>
  )
}

export default Read

