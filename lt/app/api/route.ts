import { NextResponse } from "next/server";

// tao ra cac phuong thuc
export async function GET(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()
    return NextResponse.json(data);
    
}