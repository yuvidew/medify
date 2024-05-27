import React, { useEffect } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {  MapPin } from 'lucide-react'
import { useFetch } from '@/Hook/useFetch'


export const SelectComp = ({
    placeName,
    url,
    value,
    onChange,
}) => {

    const [data , fetchData] = useFetch()

    useEffect(() => {
        fetchData(url)
    } , [url])

    const change = (data) => {
        onChange(data);
    }

    return (
        <Select onValueChange={change} defaultValue={value} >
        <SelectTrigger className="w-full bg-[#F0F0F0] ">
            <div className=' h-full flex items-center gap-3 text-[#ABB6C7]'>
            <MapPin className=' w-5 h-5' /><SelectValue placeholder={placeName} />
            </div>
        </SelectTrigger>
        <SelectContent>
            {data.length != 0  ? data.map((ele) => (
                <div key={ele}>
                    <SelectItem value={ele}>{ele}</SelectItem>
                </div>
            )) : (
                <p>Loading..</p>
            )}
        </SelectContent>
        </Select>

    )
}
