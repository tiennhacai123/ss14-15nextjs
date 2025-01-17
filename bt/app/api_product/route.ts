import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(){
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json();
    return NextResponse.json(data);
}
