import React, { useState } from 'react';
import Social from './section/Social';
import { IoIosArrowForward } from 'react-icons/io';

const Body = ({ generalInfo, onInputChange, activeSection, onNavigate }) => {

  const [socials, setSocials] = useState([{ id: 1 }]); // Initial list with one Social component  const addSocial = () => {

  const addSocial = () => {
    setSocials((prev) => [...prev, { id: prev.length + 1 }]);
  };


  const [openDropdown, setOpenDropdown] = useState(false); // Tracks the currently open dropdown
  const removeSocial = (id) => {
    setSocials((prev) => prev.filter((social) => social.id !== id)); // Remove the component by ID
  };

  return (
    <div className='w-full h-full bg-white flex flex-col items-center'>

      {activeSection === 'about' && <div className='w-full h-auto px-5 py-8 flex flex-col gap-10'>
        <div className='w-full h-auto'>
          <h1 className='font-extrabold text-4xl font-mono text-sky-500'>About yourself</h1>
          <p className='text-gray-600'>Fill out your primary Information</p>
        </div>
        <div className='flex flex-wrap gap-4'>
          <div className='flex flex-col gap-1 mt-4'>
            <label htmlFor="" className='text-gray-400 text-md'>First Name</label>
            <input name='firstname' value={generalInfo.firstname} onChange={onInputChange}
              className='w-[300px] p-3 h-12 rounded-md bg-gray-100 focus:outline-none focus:border-b-2 focus:border-sky-500 focus:rounded-b-none'
              type="text" />
          </div>
          <div className='flex flex-col gap-1 mt-4'>
            <label htmlFor="" className='text-gray-400 text-md'>Last Name</label>
            <input name='lastname' value={generalInfo.lastname} onChange={onInputChange}
              className='w-[300px] p-3 h-12 rounded-md bg-gray-100 focus:outline-none focus:border-b-2 focus:border-sky-500 focus:rounded-b-none'
              type="text" />
          </div>
          <div className='flex flex-col gap-1 w-full mt-4'>
            <label htmlFor="" className='text-gray-400 text-md'>Designation</label>
            <input name='designation' value={generalInfo.designation} onChange={onInputChange}
              className='w-full p-3 h-12 rounded-md bg-gray-100 focus:outline-none focus:border-b-2 focus:border-sky-500 focus:rounded-b-none'
              type="text" />
          </div>
          <div className='flex flex-col gap-1 mt-4'>
            <label htmlFor="" className='text-gray-400 text-md'>Address</label>
            <input name='address' value={generalInfo.address} onChange={onInputChange}
              className='w-[300px] p-3 h-12 rounded-md bg-gray-100 focus:outline-none focus:border-b-2 focus:border-sky-500 focus:rounded-b-none'
              type="text" />
          </div>
          <div className='flex flex-col gap-1 mt-4'>
            <label htmlFor="" className='text-gray-400 text-md'>City</label>
            <input name='city' value={generalInfo.city} onChange={onInputChange}
              className='w-[300px] p-3 h-12 rounded-md bg-gray-100 focus:outline-none focus:border-b-2 focus:border-sky-500 focus:rounded-b-none'
              type="text" />
          </div>
          <div className='flex flex-col gap-1 mt-4'>
            <label htmlFor="" className='text-gray-400 text-md'>Email</label>
            <input name='email' value={generalInfo.email} onChange={onInputChange}
              className='w-[300px] p-3 h-12 rounded-md bg-gray-100 focus:outline-none focus:border-b-2 focus:border-sky-500 focus:rounded-b-none'
              type="text" />
          </div>
          <div className='flex flex-col gap-1 mt-4'>
            <label htmlFor="" className='text-gray-400 text-md'>Phone</label>
            <input name='contact' value={generalInfo.contact} onChange={onInputChange}
              className='w-[300px] p-3 h-12 rounded-md bg-gray-100 focus:outline-none focus:border-b-2 focus:border-sky-500 focus:rounded-b-none'
              type="text" />
          </div>
          <div className='flex flex-col gap-1 w-full mt-5'>
            <label htmlFor="" className='text-gray-400 text-md'>Summary</label>
            <textarea name='Description' value={generalInfo.Description} onChange={onInputChange}
              className='w-full p-3 h-20 rounded-md bg-gray-100 focus:outline-none focus:border-b-2 focus:border-sky-500 focus:rounded-b-none'
              type="text" />
          </div>
          <div className='w-full gap-1'>
            {socials.map((social) => (
              <Social
                key={social.id}
                id={social.id}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                onDelete={() => removeSocial(social.id)} // Pass the delete function
              />
            ))}
            <button
              className='text-sky-500 mt-3'
              onClick={addSocial}
            >
              + Add Social Link
            </button>
          </div>
          <div className='w-full flex justify-between mt-5'>
            <button className='w-[100px] h-12 border border-black rounded-md hover:bg-black hover:text-white duration-200'>
              Back
            </button>
            <button
              className='w-[220px] h-12 gap-4 text-white bg-sky-500 rounded-md flex justify-center items-center px-2 hover:bg-black
             hover:text-white duration-200'
              onClick={() => onNavigate('education')}
            >
              Continue to Education
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      }
      {activeSection === 'education' && <div className='w-full h-auto px-5 py-8 flex flex-col gap-10'>
        <div className='w-full h-auto'>
          <h1 className='font-extrabold text-4xl font-mono text-sky-500'>About yourself</h1>
          <p className='text-gray-600'>Fill out your primary Information</p>
        </div>
        <input name='school' value={generalInfo.school} onChange={onInputChange}
          className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='School' />
        <input name='degree' value={generalInfo.degree} onChange={onInputChange}
          className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Degree' />
        <input name='startDate' value={generalInfo.startDate} onChange={onInputChange}
          className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="date" placeholder='Start-Date' />
        <input name='endDate' value={generalInfo.endDate} onChange={onInputChange}
          className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="date" placeholder='End-Date' />
        <input name='Slocation' value={generalInfo.Slocation} onChange={onInputChange}
          className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Location' />
      </div>}
      {activeSection === 'experience' && <div className='w-full h-auto px-5 py-8 flex flex-col gap-8 items-center'>
        <h1 className='font-bold text-2xl font-mono text-violet-600'>Experience:</h1>
        <input name='company' value={generalInfo.company} onChange={onInputChange} className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Company' />
        <input name='position' value={generalInfo.position} onChange={onInputChange} className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Position' />
        <input name='jobstartDate' value={generalInfo.jobstartDate} onChange={onInputChange} className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="date" placeholder='Start-Date' />
        <input name='jobendDate' value={generalInfo.jobendDate} onChange={onInputChange} className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="date" placeholder='End-Date' />
        <input name='Jlocation' value={generalInfo.Jlocation} onChange={onInputChange} className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Location' />
        <textarea name="Description" value={generalInfo.Description} onChange={onInputChange} id="des" placeholder='Description' className='w-4/5 p-3 h-28 border-2 border-gray-400 rounded-lg placeholder:tracking-wider
         placeholder:ml-4 placeholder:text-lg'></textarea>
      </div>}
    </div>
  );
}

export default Body