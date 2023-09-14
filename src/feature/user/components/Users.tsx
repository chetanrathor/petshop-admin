import React from 'react'
import TableElement from '../../../shared/components/TableElement'
import { Grid } from '@mui/material'
import PaginationElement from '../../../shared/components/PaginationElement'
import ListLayout from '../../../components/layout/ListLayout'
import SectionHeading from '../../../components/UI/SectionHeading'

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
        <>
            <ListLayout>
                <TableElement headingProps={[]} data={[]}></TableElement>
            </ListLayout>
        </>

    )
}

export default Users