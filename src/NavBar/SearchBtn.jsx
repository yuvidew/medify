import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { SearchIcon } from 'lucide-react'
import { SearchComp } from '@/Home/SearchComp'


export const SearchBtn = () => {
    return (
        <Dialog>
        <DialogTrigger>
            <Button variant = "secondary">
                <SearchIcon className='text-[#2AA8FF]' />
            </Button>
        </DialogTrigger>
        <DialogContent>
            <SearchComp colsNum={1} />
        </DialogContent>
        </Dialog>

    )
}
