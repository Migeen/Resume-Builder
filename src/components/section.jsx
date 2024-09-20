import React from 'react';
import Heading from './heading';
import Body from './body';
import Title from './section/title';
import { useState } from 'react';
import Education from './section/Education';
import Experience from './section/experience';



const Section = () => {

  const [generalInfo, setGeneralInfo] = useState({
    firstname: 'Migeen',
    lastname: 'Magar',
    contact: '9867717893',
    email: 'migeen999@gmail.com',
    address: 'New Baneshwor, Kathmandu',
    school: 'Purbanchal University',
    degree: 'Bachelors in Information Technology',
    startDate: '03-12-2020',
    endDate: '03-15-2024',
    Slocation: 'Putalisadak, Kathmandu',
    company: 'Leapfrog Technology',
    position: 'Senior Backend Engineer',
    jobstartDate: '14-10-2023',
    jobendDate: 'Current',
    Jlocation: 'Dillibazar, Kathmandu',
    Description: 'Working at leapfrog technology was always a dream for me. The work culture and the environment here at leapfrog truly inspires us and gets us motivated. ',
  });
  


  // Handle input change for all fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGeneralInfo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  return (
    <div className='h-full w-full bg-gray-100 flex flex-row p-10 gap-10'>
      <div className='bg-white-200 h-full w-2/4 flex flex-col'>
        <Heading />
        <Body generalInfo={generalInfo} onInputChange={handleInputChange} />
      </div>
      <div className='bg-green-300 h-screen w-full flex flex-col items-center'>
        <Title generalInfo={generalInfo} />
        <Education generalInfo={generalInfo}/>
        <Experience generalInfo={generalInfo}/>
      </div>
    </div>
  );
}

export default Section