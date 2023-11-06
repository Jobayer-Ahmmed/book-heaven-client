import PropTypes from 'prop-types';

const Employee = ({employee}) => {
    const {image, name, position, description} = employee
  return (
    <div>
        <div>
            <img src={image} className='w-40 h-40 border-[10px] border-gray-300 rounded-full' alt="employee image" />
        </div>
        <h3 className='text-xl font-bold mt-4'>{name}</h3>
        <p>{position}</p>
        <p className='text-xl my-4'>{description}</p>
    </div>
  )
}

Employee.propTypes = {
    employee:PropTypes.object
}
export default Employee