import React from 'react'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Home from '../Pages/Home'
import CommonRoutes from './CommonRoutes'

function MainRoutes() {
    return (
         <BrowserRouter>
         <Routes>
            <Route element={<CommonRoutes/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
             </Route>
         </Routes>
         </BrowserRouter>
    )
}

export default MainRoutes
