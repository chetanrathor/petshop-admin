import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Specy from './Specy'

const SpecyRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<Specy></Specy>}></Route>
        </Routes>
    )
}

export default SpecyRoutes