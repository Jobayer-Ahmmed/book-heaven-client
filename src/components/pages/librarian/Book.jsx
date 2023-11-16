import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import {BsStar} from "react-icons/bs"
import {BsStarFill} from "react-icons/bs"


const Book = ({book, handleDelete}) => {
    const {_id, image, name, author_name, category, rating} = book


    
  return (
    <div className='flex flex-col justify-between  bg-base-300 p-4'>
        <img className='w-full h-96' src={image} alt="" />
        <div>
            <h4 className='text-2xl font-bold mt-6'>{name}</h4>
            <p className='font-medium mb-4'>{author_name}</p>
        </div>
        <h3 className='text-xl font-medium'>{category}</h3>
        <Rating
              initialRating={rating}
              emptySymbol={<BsStar/>}
              fullSymbol={<BsStarFill/>}
              readonly
            />

        <Link to={`/edit/${_id}`} className="text-center text-white text-lg font-semibold bg-btnColor px-8 py-2 hover:bg-hoverColor active:font-bold mt-2">Edit Book</Link>
        <Link onClick={()=>handleDelete(_id)} className="text-center text-white text-lg font-semibold bg-btnColor px-8 py-2 hover:bg-hoverColor active:font-bold mt-2">Delete Book</Link>
    </div>
  )
}

Book.propTypes = {
    book:PropTypes.object,
    handleDelete:PropTypes.func
}

export default Book