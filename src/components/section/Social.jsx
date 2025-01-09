import React, { useState } from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'

const Social = () => {

    const social = ['Facebook', 'Twitter', 'LinkedIn', 'Github', 'Dribble', 'Medium', 'Instagram'];
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-full flex gap-4 mb-2'>
            <div className='w-1/4 gap-1'>
                <label htmlFor="" className='text-gray-400 text-md'>Social Website</label>
                <div onClick={() => setIsOpen((prev) => !prev)} className='relative h-12 w-full bg-gray-100 flex justify-between p-3'>
                    Facebook
                    {!isOpen ? (
                        <FaCaretDown color='gray' />
                    ) : (
                        <FaCaretUp color='gray' />
                    )}
                </div>
                {isOpen && <div className='w-[135px] max-h-[180px] gap-2 absolute bg-gray-100 overflow-y-scroll flex flex-col rounded-md'>
                    {
                        social.map((item, i) => (
                            <div className='w-full h-10 text-start p-2 pl-3 cursor-pointer hover:bg-gray-400 rounded-md'
                                key={i}
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                <h3 className='text-black'>{item}</h3>
                            </div>
                        ))
                    }
                </div>}
            </div>
            <div className='w-3/4 gap-1'>
                <label htmlFor="" className='text-gray-400 text-md'>Link</label>
                <input name='link'
                    className='w-full p-3 h-12 rounded-md bg-gray-100'
                    type="text" />
            </div>
            <button className='w-1/12 h-[72px] flex pt-8 justify-center'>
                <RiDeleteBin6Line size={18} color='gray' />
            </button>
        </div>
    )
}

export default Social