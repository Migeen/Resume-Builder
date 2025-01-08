import React from 'react'
import { GoPerson, GoRocket } from 'react-icons/go'
import { IoSchoolOutline } from 'react-icons/io5'
import { PiLightbulbLight, PiSuitcaseSimpleLight } from 'react-icons/pi'

const Nav = () => {



    return (

        <>
            <nav className='w-1/6 h-auto bg-white border border-gray-200 '>
                <ul className=' flex flex-col p-5 gap-10'>
                    <li className='bg-sky-50 active:bg-blue-500 active:text-white text-green-600 hover:bg-nGray duration-300 ease-in-out flex flex-col
                     cursor-pointer rounded-2xl items-center justify-center p-4 gap-2 '>
                        <GoPerson className='w-10 h-10' />
                        <p className='text-sm'>About</p>
                    </li>
                    <li className='bg-sky-50 text-green-600 hover:bg-nGray duration-300 active:bg-blue-500 active:text-white ease-in-out flex flex-col
                     cursor-pointer rounded-2xl items-center justify-center p-4 gap-2'>
                        <IoSchoolOutline className='w-10 h-10'/>
                        <p className='text-sm'>Education</p>
                    </li>
                    <li className='bg-sky-50 text-green-600 hover:bg-nGray duration-300 ease-in-out active:bg-blue-500 active:text-white flex flex-col
                     cursor-pointer rounded-2xl items-center justify-center p-4 gap-2'>
                        <PiSuitcaseSimpleLight className='w-10 h-10'/>
                        <p className='text-sm'>Experience</p>
                    </li>
                    <li className='bg-sky-50 text-green-600 hover:bg-nGray active:bg-blue-500 active:text-white duration-300 ease-in-out flex flex-col
                     cursor-pointer rounded-2xl items-center justify-center p-4 gap-2'>
                        <GoRocket className='w-10 h-10'/>
                        <p className='text-sm'>Projects</p>
                    </li>
                    <li className='bg-sky-50 text-green-600 active:bg-blue-500 active:text-white hover:bg-nGray duration-300 ease-in-out flex flex-col
                     cursor-pointer rounded-2xl items-center justify-center p-4 gap-2'>
                        <PiLightbulbLight className='w-10 h-10'/>
                        <p className='text-sm'>Skills</p>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav