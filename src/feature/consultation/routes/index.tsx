import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Consultation } from './Consultation'
import ConsultationDetails from './ConsultationDetails'

const ConsultationRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<Consultation></Consultation>}></Route>
            <Route path=':id' element={<ConsultationDetails></ConsultationDetails>}></Route>
        </Routes>
    )
}

export default ConsultationRoutes 