import React from 'react'
import General from './section1/general'

const Body = () => {

  const [generalInfo, setGeneralInfo] = useState({
    firstname: '',
    lastname: '',
    contact: '',
    email: '',
    address: '',
  });


  // Handle input change for all fields
  const handleInputChange = (event) => {
    const {name , value } =  event.target;
    setGeneralInfo((prevState) => ({
      ...prevState,
      [name]:value
    }));
  }

  return (
    <div className='w-full h-full rounded-md bg-gray-100 flex flex-col items-center border-y-4 border-violet-500 shadow-lg'>
      <General generalInfo={generalInfo} onInputChange={handleInputChange} />
    </div>
  )
}

export default Body