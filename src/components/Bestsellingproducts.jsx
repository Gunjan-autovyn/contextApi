import React, { useState } from "react"
import ProductCard from "./ProductCard"

  
  export default function BestsellingProducts({title, type}) {

    const[products,setProducts]=useState([])

    const getProduct=async()=>{
      let products=await fetch('https://dummyjson.com/products');
      let productss = await products.json();
      setProducts(productss.products);
      // console.log(productss);
    }
    getProduct();
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900">{title}</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => {
              return(
                <ProductCard  product={product}/>
              )
            }
            )}
          </div>
        </div>
      </div>
    )
  }
  
