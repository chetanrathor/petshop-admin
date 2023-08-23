import { FormControl, Grid, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme'
import { SelectElement } from '../../shared/components/SelectElement'

const SectionHeading = () => {
    const secondaryColor = theme.palette.secondary.main
    return (
        <Grid container justifyContent={'space-between'} py={4} alignItems={'center'}>
            <Grid item>
                <Typography variant='h1' fontFamily={'Inter'} color={secondaryColor}>Vet</Typography>
            </Grid>
            <Grid item container lg={6} justifyContent={'end'} gap={3}>
                <Grid item lg={4}>
                    <SelectElement ></SelectElement>
                </Grid> 
                <Grid item lg={4}>
                    <SelectElement ></SelectElement>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default SectionHeading