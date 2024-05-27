import axios from 'axios'
import  { useState } from 'react'

export const useFetch = () => {
    const [data , setData] = useState([])

    const fetchData = async(url) => {
        try {
            const res = await axios.get(url)

            setData(res.data)
        } catch (error) {
            setData([])
        }
    }

    return [data , fetchData ]
}
