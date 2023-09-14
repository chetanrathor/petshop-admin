import React from 'react';
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