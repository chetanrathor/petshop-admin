import React, { useEffect, useState } from 'react'
import ListLayout from '../../../components/layout/ListLayout'
import TableElement from '../../../shared/components/TableElement'
import axios from 'axios'
import { getCategories } from '../api'
import { useAppDispatch, useAppSelector } from '../../../hooks/selctor.dispatch.hook'
import { fetchProductCategories } from '../state/category.slice'
import { setOffset } from '../../../store/pagination.slice'

const Category = () => {
    const { category, pagination } = useAppSelector((state) => state)
    const { categories } = category
    const { limit, offset, } = pagination
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setOffset(0))
        dispatch(fetchProductCategories({ limit, offset, order: 'DESC' }))
    }, [])
    useEffect(() => {
        dispatch(fetchProductCategories({ limit, offset, order: 'DESC' }))

    }, [offset])
    const headings = ['id', 'createdAt', 'name', 'status']
    return (
        <ListLayout>
            <TableElement headingProps={headings} data={categories}></TableElement>
        </ListLayout>
    )
}

export default Category


