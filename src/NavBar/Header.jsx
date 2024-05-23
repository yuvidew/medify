import React from 'react'
import logo from "../../public/vite.svg"
import { NavLink, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const navText = [
    {
        text : "Find Doctors",
        link : '/doctors'
    },
    {
        text : "Hospitals",
        link : "/hospitals"
    },
    {
        text : "Medicines",
        link : "/medicines"
    },
    {
        text : "Surgeries",
        link : "/surgeries"
    },
    {
        text : "Software for Provider",
        link : "/provider"
    },
    {
        text : "Facilities",
        link : "/facilities"
    },
] 

export const Header = () => {
    const params = useLocation()

    return (
        <header>
            <div className=' bg-[#2AA7FF] text-center py-2 px-4'>
                <p className=' text-[#fff] font-light lg:text-[1rem] md:text-[.9rem] text-[.8rem]'>
                    The health and well-being of our patients and their health care team will always 
                    be our priority, so we follow the best practices for cleanliness.
                </p>
            </div>
            <main className=' container my-[1rem] flex items-center justify-between'>
                <div className=' h-[3rem]  flex items-center justify-start gap-2'>
                    <img className='w-[1.8rem] h-[1.8rem]' src={logo} alt="" />
                    <h1 className='text-[#2AA7FF] text-[1.3rem] font-bold'>Medify</h1>
                </div>
                <div className=' h-[3rem] flex items-center justify-end gap-[2rem] '>
                    {navText.map((ele) => (
                        <NavLink 
                            key={ele.text}
                            className={`mt-6 h-full ${ params.pathname == ele.link &&  "border-b-4"} border-[#2aa7ff] `} 
                            to={ele.link} 
                        >
                            {ele.text}
                        </NavLink>
                    ))}
                    <Button variant = "blue">
                        My Bookings
                    </Button>
                </div>
            </main>
        </header>
    )
}
