import React from 'react'
import { CarouselComp } from './Carousel'
import dr1 from "@/assets/dr-1.svg"
import dr3 from "@/assets/dr-3.svg"
import dr4 from "@/assets/dr-4.svg"
// import dr5 from "@/assets/dr-5.svg"

export const Specialist = ({
    mobileSize
}) => {
    const specialist  = [
        {
            img : dr1,
            name : "Dr. Lesley Hull",
            presence : "Medicine"
        },
        {
            img : dr3,
            name : "Dr. Ahmad Khan",
            presence : "Neurologist"
        },
        {
            img : dr4,
            name : "Dr. Heena Sachdeva",
            presence : "Orthopadics"
        },
        {
            img : dr1,
            name : "Dr. Ankur Sharma",
            presence : "Medicine"
        },
        {
            img : dr3,
            name : "Dr. Ahmad Stevens",
            presence : "Neurologist"
        },
        {
            img : dr4,
            name : "Dr. Heena Sachdeva",
            presence : "Orthopadics"
        },
        {
            img : dr1,
            name : "Dr. Lesley Hull",
            presence : "Medicine"
        },
    ]
    return (
        <section className='py-5'>
            <h1 className=' text-[#1B3C74] text-[2rem] text-center font-medium ' >Our Medical Specialist</h1>
            <CarouselComp 
                imgList={specialist} 
                classText={"h-[24rem] "}
                slidesPerView={mobileSize ? 5 : 2}
                imgClass={"shadow-xl p-1"}
            />
        </section>
    )
}
