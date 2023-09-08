import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Specy from './Brand'
import Brand from './Brand'

const BrandRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<Brand></Brand>}></Route>
        </Routes>
    )
}

export default BrandRoutes