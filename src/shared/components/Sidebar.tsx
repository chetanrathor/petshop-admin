import PersonIcon from '@mui/icons-material/Person';
import { Grid, Typography } from '@mui/material';
import { theme } from '../../theme/theme';
import { useState } from 'react';
const menus = [
    {
        id: 'dashboard',
        name: 'Dashboard',
        path: '/dashboard'
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
    // const location = useLocation()
    const [currentRoute, setCurrentRoute] = useState('/dashboard')
    const isRouteActivated = (path: string) => {
        // const currentPath = '/'
        if (currentRoute === path) {
            return true
        }
        return false
    }


    return (

        <Grid container flexDirection={'column'} gap={2} overflow={'scroll'} height={'85vh'}>
            <Grid item padding={4} bgcolor={isRouteActivated('/vet') ? theme.palette.primary.main : ''} borderRadius={3}>
                <Grid container>

                    {
                        menus.map((item) => {
                            return (
                                <Grid item onClick={()=>{setCurrentRoute(item.path)}}  padding={4} width={'100%'} bgcolor={isRouteActivated(item.path) ? theme.palette.primary.main : ''} borderRadius={3} >
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

    )
}

export default Sidebar