import { Pagination } from '@mui/material'
import React from 'react'

const PaginationElement = () => {
    return (
        <Pagination count={10} color="primary" defaultPage={1} onChange={(e, page) => { console.log('page', page) }} />
    )
}

export default PaginationElement