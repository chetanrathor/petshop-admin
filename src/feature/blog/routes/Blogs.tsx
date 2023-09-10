import React, { useEffect } from 'react'
import ListLayout from '../../../components/layout/ListLayout'
import TableElement from '../../../shared/components/TableElement'
import { useAppDispatch, useAppSelector } from '../../../hooks/selctor.dispatch.hook'
import { useDispatch } from 'react-redux'
import { fetchBlogs } from '../state/blog.slice'

const Blogs = () => {
    const blogs = useAppSelector((state) => state.blog.blogs)
    const dispatch = useAppDispatch()
    const headings = ['id', 'createdAt']

    useEffect(() => {
        dispatch(fetchBlogs({ limit: 0, offset: 0, order: 'DESC' }))
    }, [])
    return (
        <ListLayout>
            <TableElement headingProps={headings} data={blogs}></TableElement>
        </ListLayout>
    )
}

export default Blogs