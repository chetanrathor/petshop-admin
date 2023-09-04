import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogs from './Blogs'

const BlogRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<Blogs></Blogs>}></Route>
        </Routes>
    )
}

export default BlogRoutes