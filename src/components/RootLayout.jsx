import React from 'react'
import Home from './Home'
import Navbar from './Menu'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { ToastContainer } from 'react-toastify'

export default function RootLayout() {
  return (
    <>
     <Header/>
     <Navbar/>
     <ToastContainer/>
     <Outlet/>

    </>
  )
}
