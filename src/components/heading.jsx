import React from 'react';
import { RiHome2Line } from 'react-icons/ri';

const Heading = () => {
    return (
        <div className='w-full h-auto pt-5 pb-8 bg-gray-100 flex justify-between items-center'>
            <div>
                <button className='border-0 bg-violet-500 p-2 font-bold rounded-md text-gray-100 text-xl w-16
         h-12 flex justify-center items-center'><RiHome2Line className='font-extrabold text-3xl' /></button>
            </div>
            <div>
                <h1 className='font-bold text-2xl text-violet-600 font-mono'>Resume Builder</h1>
            </div>
        </div>
    )
}

export default Heading