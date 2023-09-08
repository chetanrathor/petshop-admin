import React, { useEffect } from 'react'
import ListLayout from '../../../components/layout/ListLayout'
import TableElement from '../../../shared/components/TableElement'
import { useAppDispatch, useAppSelector } from '../../../hooks/selctor.dispatch.hook'
import { fetchBrands } from '../state/brand.slice'

const Brand = () => {
    const brands = useAppSelector((state) => state.brand.brands)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchBrands({ limit: 0, offset: 0, order: 'DESC' }))
    }, [])
    console.log('brands==============================', brands)
    return (
        <ListLayout>
            <TableElement data={brands}></TableElement>
        </ListLayout>
    )
}

export default Brand