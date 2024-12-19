import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

export default function RightSideFilter({sorting,filterCategories,filterPriceTo, setFilterPriceTo,filterPriceFrom,setFilterPriceFrom}) {

  const[products,setProducts]=useState([]);

    useEffect(() => {
      axios.get('https://wscubetech.co/ecommerce-api/products.php',{
        params:{
          limit:15,
          sorting:sorting,
          categories:filterCategories.toString(),
          price_from:filterPriceFrom,
          price_to:filterPriceTo
        }
      })
        .then((success) => {
          setProducts(success.data.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }, [sorting,filterCategories,filterPriceFrom,filterPriceTo]); // Add the empty array here
    

  return (
    <>
     <div className="grid grid-cols-3 gap-5 lg:col-span-3">
      {
        products.map((v,i)=>{
          return(
            <ProductCard key={v.id || i} product={v}/>
          )
        })
      }
     </div>
    </>
  )
}
