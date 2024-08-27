import React from 'react'

async function getProducts(){
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json();
    return data
}
export default async function page() {
    // goi phuong thuc
    const products = await getProducts();
    
  return (
    <div>
        {products.map((item:any)=>{
            return <div key={item.id}>
                <p><b>Title</b> {item.title}</p>
                <p><b>Price</b> {item.price}</p>
                <p><img src={item.image} alt="" /></p>
            </div>
        })}
    </div>
  )
}
