import React, {useEffect} from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import { Outlet, useLocation } from 'react-router-dom'

const DashboardLayout = () => {
  let location = useLocation();

useEffect(() => {
    console.log("aa")
  }, [location]);
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default DashboardLayout