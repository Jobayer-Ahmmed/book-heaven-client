import { useLoaderData } from "react-router-dom"


const Read = () => {
    const {data} = useLoaderData()
    console.log(data.read)
    const myread = data.read
  return (
    <div className=" px-xPadding2 md:px-xPadding my-myMargin">
        <div>
            <p>
            {myread}
            </p>

        </div>
    </div>
  )
}

export default Read