import React from 'react'
import cardImg from "@/assets/cardImg.svg"
import check from "@/assets/check.svg"

export const Banner = () => {
    const text = [
        {
            text : "Stay Updated About Your Health"
        },
        {
            text : "Check Your Results Online"
        },
        {
            text : "Manage Your Appointments"
        },
    ]
    return (
        <div className='bg-gradient-to-tr  from-[#E7F0FF] to-[#E8F1FF78] px-5 py-10'>
            <div className=' container '>
                <div className=' grid lg:grid-cols-2 gap-2 '>
                    <article className='w-full h-[30rem]'>
                        <img 
                            src={cardImg} 
                            alt="" 
                            className=' h-full w-full text-left ml-[-4rem] object-contain'
                        />
                    </article>
                    <article className='w-full h-[30rem] flex items-center justify-center'>
                        <div className='p-3 w-full'>
                            <h4 className=' text-[#2AA7FF]'>HELPING PATIENTS FROM AROUND THE GLOBE!!</h4>
                            <h1 className=' text-[#2AA7FF] text-[2rem] font-medium mt-2'>
                                <span className=' text-[#1B3C74]'>Patient </span> Caring
                            </h1>

                            <p className=' text-[#77829D] text-[1rem] mt-4'>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
                            <div className=' mt-[3rem]'>
                                {text.map((ele) => (
                                    <div key={ele.text} className=' flex items-center gap-2 mb-4'>
                                        <img src={check} alt="" />
                                        <h2>{ele.text}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}
