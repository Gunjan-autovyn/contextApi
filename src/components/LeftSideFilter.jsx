import React, { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import axios from 'axios';


export default function LeftSideFilter({filterCategories,setFilterCategories,filterPriceFrom,setFilterPriceFrom,filterPriceTo,setFilterPriceTo}) {
  const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
  ];

  const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: true },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: '2l', label: '2L', checked: false },
        { value: '6l', label: '6L', checked: false },
        { value: '12l', label: '12L', checked: false },
        { value: '18l', label: '18L', checked: false },
        { value: '20l', label: '20L', checked: false },
        { value: '40l', label: '40L', checked: true },
      ],
    },
  ];

  const [category,setCategory]=useState([]);
  const [brands,setBrands]=useState([]);
  const [products,setProducts]=useState([]);

  const filterCategory=(category_slug)=>{
    if(filterCategories.includes(category_slug)){
           filterCategories=filterCategories.filter((value)=>{
              if(value!=category_slug){
                return value;
              }
           })
    }else{
      filterCategories.push(category_slug);
    }

   const finalData=[...filterCategories];
    //  console.log(filterCategories)
        //  console.log(category_slug);
         setFilterCategories(finalData);
  }

  useEffect(()=>{
    axios.get('https://wscubetech.co/ecommerce-api/categories.php')
    .then((success)=>{
          //  console.log(success.data.data);
           setCategory(success.data.data);
    })
    .catch((error)=>{

    })
  },[])


  useEffect(()=>{
    axios.get('https://wscubetech.co/ecommerce-api/brands.php')
    .then((success)=>{
          //  console.log(success.data.data);
           setBrands(success.data.data);
    })
    .catch((error)=>{

    })
  },[])

  const priceFilter=(from,to)=>{
      setFilterPriceFrom(from)
     setFilterPriceTo(to)
  }

  // useEffect(()=>{
  //   axios.get('https://wscubetech.co/ecommerce-api/products.php')
  //   .then((success)=>{
  //          setProducts(success.data.data);
  //   })
  //   .catch((error)=>{

  //   })
  // },[])

  return (
    <form className="hidden lg:block">
        <Disclosure key="category" as="div" className="border-b border-gray-200 py-6">
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">category</span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                  {category.map((value, index) => (
                    <div key={index} className="flex gap-3">
                      <input
                      onClick={(()=>filterCategory(value.slug))}
                        id={`filter-${value.id}`}
                        name=""
                        type="checkbox"
                        // defaultChecked={category.checked}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`filter-${value.id}`}
                        className="text-sm text-gray-600"
                      >
                        {value.name}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure key="brands" as="div" className="border-b border-gray-200 py-6">
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">Brands</span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                  {brands.map((value, index) => (
                    <div key={index} className="flex gap-3">
                      <input
                        id={`filter-${value.id}`}
                        name=""
                        type="checkbox"
                        // defaultChecked={category.checked}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`filter-${value.id}`}
                        className="text-sm text-gray-600"
                      >
                        {value.name}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>


        {/* <Disclosure key="products" as="div" className="border-b border-gray-200 py-6">
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">Products</span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                  {products.map((value, index) => (
                    <div key={index} className="flex gap-3">
                      <input
                        id={`filter-${value.id}`}
                        name=""
                        type="checkbox"
                        // defaultChecked={category.checked}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`filter-${value.id}`}
                        className="text-sm text-gray-600"
                      >
                        {value.name}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure> */}


        <Disclosure key="price" as="div" className="border-b border-gray-200 py-6">
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">Price</span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                <div className="flex items-center gap-x-3"  onClick={()=>priceFilter(0,250)}>
                  <input
                    id=" 0 - 250"
                    name="push-notifications"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label htmlFor="  0 - 250" className="block text-sm/6 font-medium text-gray-900">
                    Rs 0 - Rs 250
                  </label>
                </div>
                </div>
              </Disclosure.Panel>

              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                <div className="flex items-center gap-x-3"  onClick={()=>priceFilter(250,500)}>
                  <input
                    id=" 250 -  500"
                    name="push-notifications"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label htmlFor=" 250 -  500" className="block text-sm/6 font-medium text-gray-900">
                    Rs 250 - Rs 500
                  </label>
                </div>
                </div>
              </Disclosure.Panel>


              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                <div className="flex items-center gap-x-3"  onClick={()=>priceFilter(500,750)}>
                  <input
                    id=" 500 - 750"
                    name="push-notifications"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label htmlFor="  500 -  750" className="block text-sm/6 font-medium text-gray-900">
                    Rs 500 - Rs 750
                  </label>
                </div>
                </div>
              </Disclosure.Panel>

              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                <div className="flex items-center gap-x-3"  onClick={()=>priceFilter(750,1000)}>
                  <input
                    id=" 750 - 1000"
                    name="push-notifications"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label htmlFor=" 750 - 1000" className="block text-sm/6 font-medium text-gray-900">
                    Rs 750 - Rs 1000
                  </label>
                </div>
                </div>
              </Disclosure.Panel>


              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                <div className="flex items-center gap-x-3"  onClick={()=>priceFilter(1001)}>
                  <input
                    id="1001"
                    name="push-notifications"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label htmlFor="1001" className="block text-sm/6 font-medium text-gray-900">
                    Rs 1000 - Above
                  </label>
                </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>



        <Disclosure key="Rating" as="div" className="border-b border-gray-200 py-6">
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">Rating</span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                    <div className="flex gap-3">
                      <input
                        id=""
                        name=""
                        type="checkbox"
                        // defaultChecked={category.checked}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="1 star"
                        className="text-sm text-gray-600"
                      >
                       1 star
                      </label>
                    </div>
                </div>
              </Disclosure.Panel>

              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                    <div className="flex gap-3">
                      <input
                        id=""
                        name=""
                        type="checkbox"
                        // defaultChecked={category.checked}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="2 star"
                        className="text-sm text-gray-600"
                      >
                       2 star
                      </label>
                    </div>
                </div>
              </Disclosure.Panel>


              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                    <div className="flex gap-3">
                      <input
                        id=""
                        name=""
                        type="checkbox"
                        // defaultChecked={category.checked}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="3 star"
                        className="text-sm text-gray-600"
                      >
                       3 star
                      </label>
                    </div>
                </div>
              </Disclosure.Panel>

              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                    <div className="flex gap-3">
                      <input
                        id=""
                        name=""
                        type="checkbox"
                        // defaultChecked={category.checked}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="4 star"
                        className="text-sm text-gray-600"
                      >
                       4 star
                      </label>
                    </div>
                </div>
              </Disclosure.Panel>


              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                    <div className="flex gap-3">
                      <input
                        id=""
                        name=""
                        type="checkbox"
                        // defaultChecked={category.checked}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="5 star"
                        className="text-sm text-gray-600"
                      >
                       5 star
                      </label>
                    </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    </form>
  );
}
