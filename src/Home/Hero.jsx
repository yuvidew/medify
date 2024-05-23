import React from 'react'
import { SearchComp } from './SearchComp'
import { Button } from '@/components/ui/button'
import doctor from "../assets/doctor.svg"
import hospital from "../assets/hospital.svg"
import labe from "../assets/labe.svg"
import medical from "../assets/medical.svg"
import ambulance from "../assets/ambulance.svg"

const iconList = [
    {
        icon : doctor,
        text : 'doctor'
    },
    {
        icon : labe,
        text : 'labs'
    },
    {
        icon : hospital,
        text : 'hospitals'
    },
    {
        icon : medical,
        text : 'medical store'
    },
    {
        icon : ambulance,
        text : 'ambulance'
    },
]

export const Hero = () => {
    return (
        <section className=' bg-gradient-to-tr h-[44rem] from-[#E7F0FF] to-[#E8F1FF78] relative'>
            <div className=' container  h-[55%]  flex items-center'>
                <div className='w-[50%]  flex items-start justify-center flex-col gap-2'>
                    <p className=' text-[#102851] text-[1.5rem]'> Skip the travel! Find Online
                    <br /> 
                        <span className='text-[3.3rem] font-medium'>
                            Medical <span className='text-[#2AA7FF]'>Centers</span>
                        </span>
                    </p>
                    <p>Connect instantly with a 24x7 specialist or choose to <br /> video visit a particular doctor.</p>
                    <Button variant = "blue">Find Centers</Button>
                </div>
                <div className='w-[50%] h-full flex items-center justify-end'>
                    <img 
                        src="https://s3-alpha-sig.figma.com/img/7804/e5f2/776e41d6b125a1ff07effac37d6ff11b?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=haEQ~vyBzhrqGS2LkZOOS6NI32~JkdaQkZOI6kU3Udok6s194eX4zISLWMPpiFtBIAS3kQ164g3HT3zTogRujZbgaz6BRsGREFaFaSsxO9ExSYSAlndO-GVb1MgGetTn46joaDlO2HGbXZyZA6Oi82NVwXO9oTqeTNED8~LTIKO-lti22m64Y2sXYqxTJb93RcJeCNiR3isyXy7hWB6bUnmJyi1fNuOYQ~xYultrUcdNaQF5WTjP2eE3dg2uxFQ7GP9dET9Q0w5B3XDVLOkWvuZa2Rgzym4FUkEbphoM-QYCTvsX9YJEidRE8L8LWRzgXt3ks9XQ2CTN3qG8DID1PA__" 
                        alt="" 
                        className=' h-full object-contain'
                    />
                </div>
            </div>
            <div className='bg-[#fff] py-10 px-6 rounded-lg w-[78.5%] shadow-md m-auto absolute top-[33rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                <SearchComp/>
                <main className='py-5'>
                    <h1 className=' text-center mt-3'>You may be looking for</h1>
                    <div className='w-[80%] m-auto mt-8 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-4'>
                        {iconList.map((ele) => (
                            <Button 
                                key={ele.text} 
                                variant = "secondary"
                                className = " flex items-center hover:bg-blue-100 border-blue-500 hover:border justify-center gap-3 flex-col h-[9rem]"
                            >
                                <img src={ele.icon} alt="" />
                                <p>{ele.text}</p>
                            </Button>
                        ))}
                    </div>
                </main>
            </div>
        </section>
    )
}
