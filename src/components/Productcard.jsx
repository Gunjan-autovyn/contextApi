import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from './context/Context'
import { toast } from 'react-toastify';


export default function ProductCard({product}) {
 let {cartItems,setCartItems}=useContext(context);
  const addToCart=(value)=>{


      var data={
        id:value.id,
        name:value.name,
        image:value.image,
        price:value.price,
        qty:1
      }
    var input=[data,...cartItems];
    setCartItems(input);

    localStorage.setItem('cartItems',JSON.stringify(input));

    toast.success("Sucessfully added to cart");
  }
  return (
    <>
    <div key={product.id} className="group relative">
        <img
            alt={product.name}
            src={product.image}
            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
            <div>
            <h3 className="text-sm text-gray-700">
                <Link to={`/product-detail/${product.id}`}>
                {product.name}
                </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.category_slug}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.price}</p>

            <button onClick={()=>addToCart(product)}  className="pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem]/5 font-semibold text-white hover:bg-indigo-500">Add to Cart</button>
        </div>
    
    </div>
    </>
  )
}
