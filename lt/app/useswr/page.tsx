'use client'
import axios from 'axios'
import React from 'react'

import useSWR from 'swr'
const fetchData = async (url:string)=>{
    const res = await axios.get(url)
    //url ở đây là lấy từ url bên dưới, 2 cái là 1
    return res.data
} 
export default function page() {
const {data, error} = useSWR(
        "https://jsonplaceholder.typicode.com/users",
        fetchData,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
          }
    )
    if (error) return <div>Qua trinh lay du lieu that bai</div>
    if(!data) return <div>data loading...</div>
    console.log(data);
    
  return (
    
    <div>
        sử dụng useSWR
        {data.map((item:any)=>{
            return <li key={item.id}>{item.name}</li>
        })}
    </div>
  )
}
