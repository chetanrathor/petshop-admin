import PersonIcon from '@mui/icons-material/Person';
import { Box, Grid, Typography } from '@mui/material';
import { theme } from '../../theme/theme';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const menus = [
    {
        id: 'dashboard',
        name: 'Dashboard',
        path: '/'
    },
    {
        id: 'users',
        name: 'Users',
        path: '/users'
    },
    {
        id: 'brands',
        name: 'Brands',
        path: '/brands'
    },
    {
        id: 'categories',
        name: 'Categories',
        path: '/categories'
    },
    {
        id: 'species',
        name: 'Species',
        path: '/species'
    },
    {
        id: 'blogs',
        name: 'Blogs',
        path: '/blogs'
    },
    {
        id: 'orders',
        name: 'Orders',
        path: '/orders'
    },
    {
        id: 'appointments',
        name: 'Appointments',
        path: '/appointments'
    },
    {
        id: 'consultancies',
        name: 'Consultancies',
        path: '/consultancies'
    }
]

const Sidebar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [currentRoute, setCurrentRoute] = useState('/dashboard')
    const isRouteActivated = (path: string) => {


     

            if (location.pathname === (path)) {
                return true
            }
        

        return false
    }
    const handelRouteChangeClick = (to: string) => {
        navigate(to)
    }


    return (
        <Box boxShadow={'0px 4px 40px 0px rgba(0, 0, 0, 0.06)'}>
            <Grid container paddingX={4} paddingTop={5} alignItems={'center'} columnGap={2}>
                <Grid item>

                    <img src='logo.svg'></img>
                </Grid>
                <Grid item>
                    <Typography variant='h1'> Just Pet</Typography>
                </Grid>
            </Grid>
            <Grid container flexDirection={'column'} gap={2} overflow={'auto'} height={'100%'}>
                <Grid item padding={4} borderRadius={3}>
                    <Grid container>

                        {
                            menus.map((item) => {
                                return (
                                    <Grid item sx={{ cursor: 'pointer' }} onClick={() => { handelRouteChangeClick(item.path) }} padding={2} width={'100%'} bgcolor={isRouteActivated(item.path) ? theme.palette.primary.main : ''} borderRadius={2} >
                                        <Grid container >
                                            <Grid item container gap={2}>
                                                <PersonIcon sx={{ color: isRouteActivated(item.path) ? '#FFF' : theme.palette.secondary.main }}></PersonIcon>
                                                <Typography variant='h5' color={isRouteActivated(item.path) ? '#FFF' : ''}>{item.name}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }
                        {/* <Grid item container gap={2}>
                        <PersonIcon sx={{ color: isRouteActivated('/vet') ? '#FFF' : theme.palette.secondary.main }}></PersonIcon>
                        <Typography variant='h5' color={isRouteActivated('/vet') ? '#FFF' : ''}>Users</Typography>
                    </Grid> */}
                    </Grid>
                </Grid>
            </Grid>
        </Box>


    )
}

export default Sidebar