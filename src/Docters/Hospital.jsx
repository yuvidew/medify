import { CircleCheck, IndianRupee, ThumbsUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Img  from "@/assets/cartImg.svg"
import { Button } from '@/components/ui/button'
import { AlignmentTime } from './AlignmentTime'
import img from "@/assets/img.png"


export const Hospital = (
    {data}
) => {

    const [isCollapse , setIsCollapse] = useState('')
    const [books , setBook] = useState([])


    const onBook = (item , time) => {
        item.time = time
        item.date = new Date()
        setBook(prev => [
            ...prev,
            item
        ])
    }

    useEffect(() => {
        localStorage.setItem("booking" , JSON.stringify(books))
    } , [books])


    return (
        <section className='bg-gradient-to-tr lg:py-14 py-5 from-[#E7F0FF] to-[#E8F1FF78]'>
            <div className=' container'>
                <div className=' lg:flex items-start w-full gap-3 mt-[2rem]'>
                    <div className=' lg:w-[65%] '>
                        <h1>15 medical centers available in Alaska</h1>
                        <p 
                            className=' flex items-center w-full mt-3 text-[#787887]'> 
                            <CircleCheck className=' w-4 h-4 mr-5' /> 
                            Book appointments with minimum wait-time & verified doctor details
                        </p>
                        
                        {data.length !=0 ? data.map((ele) => (
                            <Card key={ele["Provider ID"]} className = "mt-4 px-10 py-5">
                                <div className=' lg:flex items-center gap-2'>
                                    <div className=' h-full lg:w-[20%]'>
                                        <img className=' lg:mt-[-2rem]' src={Img} alt="" />
                                    </div>
                                    <div className=' h-full lg:w-[60%]'>
                                        <CardHeader>
                                            <CardTitle className = "text-[#2AA7FF] capitalize ">{ele["Hospital Name"]}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className = " font-bold capitalize text-[#000]">{ele["City"]}, {" "} {ele['State']}</CardDescription>
                                            <p style={{
                                                textTransform : "lowercase"
                                            }} className=' capitalize'>{ele["Address"]} , {ele["ZIP Code"]}</p>

                                            <p className=' flex items-center gap-3 mt-3'>
                                                <span className=' text-green-500'>FREE</span>
                                                <span className=' flex items-center gap-2 text-[#787887]'> <p className=' line-through flex items-center text-[1rem]'><IndianRupee className='w-5 h-5' /> 500</p> Consultation fee at clinic</span>
                                            </p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className = "bg-green-500 hover:bg-green-600" size ="sm">
                                                <ThumbsUp className=' w-5 h-5' />
                                                <span className='text-[1.1rem] ml-2'>{ele["Hospital overall rating"]}</span>
                                            </Button>
                                        </CardFooter>
                                    </div>
                                    <div className=' flex items-center justify-center flex-col h-full lg:w-[20%] gap-3'>
                                        <h3 className=' text-green-500'>Available Today</h3>
                                        <Button 
                                            variant = "blue"
                                            onClick = {() => setIsCollapse(ele["Provider ID"])}
                                        >Book FREE Center Visit</Button>
                                    </div>
                                </div>
                                <div className={`py-1 px-3 mt-5 mb-4 overflow-hidden transition-all w-full duration-500 ease-in-out ${isCollapse !== ele["Provider ID"] && "h-0"}`}>
                                    <AlignmentTime data = {ele} onAddAppointment={onBook} />
                                </div>
                            </Card>
                        )) : (
                            <Card className = " mt-4 px-5 py-5">
                                <h1 className=' text-stone-500' >Loading..</h1>
                            </Card>
                        )}
                    </div>
                    <div className=' lg:w-[35%] lg:block hidden'>
                        <Card className = "overflow-hidden">
                            <img className=" h-[18rem] w-full object-cover" src = {img} alt="" />
                        </Card>
                    </div>
                </div>

            </div>
        </section>
    )
}
