import React from 'react'
import dentice from '@/assets/dentice.svg'
import care from '@/assets/care.svg'
import harteRate from '@/assets/harteRate.svg'
import mri from '@/assets/mri.svg'
import test from '@/assets/test.svg'
import secure from '@/assets/secure.svg'
import x from '@/assets/x.svg'
import { Button } from '@/components/ui/button'

export const ShowCards = () => {
  const cartInfo = [
    {
      icon : dentice,
      text : "Dentistry"
    },
    {
      icon : care,
      text : "Primary Care"
    },{
      icon : harteRate,
      text : "Cardiology"
    },{
      icon : mri,
      text : "MRI Resonance"
    },{
      icon : test,
      text : "Blood Test"
    },{
      icon : secure,
      text : "Piscologist"
    },{
      icon : dentice,
      text : "Laboratory"
    },{
      icon : x,
      text : "X-Ray"
    },
  ]
  return (
    <div className='  bg-gradient-to-tr  from-[#E7F0FF] to-[#E8F1FF78] p-5 flex items-center justify-center flex-col'>
        <h1 className=' text-[2rem] text-[#1B3C74] font-medium mt-[1.5rem]'>Find by specialisation</h1>

      <div className=' grid lg:w-[70%] w-[85%]  m-auto mt-10 lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-5'>
        {cartInfo.map((ele) => (
          <div key={ele.text} className='  bg-slate-50 flex items-center justify-center flex-col gap-2 py-7 px-4 shadow-md rounded-sm'>
            <img className='w-[4.5rem] h-[4.5rem]' src={ele.icon} alt="" />
            <p className=' text-[#ABB6C7]'>{ele.text}</p>
          </div>
        ))}
      </div>

      <Button 
        variant = "blue"
        className = "w-[8rem] mt-3"
      >
        View all
      </Button>
    </div>
  )
}
