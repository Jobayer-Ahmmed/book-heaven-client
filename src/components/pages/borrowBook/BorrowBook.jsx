import PropTypes from 'prop-types';

const BorrowBook = ({book}) => {
    const {image, name, category, borrowedDate, returnDate} = book

  return (
    <div className='w-full  rounded-lg bg-gray-300 p-5 flex flex-col lg:flex-row justify-between items-center lg:gap-32 md:gap-10 mt-titleMargin'>
        <div className='flex justify-between items-center  md:flex-row flex-col gap-10'>
            <div className=''>
                <img className='w-[170px] h-[230px]' src={image} alt="" />
            </div>
            <div className='flex flex-col lg:flex-row lg:flex-1 justify-between lg:items-center lg:gap-32 md:gap-10'>
                <div>
                    <p className='text-xl'>Book Name</p>
                    <p className='text-xl font-bold mb-5'>{name}</p>
                    <p className='text-xl'>Book Type</p>
                    <p className='text-xl font-bold' >{category}</p>
                </div>
                <div>
                    <p className='text-xl'>Borrowed Date</p>
                    <p className='text-xl font-bold mb-5'>{borrowedDate}</p>
                    <p className='text-xl'>Return Date</p>
                    <p className='text-xl font-bold'>{returnDate}</p>
                </div>
            </div>
        </div>
        <div>
                <button   className="mt-4 rounded-sm px-12  py-2 text-2xl text-white tracking-wider font-medium bg-btnColor  text-textColor cursor-pointer hover:bg-hoverColor active:font-bold">Return The Book</button>
        </div>
    </div>
  )
}

BorrowBook.propTypes = {
    book:PropTypes.object
}

export default BorrowBook