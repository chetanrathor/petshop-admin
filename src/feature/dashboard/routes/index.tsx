import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard'

const DashboardRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard></Dashboard>}></Route>
        </Routes>
    )
}

export default DashboardRoute