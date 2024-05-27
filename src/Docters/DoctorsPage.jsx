import React from 'react'
import { Hospital } from './Hospital'
import { SearchComp } from './SearchComp'
import { useFetch } from '@/Hook/useFetch'

const DoctorsPage = () => {
    const [data , fetchData] = useFetch()

    const handleFetchData = async (state , city) => {
        await fetchData(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)
    }

    return (
      <section >
          <div className='h-[5rem] bg-gradient-to-tr from-[#2AA7FF] to-[#0C8CE5] '>
            <div className='bg-[#fff] lg:block hidden py-6 px-6 rounded-lg w-[78.5%] shadow-md m-auto absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
              <SearchComp onSearch={handleFetchData} />
            </div>
          </div>
          <Hospital data={data} />
      </section>
    )
}

export default DoctorsPage