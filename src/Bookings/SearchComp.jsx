import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

export const SearchComp = () => {
    return (
        <div className=' absolute w-[60%] bg-white right-0 flex items-center gap-3 shadow-lg px-5 py-6 rounded-md top-[70%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 '>
            <Input 
                placeholder = "Search By Hospital"
                className = "bg-[#F0F0F0]"
            />
            <Button variant = "blue"  className = " w-[14rem]" >
                <Search className=' h-5 w-5 mr-2' />
                Search
            </Button>
        </div>
    )
}
