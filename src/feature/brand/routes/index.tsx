import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Specy from './Specy'
import Brand from './Specy'

const BrandRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<Brand></Brand>}></Route>
        </Routes>
    )
}

export default BrandRoutes