import { Pagination } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/selctor.dispatch.hook'
import { setOffset } from '../../store/pagination.slice'

const PaginationElement = () => {
    const { limit, offset, totalPages } = useAppSelector((state) => state.pagination)
    const dispatch = useAppDispatch()
    const pageNumber = (total: number, limit: number, offset: number) => {
        let page = offset >= (limit * total)-1 ? -1 : totalPages;
        return page
    }
    return (
        <Pagination count={totalPages} color="primary" defaultPage={1} page={Math.ceil(offset / limit) + 1} onChange={(e, page) => { dispatch(setOffset(limit * (page - 1))) }} />
    )
}

export default PaginationElement