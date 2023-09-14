import React from 'react'
import ListLayout from '../../../components/layout/ListLayout'
import TableElement from '../../../shared/components/TableElement'
import { Route, Routes } from 'react-router-dom'
import Appointment from './Appointment'

const AppointmentRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<Appointment />}></Route>
        </Routes>
    )
}

export default AppointmentRoutes