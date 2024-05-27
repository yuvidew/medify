import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavLink } from 'react-router-dom'


export const MobileSideBar = ({
  navText,
  params
}) => {
  return (
    <Sheet>
    <SheetTrigger>
      <Button variant = "secondary" >
        <AlignRight className=' text-[#2AA8FF]' />
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetDescription className = "mt-[2.5rem]">
        {navText.map((ele) => (
            <h3 className=' mt-5'>
              <NavLink 
                  key={ele.text}
                  className={`mt-6 text-[1rem] pb-1 w-full h-full ${ params.pathname == ele.link &&  "border-b-4"} border-[#2aa7ff] `} 
                  to={ele.link} 
              >
                    {ele.text}
              </NavLink>
            </h3>
          ))}
          <div className='mt-[1.5rem]'></div>
          <NavLink to={'/bookings'} className={'mt-[1.5rem]'}>
              <Button variant = "blue" className = "w-full">
                  My Bookings
              </Button>
          </NavLink>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>

  )
}

