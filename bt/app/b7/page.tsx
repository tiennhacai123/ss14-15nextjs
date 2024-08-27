import React from 'react';
import ProductFilter from './ProductFilter';

// Component chính (SSR)
export default async function Page() {
  // Thực hiện fetch dữ liệu trực tiếp trong component
  let products = [];
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    products = await res.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ProductFilter products={products} />
    </div>
  );
}
