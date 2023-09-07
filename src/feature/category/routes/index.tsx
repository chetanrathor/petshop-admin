import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from './Category'
import CategoryAdd from './CategoryAdd'

const CategoryRoute = () => {
    return (
        <Routes>
            <Route path='' element={<Category></Category>}></Route>
            <Route path='add' element={<CategoryAdd></CategoryAdd>}></Route>
        </Routes>
    )
}

export default CategoryRoute