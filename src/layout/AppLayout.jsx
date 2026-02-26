import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      {/* common components */}
      <Navbar />
      
      {/* outlet */}
      <Outlet />

      <Footer />
    </div>
  );
}

export default AppLayout