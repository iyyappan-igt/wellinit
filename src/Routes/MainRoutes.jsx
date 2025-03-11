import React, { useEffect } from 'react'

import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom'
import About from '../Pages/About'
import Home from '../Pages/Home'
import CommonRoutes from './CommonRoutes'
import Athenapage from '../Pages/Athenapage'
import Service from '../Pages/Service'

export const ScrollTop = ()=>{
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [pathname])
}

function MainRoutes() {
    return (
         <BrowserRouter>
         <ScrollTop/>
         <Routes>
            <Route element={<CommonRoutes/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/athena' element={<Athenapage/>}/>
                <Route path='/service' element={<Service/>}/>
             </Route>
         </Routes>
         </BrowserRouter>
    )
}

export default MainRoutes
