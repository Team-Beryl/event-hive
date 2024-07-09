

import React from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

const Rootlayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>

        </div>
    )
}

export default Rootlayout