import React from 'react'
import TableElement from '../../../shared/components/TableElement'
import { Grid } from '@mui/material'
import PaginationElement from '../../../shared/components/PaginationElement'
import ListLayout from '../../../components/layout/ListLayout'

const Users = () => {
    return (
        // <Grid container flexDirection={'column'} rowGap={2}>
        //     <Grid item >
        //         <TableElement></TableElement>
        //     </Grid>
        //     <Grid item alignSelf={'center'}>
        //         <PaginationElement></PaginationElement>
        //     </Grid>
        // </Grid>
        <ListLayout>
            <TableElement></TableElement>
        </ListLayout>

    )
}

export default Users