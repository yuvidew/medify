import React from 'react'
import { SearchComp } from './SearchComp'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Img  from "@/assets/cartImg.svg"
import { IndianRupee, ThumbsUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import moment from 'moment'
import img from "@/assets/img.png"

const BookingPage = () => {
    const data = JSON.parse(localStorage.getItem('booking'))
    console.log(data);

    const convertDate = (theData) => {
        return moment(theData).format('DD MMMM yyyy')
    }
    return (
        <div>
            <div className='h-[5rem] bg-gradient-to-tr from-[#2AA7FF] to-[#0C8CE5]'>
                <section 
                    className=' container h-full'
                >
                    <div className=' relative flex items-center h-full justify-between'>
                        <h1 className=' text-[1.8rem] font-medium text-[#fff]'>My Bookings</h1>
                        <div className=' lg:block hidden'>
                            <SearchComp/>
                        </div>
                    </div>
                </section>
            </div>
            <section className='bg-gradient-to-tr py-10 mb-[5rem] from-[#E7F0FF] to-[#E8F1FF78]'>
                <div className=' container'>
                    <div className=' lg:flex items-start w-full gap-3 mt-[2rem]'>
                        <div className=' lg:w-[65%] '>
                        {data.length !=0 ? data.map((ele) => (
                            <Card key={ele["Provider ID"]} className = "mt-4 px-10 py-5">
                                <div className=' lg:flex items-center gap-2'>
                                    <div className=' h-full lg:w-[20%]'>
                                        <img className=' lg:mt-[-2rem]' src={Img} alt="" />
                                    </div>
                                    <div className=' h-full lg:w-[50%]'>
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
                                    <div className=' flex items-start justify-start h-full lg:w-[30%] gap-3'>
                                        <Button variant = "outline" >
                                            {ele.time}
                                        </Button>

                                        <Button variant = "outline">
                                            {convertDate(ele.date)}
                                        </Button>
                                    </div>
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
        </div>
    )
}

export default BookingPage
