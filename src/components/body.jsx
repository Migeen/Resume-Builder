import React from 'react';

const Body = ({ generalInfo, onInputChange }) => {

  return (
    <div className='w-full h-full rounded-md bg-gray-100 flex flex-col items-center border-y-4 border-violet-500 shadow-lg'>
      <div className='w-full h-auto px-5 py-8 flex flex-col gap-8 items-center'>
        <h1 className='font-bold text-2xl font-mono text-violet-600'>General Information:</h1>
        <input name='firstname' value={generalInfo.firstname} onChange={onInputChange} className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='First Name' />
        <input name='lastname' value={generalInfo.lastname} onChange={onInputChange} className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Last Name' />
        <input name='contact' value={generalInfo.contact} onChange={onInputChange} className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Contact No' />
        <input name='email' value={generalInfo.email} onChange={onInputChange} className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Email' />
        <input name='address' value={generalInfo.address} onChange={onInputChange} className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Address' />
      </div>
      <div className='w-full h-auto px-5 py-8 flex flex-col gap-8 items-center'>
        <h1 className='font-bold text-2xl font-mono text-violet-600'>Education:</h1>
        <input name='school' value={generalInfo.school} onChange={onInputChange} className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='School' />
        <input name='degree' value={generalInfo.degree} onChange={onInputChange} className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Degree' />
        <input name='startDate' value={generalInfo.startDate} onChange={onInputChange} className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="date" placeholder='Start-Date' />
        <input name='endDate' value={generalInfo.endDate} onChange={onInputChange} className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="date" placeholder='End-Date' />
        <input name='Slocation' value={generalInfo.Slocation} onChange={onInputChange} className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Location' />
      </div>
      <div className='w-full h-auto px-5 py-8 flex flex-col gap-8 items-center'>
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
      </div>
    </div>
  );
}

export default Body