import React, { useEffect } from 'react'
import ListLayout from '../../../components/layout/ListLayout'
import TableElement from '../../../shared/components/TableElement'
import { useAppDispatch, useAppSelector } from '../../../hooks/selctor.dispatch.hook'
import { fetchProducts } from '../store/product-slice'

const Product = () => {

    const { pagination, product, centralSearch } = useAppSelector((state) => state)
    const { products } = product
    const { limit, offset } = pagination
    const dispatch = useAppDispatch()
    const headings = ['id', 'createdAt', 'status', 'name', 'mrp', 'sellingPrice', 'isOnSale']
    useEffect(() => {
        dispatch(fetchProducts({ limit, offset, order: 'DESC' }))
    }, [])
    useEffect(() => {
        const { search } = centralSearch
        dispatch(fetchProducts({ limit, offset, order: 'DESC', search }))

    }, [centralSearch])

    return (

        <ListLayout>
            <TableElement headingProps={headings} data={products}></TableElement>
        </ListLayout>

    )
}

export default Product