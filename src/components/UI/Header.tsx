import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, TextField } from '@mui/material';
import { useAppDispatch } from '../../hooks/selctor.dispatch.hook';
import { setCentralSearch } from '../../store/centralSearch';
import ButtonElement from '../elements/ButtonElement';
const Header = () => {
    const dipatch = useAppDispatch()
    return (
        <Grid container paddingRight={5} paddingLeft={15} paddingY={3} justifyContent={'space-between'} width={'100%'} boxShadow={' 0px 4px 66px 0px rgba(0, 0, 0, 0.06)'}>
            < Grid item lg={6} >
                <TextField placeholder='Search' fullWidth sx={{ backgroundColor: '#F7F8F9', height: '50px', border: 'none' }}
                    InputProps={{
                        startAdornment: (
                            <SearchIcon sx={{ padding: 1 }}></SearchIcon>
                        ),
                    }}
                    onChange={(e) => { dipatch(setCentralSearch({ search: e.target.value })) }}
                ></TextField>
            </Grid >
            <ButtonElement ></ButtonElement>
        </Grid >
    )
}
export default Header