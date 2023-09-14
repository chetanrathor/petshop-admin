import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
const BrandAdd = () => {
    const [brandName, setBrandName] = useState('')
    return (
        <Grid width={'30%'} container flexDirection={'column'} bgcolor={'white'} boxShadow={'0px 0px 55px 0px rgba(0, 0, 0, 0.06)'} padding={5} borderRadius={'14px'}>
            <Grid item>
                <Typography variant='h4'>
                    Add Brand
                </Typography>
            </Grid>
            <Grid item container paddingY={5} justifyContent={'space-between'} gap={2}>
                <Grid width={'100%'}>
                    <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Brand Name</Typography>
                    <TextField value={brandName} onChange={(e) => { setBrandName(e.target.value) }} fullWidth ></TextField>
                </Grid>
                <Grid width={'100%'} justifySelf={'end'}>
                    <Button variant='contained' onClick={() => { }} >Add Brand</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default BrandAdd