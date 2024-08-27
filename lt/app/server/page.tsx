import React from 'react'

async function getUser(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data
}

export default async function page() {
    //tao function lấy data ở trên server (API)
    const users = await getUser();
  return (
    <div>
        data fetching
        {users.map((item:any)=>{
            return <li key={item.id}>{item.name}</li>
        })}
    </div>
  )
}
