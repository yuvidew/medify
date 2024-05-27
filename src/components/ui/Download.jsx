import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export const Download = () => {
    return (
        <section className=" bg-gradient-to-tr  from-[#E7F0FF] to-[#E8F1FF78] grid lg:grid-cols-2 gap-3">
            <div className='lg:w-[50%] lg:block hidden h-[37rem]'>
                <img 
                    src="https://s3-alpha-sig.figma.com/img/cd7a/141a/3f2225b1820012068980e6ed1a5ae7f7?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X9GuhgVUyutsjOcG-wm0OOw6POoAyOmYWv6a9NwynDjVHJgw-Un~eAh4gRVKWbWyAs4u0MyeSdEszme2X4XmBoDmfjVVlOgvucl2mrge8wtThkdzaTezl8rlPaqsZ99QiUkC1qzwDP89ikXnf8m7BdoaNo1-I3IW40ewN7~TWv~Gq96f0ta7reKKr1iRn3vef9f-~KFPJZI7PB8YIJ02eTYQw1T0VGvf6a63HxGXFZHY6-yDfGJ1M3wzzqE6R9QdoIKL2spI2KeilMZULbaqVj2im4OIVI2USZsFHYy~VT2~eSwq6JKHxzPuYCDNkwAZ~VESZa3L~Bm-433u0Rp37w__" 
                    alt="img" 
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='lg:w-[50%] lg:h-[37rem] py-4 flex items-center justify-center'>
                <div className=' lg:w-[70%] m-auto'>
                    <h1 className='text-[#1B3C74] text-[2.5rem] font-medium'>Download the <br /> <span className=' text-[#2AA7FF]'>Medify</span> App</h1>
                    <p className=' mt-3'>Get the link to download the app</p>
                    <div className=' flex items-center gap-2 bg-[#fff]  rounded-lg shadow-sm mt-3 w-[80%]'>
                        <div className=' flex items-center justify-center pl-3'>
                            +91
                        </div>
                        <Input className = "border-none" />
                        <Button variant = "blue">
                            Send SMS
                        </Button>
                    </div>
                    <div className=' flex items-center gap-4 mt-4'>
                        <Button variant = "black" className = " h-[4rem]">
                            <img className='w-full h-full object-contain' src="https://s3-alpha-sig.figma.com/img/f21a/8caa/cc3e4dc3a228882459de2a4d49e45055?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oEKEyghZxsMvUChTaFLWyAY6gq8Ffycs2Nwa33A42bHOHECXStZ2vOyl2JPX3cM7ZEtNPPbx4GydJ43nIGNJO~DCQMyHB21Imcy6PXd6~TikqoM3wcYEB61OH4XIuR8-8h0AzKxxOB84OuMqrWyNXnWgx91jiiJ2ZU~bXhh6bL2C2XnOBUqvE-V8KOtgEE3TboytlPPp3cVAmJTcmXxd5lsMqadpPThiIQJy4t7VO2x3ckZUeA2BhTlSlqcEfwKMvzt1y1sTVXDDZWJL6DSdbFoV83NXKpDZRn217WW13q0mYqVEqUjKISCiapBAn5cWlbI0oEATRnOz18WVKXHg8A__" alt="" />
                        </Button>
                        <Button variant = "black" className = " h-[4rem]">
                            <img className='w-full h-full object-contain' src="https://s3-alpha-sig.figma.com/img/560b/7f8f/cb4223c4079dc306eb83f5c12e95e22f?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tq4Rho~nNLnN4WMoLbUhb90Fw37RrYvR-D~cGZGoiHeafPyB7Qmvpub5sAawxOplns8lQ1Lr1PzMsMu1EJpPgAAL700XfyhusdK7ATQVUUNvkz-R9qlq87IATnLGDuf29rNrziOYj6nNsIDVB-b0Z0OzyDJY5-8LucthqgFKpxo59OzSaqPekxT828PqvKD-4F1ZHjYIz6zakhqk00i0ZgPl239G7CTSLnCBUQB1sA72zqeiaVINPTbtDnUtYRoRc-RC1E14Myv2lUUOJW06I~4BIB3y~0CIeaT4lE7OC2FLzfGyJkumAUTpPe9nCRaM1jymST1uYizq~BBgI3v4tA__" alt="" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
