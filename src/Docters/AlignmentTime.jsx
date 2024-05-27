import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'


export const AlignmentTime = ({
  onAddAppointment,
  data
}) => {
  const tabsText = [
    {
      heading : "today",
      text : '11 slots available',
    },
    {
      heading : "tomorrow",
      text : '17 slots available',
    },
    {
      heading : "Fri , 5 May",
      text : '18 slots available',
    },
    
  ]
  const tabsContent = [
    {
      heading : "today",
      morning : [
        "11:30",
        
      ],
      afternoon : [
        "12:00",
        "12:30",
        "02:00",
        "02:30"
      ],
      evening : [
        "06:00",
        "06:30",
        "07:30"
      ]
    },
    {
      heading : "tomorrow",
      morning : [
        "11:30",
        
      ],
      afternoon : [
        "12:00",
        "12:30",
        "02:00",
        "02:30"
      ],
      evening : [
        "06:00",
        "06:30",
        "07:30"
      ]
    },
    {
      heading : "Fri , 5 May",
      morning : [
        "11:30",
        
      ],
      afternoon : [
        "12:00",
        "12:30",
        "02:00",
        "02:30"
      ],
      evening : [
        "06:00",
        "06:30",
        "07:30"
      ]
    },
  ]

  const onAddBook = (time) => {
    onAddAppointment(data , time)
  }
  return (
    <div className=' w-full'>
      <Tabs defaultValue="today" className="w-full mt-3">
      <TabsList className = "w-full bg-transparent mb-10">
      {tabsText.map((ele) => (
        <TabsTrigger 
          key={ele.heading} 
          value={ele.heading} 
          className = "w-full flex items-center justify-center flex-col gap-1">
            <h1 className=' text-[#414146]  capitalize text-[1.1rem]'>{ele.heading}</h1>
            <p className='text-[#01A400] '>{ele.text}</p>
        </TabsTrigger>
      ))}
      </TabsList>
      {tabsContent.map((ele) => (
        <TabsContent 
          key={ele.heading} 
          value={ele.heading}
        >
          <div className=' flex items-center gap-3 mt-5 border-b-2 pb-2'>
            <h1 className=' '>Morning :</h1>
            {ele.morning.map((ele) => (
              <Button 
                size="sm" 
                variant = "outline"
                onClick = {() => onAddBook(`${ele} AM`)}
              >
                {ele} AM
              </Button>
            ))}
          </div>
          <div className=' flex items-center gap-3 mt-5 border-b-2 pb-2'>
            <h1 className=' '>Afternoon :</h1>
            {ele.afternoon.map((ele) => (
              <Button 
                size="sm" 
                variant = "outline" 
                onClick = {() => onAddBook(`${ele} PM`)}
              >
                {ele} PM
              </Button>
            ))}
          </div>
          <div className=' flex items-center gap-3 mt-5 border-b-2 pb-2'>
            <h1 className=''>Evening :</h1>
            {ele.evening.map((ele) => (
              <Button 
                size="sm" 
                variant = "outline" 
                onClick = {() => onAddBook(`${ele} PM`)}
              >
                {ele} PM
              </Button>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>

    </div>
  )
}
