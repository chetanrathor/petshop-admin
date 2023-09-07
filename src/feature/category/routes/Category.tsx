import React, { useEffect, useState } from 'react'
import ListLayout from '../../../components/layout/ListLayout'
import TableElement from '../../../shared/components/TableElement'
import axios from 'axios'
import { getCategories } from '../api'
import { useAppDispatch, useAppSelector } from '../../../hooks/selctor.dispatch.hook'
import { fetchProductCategories } from '../state/category.slice'

const Category = () => {
    const categories = useAppSelector((state) => state.category.categories)
    const dispatch = useAppDispatch()
    // const [categories, setcat] = useState<any>()

    // const getAll = () => getCategories({ limit: 0, offset: 0, order: 'ASC' }).then((r) => r)

    // console.log('categories', await getAll())

    // useEffect(() => {
    //     const res = getCategories({ limit: 0, offset: 0, order: 'ASC' }).then((r: any) => { setcat(r.data.response.data) })
    //     console.log('res================', res)
    //     // setcat(res.response.data)
    // }, [])
    useEffect(() => {
        dispatch(fetchProductCategories({ limit: 0, offset: 0, order: 'DESC' }))
    }, [])
    return (
        <ListLayout>
            <TableElement data={categories}></TableElement>
        </ListLayout>
    )
}

export default Category


