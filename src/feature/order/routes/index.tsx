import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Order from './Order'
import OrderDeatails from './OrderDeatails'

const OrderRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<Order></Order>}></Route>
            <Route path=':id' element={<OrderDeatails></OrderDeatails>}></Route>
        </Routes>
    )
}

export default OrderRoutes