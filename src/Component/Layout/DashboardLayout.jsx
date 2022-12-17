import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default DashboardLayout