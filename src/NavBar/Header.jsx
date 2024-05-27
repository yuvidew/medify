import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Logo } from './Logo'
import { MobileSideBar } from './MobileSideBar'
import { SearchBtn } from './SearchBtn'

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
                <NavLink to={'/'}>
                    <Logo/>
                </NavLink>
                <div className='lg:hidden flex items-center gap-3'>
                    <MobileSideBar  navText={navText} params = {params}  />
                    <SearchBtn/>
                </div>

                <div className=' h-[3rem]  lg:flex md:hidden sm:hidden hidden items-center justify-end gap-[2rem] '>
                    {navText.map((ele) => (
                        <NavLink 
                            key={ele.text}
                            className={`mt-6 h-full ${ params.pathname == ele.link &&  "border-b-4"} border-[#2aa7ff] `} 
                            to={ele.link} 
                        >
                            {ele.text}
                        </NavLink>
                    ))}


                    <NavLink to={'/bookings'}>
                        <Button variant = "blue">
                            My Bookings
                        </Button>
                    </NavLink>
                </div>
            </main>
        </header>
    )
}
