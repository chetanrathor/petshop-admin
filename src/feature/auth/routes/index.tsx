import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<>Login</>}></Route>
        </Routes>
    )
}

export default AuthRoutes