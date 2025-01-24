import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Layout from '../Layout/Layout'
import Menu from '../pages/Menu'
const UserRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
            {/* <Route index element={<HomePage />} /> */}
            <Route index element={<Menu />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default UserRoutes
