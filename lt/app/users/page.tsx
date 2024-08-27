'use client'
import { Life_Savers } from 'next/font/google';
import React, { useEffect, useState } from 'react'

export default function page() {
    const [users, setUsers] = useState<any>([]);
    //nếu dùng .then .catch rồi thì không cần dùng ascyn await
    //day la client-side rendering dung useeffect dung useeffect
    useEffect(() =>{
        fetch("http://localhost:3000/api")
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            setUsers(data);            
        })
        .catch(err =>
            console.log("err",err)
        )
    },[])
  return (
    <div>
        danh sach users
        {users.map((item:any)=>{
            return <li key={item.id}>{item.name}</li>
        })}
    </div>
  )
}
