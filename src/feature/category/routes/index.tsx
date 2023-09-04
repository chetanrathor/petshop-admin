import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from './Category'

const CategoryRoute = () => {
    return (
        <Routes>
            <Route path='' element={<Category></Category>}></Route>
        </Routes>
    )
}

export default CategoryRoute