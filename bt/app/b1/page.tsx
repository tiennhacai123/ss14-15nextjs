import React from 'react'
async function getPost(){
    const res = await fetch(" https://jsonplaceholder.typicode.com/posts")
    const data = res.json();
    return data
}
export default async function page() {
    const posts = await getPost();
  return (
    <div>
        <b>List of posts</b>
        {posts.map((item:any)=>{
            return <li key={item.id}>{item.title}</li>
        })}
    </div>
  )
}
