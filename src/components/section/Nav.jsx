import React, { useState } from 'react'
import { CiShare2 } from 'react-icons/ci'
import { FaLanguage } from 'react-icons/fa'
import { GoPerson, GoRocket, GoTrophy } from 'react-icons/go'
import { IoSchoolOutline } from 'react-icons/io5'
import { LuAward } from 'react-icons/lu'
import { PiCertificateLight, PiLightbulbLight, PiSuitcaseSimpleLight } from 'react-icons/pi'
import { VscReferences } from 'react-icons/vsc'

const Nav = ({onNavigate}) => {

    return (

        <>
            <nav className='w-1/6 h-auto bg-white border border-gray-200 '>
                <ul className=' flex flex-col p-3 pt-8 gap-8'>
                    <li className='w-[82px] h-[82px] bg-sky-50 active:bg-blue-500 active:text-white text-green-600 hover:bg-nGray duration-300 ease-in-out flex flex-col
                     cursor-pointer rounded-2xl items-center justify-center py-4 gap-1 '
                     onClick={() => onNavigate('about')}
                     >
                        <GoPerson className='w-7 h-7' />
                        <p className='text-xs'>About</p>
                    </li>
                    <li className='bg-sky-50 w-[82px] h-[82px] active:bg-blue-500 active:text-white text-green-600 hover:bg-nGray duration-300 ease-in-out flex flex-col
                     cursor-pointer rounded-2xl items-center justify-center py-4 px-2 gap-1 '
                     onClick={() => onNavigate('education')}
                     >
                        <IoSchoolOutline className='w-7 h-7'/>
                        <p className='text-xs'>Education</p>
                    </li>
                    <li onClick={() => onNavigate('experience')} className='bg-sky-50 active:bg-blue-500 w-[82px] h-[82px] active:text-white text-green-600 hover:bg-nGray duration-300 ease-in-out flex flex-col
                     cursor-pointer rounded-2xl items-center justify-center py-4 px-2 gap-1 '>
                        <PiSuitcaseSimpleLight className='w-7 h-7'/>
                        <p className='text-xs'>Experience</p>
                    </li>
                    <li className='bg-sky-50 active:bg-blue-500 active:text-white w-[82px] h-[82px] text-green-600 hover:bg-nGray duration-300 ease-in-out flex flex-col
                     cursor-pointer rounded-2xl items-center justify-center py-4 px-2 gap-1 '>
                        <GoRocket className='w-7 h-7'/>
                        <p className='text-xs'>Projects</p>
                    </li>
                    <li className='bg-sky-50 active:bg-blue-500 active:text-white text-green-600 w-[82px] h-[82px] hover:bg-nGray duration-300 ease-in-out flex flex-col
                     cursor-pointer rounded-2xl items-center justify-center py-4 px-2 gap-1 '>
                        <PiLightbulbLight className='w-7 h-7'/>
                        <p className='text-xs'>Skills</p>
                    </li>
                    <li className='bg-sky-50 active:bg-blue-500 active:text-white text-green-600 w-[82px] h-[82px] hover:bg-nGray duration-300 ease-in-out flex flex-col
                     cursor-pointer rounded-2xl items-center justify-center py-4 px-2 gap-1 '>
                        <GoTrophy className='w-7 h-7'/>
                        <p className='text-xs'>Achievements</p>
                    </li>
                    <li className='bg-sky-50 active:bg-blue-500 active:text-white text-green-600 w-[82px] h-[82px] hover:bg-nGray duration-300 ease-in-out flex flex-col
                     cursor-pointer rounded-2xl items-center justify-center py-4 px-2 gap-1 '>
                        <PiCertificateLight className='w-7 h-7'/>
                        <p className='text-xs'>Training</p>
                    </li>
                    <li className='bg-sky-50 active:bg-blue-500 active:text-white text-green-600 w-[82px] h-[82px] hover:bg-nGray duration-300 ease-in-out flex flex-col
                     cursor-pointer rounded-2xl items-center justify-center py-4 px-2 gap-1 '>
                        <LuAward className='w-7 h-7'/>
                        <p className='text-xs'>Awards</p>
                    </li>
                    <li className='bg-sky-50 active:bg-blue-500 active:text-white text-green-600 w-[82px] h-[82px] hover:bg-nGray duration-300 ease-in-out flex flex-col
                     cursor-pointer rounded-2xl items-center justify-center py-4 px-2 gap-1 '>
                        <FaLanguage className='w-7 h-7'/>
                        <p className='text-xs'>Language</p>
                    </li>
                    <li className='bg-sky-50 active:bg-blue-500 active:text-white text-green-600 w-[82px] h-[82px] hover:bg-nGray duration-300 ease-in-out flex flex-col
                     cursor-pointer rounded-2xl items-center justify-center py-4 px-2 gap-1 '>
                        <VscReferences className='w-7 h-7'/>
                        <p className='text-xs'>Reference</p>
                    </li>
                    <li className='bg-sky-50 active:bg-blue-500 active:text-white text-green-600 w-[82px] h-[82px] hover:bg-nGray duration-300 ease-in-out flex flex-col
                     cursor-pointer rounded-2xl items-center justify-center py-4 px-2 gap-1 '>
                        <CiShare2 className='w-7 h-7'/>
                        <p className='text-xs'>Share CV</p>
                    </li>
                    
                </ul>
            </nav>
        </>
    )
}

export default Nav