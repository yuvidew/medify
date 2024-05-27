import { Logo } from '@/NavBar/Logo'
import { Button } from '@/components/ui/button'
import { ChevronRight, Facebook, MessageCircleHeart, X, Youtube } from 'lucide-react'
import React from 'react'

export const Footer = () => {
    const listOne = [
        {
            text : "About Us"
        },
        {
            text : "Our Pricing"
        },
        {
            text : "Our Gallery"
        },
        {
            text : "Appointment"
        },
        {
            text : "Privacy Policy"
        },
    ]

    const listTwo = [
        {
            text : "Orthology"
        },
        {
            text : "Neurology"
        },
        {
            text : "Dental Care"
        },
        {
            text : "Opthalmology"
        },
        {
            text : "Cardiology"
        },
    ]


    return (
        <footer className=' bg-[#1B3C74] py-6 px-5'>
            <div className=' container'>
                <div className=' grid lg:grid-cols-4 md:grid-cols-2  gap-2 border-b py-10'>
                    <div className=' lg:w-[30%] lg:h-[20rem] flex items-start justify-between lg:flex-col'>
                        <Logo/>
                        <div className=' flex items-center gap-3 ml-[-1rem]'>
                            <Button variant = "secondary" className = " w-[3rem] h-[3rem] p-3 rounded-full">
                                <Facebook className=' h-full w-full' />
                            </Button>
                            <Button variant = "secondary" className = " w-[3rem] h-[3rem] p-3 rounded-full">
                                <X className=' h-full w-full' />
                            </Button>
                            <Button variant = "secondary" className = " w-[3rem] h-[3rem] p-3 rounded-full">
                                <Youtube className=' h-full w-full' />
                            </Button>
                            <Button variant = "secondary" className = " w-[3rem] h-[3rem] p-3 rounded-full">
                                <MessageCircleHeart className=' h-full w-full' />
                            </Button>
                        </div>
                    </div>
                    <div className='  lg:h-[20rem] py-3 flex items-center justify-center'>
                        <div className='w-full'>
                            {listOne.map((ele) => (
                                <div key={ele.text} className=' w-full flex items-center gap-2 text-[#fff] mt-0 mb-2 font-light'>
                                    <ChevronRight />
                                    <p>{ele.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='  lg:h-[20rem] py-3 flex items-center justify-center'>
                        <div className='w-full'>
                            {listTwo.map((ele) => (
                                <div key={ele.text} className=' w-full flex items-center gap-2 text-[#fff] mt-0 mb-2 font-light'>
                                    <ChevronRight />
                                    <p>{ele.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='  lg:h-[20rem] py-3 flex items-center justify-center'>
                        <div className='w-full'>
                            {listOne.map((ele) => (
                                <div key={ele.text} className=' w-full flex items-center gap-2 text-[#fff] mt-0 mb-2 font-light'>
                                    <ChevronRight />
                                    <p>{ele.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <p className=' mt-3 text-[#fff]'>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
            </div>
        </footer>
    )
}
