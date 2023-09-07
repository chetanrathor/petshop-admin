import { Grid, Typography, TextField, FormControl, Select, MenuItem, Button } from '@mui/material'
import React, { useState } from 'react'
import { addCategory } from '../api'
import axios from 'axios'
import { useAppDispatch } from '../../../hooks/selctor.dispatch.hook'
import { fetchProductCategories } from '../state/category.slice'
import { setOpen } from '../../../store/modalSlice'

const CategoryAdd = () => {
    const [categoryName, setCategoryName] = useState('')
    const dispatch = useAppDispatch()

    const handelAddCategoryClick = async () => {
        await addCategory({ name: categoryName });
        dispatch(fetchProductCategories({ limit: 0, offset: 0, order: 'DESC' }))

    }
    return (
        <Grid width={'30%'} container flexDirection={'column'} bgcolor={'white'} boxShadow={'0px 0px 55px 0px rgba(0, 0, 0, 0.06)'} padding={5} borderRadius={'14px'}>
            <Grid item>
                <Typography variant='h4'>
                    Add Category
                </Typography>
            </Grid>
            <Grid item container paddingY={5} justifyContent={'space-between'} gap={2}>
                <Grid width={'100%'}>
                    <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Category Name</Typography>
                    <TextField value={categoryName} onChange={(e) => { setCategoryName(e.target.value) }} fullWidth ></TextField>
                </Grid>
                <Grid width={'100%'} justifySelf={'end'}>
                    <Button variant='contained' onClick={() => {
                        handelAddCategoryClick()
                    }} >Add Category</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CategoryAdd