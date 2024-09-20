import React from 'react';

const Title = ({generalInfo}) => {

  return (
    <div className='w-full h-1/5 bg-black text-white flex flex-col items-center p-5'>
        <h1 className='font-mono tracking-wider text-3xl font-bold'>{generalInfo.firstname} {generalInfo.lastname}</h1>
         <h2 className='font-mono font-semibold text-xl'>{generalInfo.contact}</h2>
         <h2 className='font-mono font-semibold text-xl'>{generalInfo.email}</h2>
         <h2 className='font-mono font-semibold text-xl'>{generalInfo.address}</h2>
            
    </div>
  )
}

export default Title