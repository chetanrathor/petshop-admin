import { Grid } from '@mui/material'
import React from 'react'
import PaginationElement from '../../shared/components/PaginationElement'
import TableElement from '../../shared/components/TableElement'

interface ListLayoutProps {
    children: React.ReactNode
}

const ListLayout = ({children}:ListLayoutProps) => {
    return (
        <Grid container flexDirection={'column'} rowGap={2}>
            <Grid item >
                {children}
            </Grid>
            <Grid item alignSelf={'center'}>
                <PaginationElement></PaginationElement>
            </Grid>
        </Grid>
    )
}

export default ListLayout