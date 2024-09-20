import React from 'react'

const Education = ({generalInfo}) => {
  return (
    <div  className='w-4/5 h-2/5 py-5 flex flex-col items-center'>
        <div className='w-full h-auto text-gray-800 bg-white p-5 text-3xl 
        font-mono font-bold text-center'>Education</div>
        <div className='w-full h-auto p-5 flex justify-center'>
            <div className='w-1/4 h-auto p-2 '>
                <h4 className='font-mono font-semibold text-lg'>{generalInfo.startDate} to {generalInfo.endDate}</h4>
                <h4 className='font-mono font-semibold text-xl'>{generalInfo.Slocation}</h4>
            </div>
            <div className='w-3/4 h-auto p-2 text-center'>
                <h1 className='font-mono font-bold tracking-wider text-3xl'>{generalInfo.school}</h1>
                <h4 className='font-mono font-semibold text-2xl'>{generalInfo.degree}</h4>
            </div>
        </div>
    </div>
  )
}

export default Education