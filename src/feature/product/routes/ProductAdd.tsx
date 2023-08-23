import { FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const ProductAdd = () => {
    return (
        <Grid container flexDirection={'column'} boxShadow={'0px 0px 55px 0px rgba(0, 0, 0, 0.06)'} padding={5} borderRadius={'14px'}>
            <Grid item>
                <Typography variant='h4'>
                    Add Product
                </Typography>
            </Grid>
            <Grid item container paddingY={5} justifyContent={'space-between'}>
                <Grid width={'48%'}>
                    <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Product Title/Name</Typography>
                    <TextField fullWidth ></TextField>
                </Grid>
                <Grid width={'48%'}>
                    <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Category</Typography>
                    {/* <TextField fullWidth ></TextField> */}
                    <FormControl fullWidth>
                        <Select >
                            <MenuItem>Dog</MenuItem>
                            <MenuItem>Dog</MenuItem>
                            <MenuItem>Dog</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid item container paddingBottom={5} justifyContent={'space-between'}>
                <Grid width={'48%'}>
                    <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Product Title/Name</Typography>
                    <TextField fullWidth ></TextField>
                </Grid>
                <Grid width={'48%'}>
                    <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Category</Typography>
                    {/* <TextField fullWidth ></TextField> */}
                    <FormControl fullWidth>
                        <Select >
                            <MenuItem>Dog</MenuItem>
                            <MenuItem>Dog</MenuItem>
                            <MenuItem>Dog</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductAdd