import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import { SelectComp } from './SelectComp'
import { useSearchParams } from 'react-router-dom'


export const SearchComp = ({
    onSearch,
}) => {
    
    const [searchParams , setSearchParams] = useSearchParams({
        state : "",
        city : "",
        onlyProductItems : true
    })

    const state = searchParams.get('state')
    const city = searchParams.get('city')

    const onStateChange = (text) =>{
        setSearchParams(prev => {
            prev.set('state' , text)
            return prev
        } , {replace : true})
    }

    const onCityChange = (text) => {
        setSearchParams(prev => {
            prev.set('city' , text)
            return prev
        } , {replace : true})
    }

    useEffect(() => {
        onSearch(state , city)
    } , [state , city])

    return (
        <div className=' flex items-center  justify-between gap-[2rem] w-[80%] m-auto'>
            <div className='w-[33.3%]'>
                <main className='flex items-center  rounded-md'>
                    <SelectComp 
                        value = {state}
                        onChange = {onStateChange}
                        placeName={"State"} 
                        url={'https://meddata-backend.onrender.com/states'}
                    />
                </main>
            </div>
            <div className='w-[33.3%]'>
                <main className='flex items-center rounded-md'>
                    <SelectComp 
                        value={city}
                        placeName={"City"} 
                        onChange={onCityChange}
                        url={`https://meddata-backend.onrender.com/cities/${state}`}
                    />
                </main>
            </div>
            <div className='w-[33.3%]'>
                <main className=' flex items-center justify-end'>
                    <Button 
                        // onClick = {() => onSearch(state , city)}
                        className = "w-[10rem]" 
                        variant = "blue"
                    >Search</Button>
                </main>
            </div>
        </div>
    )
}
