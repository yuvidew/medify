import React from 'react'
import logo from "../../public/vite.svg"

export const Logo = () => {
    return (
        <div className=' h-[3rem]  flex items-center justify-start gap-2'>
            <img className='w-[1.8rem] h-[1.8rem]' src={logo} alt="" />
            <h1 className='text-[#2AA7FF] text-[1.3rem] font-bold'>Medify</h1>
        </div>
    )
}
