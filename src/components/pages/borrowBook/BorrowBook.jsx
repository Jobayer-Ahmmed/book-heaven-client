import PropTypes from 'prop-types';

const BorrowBook = ({book}) => {
    const {image, name, category, borrowedDate, returnDate} = book

  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
        <div>
            <img src={image} alt="" />
        </div>
        <div className='flex flex-col lg:flex-row justify-center lg:items-center gap-10'>
            <div>
                <p>Book Name</p>
                <p>{name}</p>
                <p>Book Type</p>
                <p>{category}</p>
            </div>
            <div>
                <p>Borrowed Date</p>
                <p>{borrowedDate}</p>
                <p>Return Date</p>
                <p>{returnDate}</p>
            </div>
        </div>
    </div>
  )
}

BorrowBook.propTypes = {
    book:PropTypes.object
}

export default BorrowBook