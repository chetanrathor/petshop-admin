import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import ProductDetail from './ProductDetail'
import ProductAdd from './ProductAdd'

const ProductRoute = () => {
    return (
        <Routes>
            <Route path='' element={<Product></Product>}></Route>
            <Route path=':id' element={<ProductDetail></ProductDetail>}></Route>
            <Route path='add' element={<ProductAdd></ProductAdd>}></Route>
        </Routes>
    )
}

export default ProductRoute