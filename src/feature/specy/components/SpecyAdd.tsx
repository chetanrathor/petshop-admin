import { Grid, Typography, TextField, FormControl, Select, MenuItem, Button } from '@mui/material'
import React, { useState } from 'react'
import { useAppDispatch } from '../../../hooks/selctor.dispatch.hook'
import { addSpecy } from '../api'
import { createSpecy } from '../state/specy.slice'

const SpecyAdd = () => {
    const [specyName, setSpecyName] = useState('')
    const dispatch = useAppDispatch()

    return (
        <Grid width={'30%'} container flexDirection={'column'} bgcolor={'white'} boxShadow={'0px 0px 55px 0px rgba(0, 0, 0, 0.06)'} padding={5} borderRadius={'14px'}>
            <Grid item>
                <Typography variant='h4'>
                    Add Specy
                </Typography>
            </Grid>
            <Grid item container paddingY={5} justifyContent={'space-between'} gap={2}>
                <Grid width={'100%'}>
                    <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Specy Name</Typography>
                    <TextField value={specyName} onChange={(e) => { setSpecyName(e.target.value) }} fullWidth ></TextField>
                </Grid>
                <Grid width={'100%'} justifySelf={'end'}>
                    <Button variant='contained' onClick={() => { dispatch(createSpecy({ name: specyName })) }} >Add Specy</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SpecyAdd