import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

export const SearchComp = () => {
    return (
        <div className=' flex items-center mt-4 justify-between gap-[2rem] w-[80%] m-auto'>
            <div className='w-[33.3%]'>
                <main className='flex items-center bg-[#FAFBFE] border border-[#F0F0F0] px-2 rounded-md'>
                    <Search className='w-5 h-5 text-[#9CA3AF]' />
                    <Input placeholder = "state" className = "border-none bg-transparent" />
                </main>
            </div>
            <div className='w-[33.3%]'>
                <main className='flex items-center bg-[#FAFBFE] border border-[#F0F0F0] px-2 rounded-md'>
                    <Search className='w-5 h-5 text-[#9CA3AF]' />
                    <Input placeholder = "city" className = "border-none bg-transparent" />
                </main>
            </div>
            <div className='w-[33.3%]'>
                <main className=' flex items-center justify-end'>
                    <Button className = "w-[10rem]" variant = "blue">Search</Button>
                </main>
            </div>
        </div>
    )
}
