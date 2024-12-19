import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Banner from './Banner'
import BestsellingProducts from './BestsellingProducts'

export default function Home() {

  return (
    <>
     <Banner/>
     <BestsellingProducts title="Best selling products" type="1"/>
     <BestsellingProducts title="top rated products" type="2"/>
     </>
  )
}
