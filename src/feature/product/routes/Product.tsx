import React, { useEffect } from 'react'
import ListLayout from '../../../components/layout/ListLayout'
import TableElement from '../../../shared/components/TableElement'
import { useAppDispatch, useAppSelector } from '../../../hooks/selctor.dispatch.hook'
import { fetchProducts } from '../store/product-slice'

const Product = () => {

    const { products } = useAppSelector((state) => state.product)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts({ limit: 0, offset: 0, order: 'DESC' }))
    }, [])

    return (

        <ListLayout>
            <TableElement data={products}></TableElement>
        </ListLayout>

    )
}

export default Product