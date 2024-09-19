import React from 'react'

const General = () => {
  return (
    <>
    <div className='w-full h-auto px-5 py-8 flex flex-col gap-8 items-center'>
        <h1 className='font-bold text-2xl font-mono text-violet-600'>General Information:</h1>
        <input className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='First Name' />
        <input className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Last Name' />
        <input className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Contact No' />
        <input className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Email' />
                <input className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Address' />
    </div>
    <div className='w-full h-auto px-5 py-8 flex flex-col gap-8 items-center'>
        <h1 className='font-bold text-2xl font-mono text-violet-600'>Education:</h1>
        <input className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='School' />
        <input className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Degree' />
        <input className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="date" placeholder='Start-Date' />
        <input className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="date" placeholder='End-Date' />
                 <input className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Location' />
    </div>
    <div className='w-full h-auto px-5 py-8 flex flex-col gap-8 items-center'>
        <h1 className='font-bold text-2xl font-mono text-violet-600'>Experience:</h1>
        <input className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Company' />
        <input className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Position' />
        <input className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="date" placeholder='Start-Date' />
        <input className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="date" placeholder='End-Date' />
                 <input className='w-4/5 p-3 h-10 border-gray-400 border-2 rounded-lg placeholder:tracking-wider placeholder:ml-4
         placeholder:text-lg placeholder:font-semibold' type="text" placeholder='Location' />
         <textarea name="Description" id="des" placeholder='Description' className='w-4/5 p-3 h-28 border-2 border-gray-400 rounded-lg placeholder:tracking-wider
         placeholder:ml-4 placeholder:text-lg'></textarea>
    </div>
    </>
)
}

export default General