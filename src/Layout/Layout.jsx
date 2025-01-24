import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <div className="flex">
        <main className=" bg-gray-100">
          <Outlet />
        </main>
      </div>
      <Footer />

     
    </div>
  )
}

export default Layout
