import React from 'react';
import Body from './body';
import Title from './section/title';
import { useState } from 'react';
import Education from './section/Education';
import Experience from './section/experience';
import Nav from './section/Nav';



const Section = () => {

  const [activeSection, setActiveSection] = useState('about');
  const [generalInfo, setGeneralInfo] = useState({
    firstname: 'Migeen',
    lastname: 'Magar',
    city : 'New Baneshwor',
    contact: '9867717893',
    email: 'migeen999@gmail.com',
    address: 'Kathmandu',
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

  //Handle Navigation Clicks
  const handleNavClick = (section) => {
    setActiveSection(section);
  }

  return (
    <div className='h-full w-full bg-gray-100 flex flex-row'>
      <div className='bg-white-200 h-full w-2/5 flex'>
      <Nav onNavigate={handleNavClick} />
        <Body generalInfo={generalInfo} onInputChange={handleInputChange} onNavigate={handleNavClick} activeSection={activeSection} />
      </div>
      <div className='bg-gray-300 h-screen w-3/5 flex flex-col items-center'>
        <Title generalInfo={generalInfo} />
        <Education generalInfo={generalInfo}/>
        <Experience generalInfo={generalInfo}/>
      </div>
    </div>
  );
}

export default Section