import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const Category = ({Acategory}) => {
    const {image, category} = Acategory
  return (
    <div className="w-full bg-gray-200 p-10">
        <img src={image} alt="" className="w-full h-60 md:h-72" />
        <h3 className="text-xl font-bold mt-10 mb-4 text-center">{category}</h3>
        <div className="flex justify-center">
            <Link to={`books/${category}`} className="text-white text-lg font-semibold bg-btnColor px-8 py-2 hover:bg-hoverColor active:font-bold">See These Books</Link>
        </div>
    </div>
  )
}
Category.propTypes={
    Acategory:PropTypes.object
}

export default Category