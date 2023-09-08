import { Grid } from '@mui/material'
import React from 'react'
import PaginationElement from '../../shared/components/PaginationElement'
import TableElement from '../../shared/components/TableElement'
import { useAppSelector } from '../../hooks/selctor.dispatch.hook'

interface ListLayoutProps {
    children: React.ReactNode
}

const ListLayout = ({ children }: ListLayoutProps) => {
    const { loader } = useAppSelector((state) => state.loader)
    return (
        <Grid container flexDirection={'column'} rowGap={2}>
            <Grid item >
                {children}
            </Grid>
            {
                !loader && <Grid item alignSelf={'center'}>
                    <PaginationElement></PaginationElement>
                </Grid>
            }

        </Grid>
    )
}

export default ListLayout