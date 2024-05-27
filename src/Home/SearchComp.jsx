import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

export const SearchComp = ({
    colsNum
}) => {
    return (
        <div className={` grid grid-cols-${colsNum} justify-between gap-[2rem] w-[80%] m-auto`}>
            <div className=''>
                <main className='flex items-center bg-[#F0F0F0] border border-[#F0F0F0] px-2 rounded-md'>
                    <Search className='w-5 h-5 text-[#9CA3AF]' />
                    <Input placeholder = "state" className = "border-none bg-transparent" />
                </main>
            </div>
            <div className=''>
                <main className='flex items-center bg-[#F0F0F0] border border-[#F0F0F0] px-2 rounded-md'>
                    <Search className='w-5 h-5 text-[#9CA3AF]' />
                    <Input placeholder = "city" className = "border-none bg-transparent" />
                </main>
            </div>
            <div className=''>
                <main className=' flex items-center justify-end'>
                    <Button className = "w-[10rem]" variant = "blue">Search</Button>
                </main>
            </div>
        </div>
    )
}
