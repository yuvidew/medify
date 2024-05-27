import React from 'react'
import A from "@/assets/AHospital.svg"
import B from "@/assets/BHospital.svg"
import C from "@/assets/CHospital.svg"
import D from "@/assets/DHospital.svg"
import { Card } from '@/components/ui/card'

export const Cararing = () => {
  const imgBox = [
    {
      img : A,
      heading : "5000+",
      text : "Happy Patients"
    },
    {
      img : B,
      heading : "200+",
      text : "Hospitals"
    },
    {
      img : C,
      heading : "1000+",
      text : "Laboratories"
    },
    {
      img : D,
      heading : "700+",
      text : "Expert Doctors"
    },
  ]
  return (
    <div className='bg-gradient-to-tr  from-[#E7F0FF] to-[#E8F1FF78] px-5 py-10'>
      <section className=' container'>
        <div className=' grid lg:grid-cols-2 gap-2'>
          <div className=' w-full h-[30rem] flex items-center justify-start'>
            <div>
              <h4 className=' text-[#2AA7FF]'>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h4>
              <h1 className=' text-[#1B3C74] text-[3rem] font-medium'>Our Families</h1>
              <p className='text-[#77829D]'>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
            </div>
          </div>
          <div className='w-full h-[30rem] flex items-center justify-center'>
            <div className='grid grid-cols-2 gap-3 lg:w-[70%] w-full ml-auto'>
              {imgBox.map((ele) => (
                <Card key={ele.text} className = "flex items-center justify-center flex-col gap-2 w-full py-4">
                  <img src={ele.img} alt="" />
                  <h2 className=' text-[2rem] mt-2 text-[#1B3C74] font-medium'>{ele.heading}</h2>
                  <p className=' text-[.8rem] text-[#77829D]'>{ele.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
