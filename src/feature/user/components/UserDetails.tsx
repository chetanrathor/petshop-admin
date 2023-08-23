import { Grid, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { theme } from '../../../theme/theme'
import { ProfileTab } from '../../../constants'
import InputElement from '../../../shared/components/InputElement'
type TabItems = {
    tab: ProfileTab
}
const TabItem = ({ tab }: TabItems) => {
    const [activeTab, set] = useState(ProfileTab.Profile)
    const getColor = (tab: ProfileTab) => {
        const primaryColor = theme.palette.primary.main
        if (activeTab === tab) {
            return primaryColor
        }
        return ''
    }
    return (
        <Typography variant='h3' color={getColor(tab)}>
            {tab}
        </Typography>
    )
}

const UserDetails = () => {



    return (
        <Grid paddingX={5}>
            <Grid container columnGap={13}>
                <Grid item >
                    <TabItem tab={ProfileTab.Profile}></TabItem>
                </Grid>
                <Grid item >
                    <TabItem tab={ProfileTab.Consultation}></TabItem>
                </Grid>
                <Grid item >
                    <TabItem tab={ProfileTab.Orders}></TabItem>
                </Grid>
                <Grid item >
                    <TabItem tab={ProfileTab.Shipping}></TabItem>
                </Grid>


            </Grid>
            <Grid container pt={5} flexWrap={'wrap'} columnGap={6} rowGap={10}>
                <Grid item minWidth={469}>
                    <TextField fullWidth label={'Email'} helperText={<Typography variant='h5' color={'#68686A'} fontWeight={500} >Email</Typography>} FormHelperTextProps={{ style: { marginTop: '-16%' } }}></TextField>
                </Grid>
                <Grid item lg={5}  minWidth={469}>
                    <TextField fullWidth label={'Email'} helperText={<Typography variant='h5' color={'#68686A'} fontWeight={500} >Email</Typography>} FormHelperTextProps={{ style: { marginTop: '-16%' } }}></TextField>
                </Grid>
                <Grid item lg={5}>
                    <TextField fullWidth label={'Email'} helperText={<Typography variant='h5' color={'#68686A'} fontWeight={500} >Email</Typography>} FormHelperTextProps={{ style: { marginTop: '-16%' } }}></TextField>
                </Grid>
                <Grid item lg={5}>
                    <TextField fullWidth label={'Email'} helperText={<Typography variant='h5' color={'#68686A'} fontWeight={500} >Email</Typography>} FormHelperTextProps={{ style: { marginTop: '-16%' } }}></TextField>
                </Grid>
                <Grid item lg={12}>
                    {/* <TextField fullWidth label={'Email'} helperText={<Typography variant='h5' color={'#68686A'} fontWeight={500} >Email</Typography>} FormHelperTextProps={{ style: { marginTop: '-15%' } }}></TextField> */}
                    {/* <TextArea minRows={8} minLength={150} resi></TextareaAutosize> */}
                    <TextField fullWidth label={'Email'} helperText={<Typography variant='h5' color={'#68686A'} fontWeight={500} >Email</Typography>} FormHelperTextProps={{ style: { marginTop: '-7%' } }}></TextField>

                </Grid>

                {/* <Grid item lg={5}>
                    <TextField fullWidth label={'Email'} helperText={<Typography variant='h5' color={'#68686A'} fontWeight={500} >Email</Typography>} FormHelperTextProps={{ style: { marginTop: -80 } }}></TextField>
                </Grid>
                <Grid item lg={5}>
                    <TextField fullWidth label={'Email'} helperText={<Typography variant='h5' color={'#68686A'} fontWeight={500} >Email</Typography>} FormHelperTextProps={{ style: { marginTop: -180 } }}></TextField>
                </Grid>
                <Grid item lg={5}>
                    <TextField fullWidth label={'Email'} helperText={<Typography variant='h5' color={'#68686A'} fontWeight={500} >Email</Typography>} FormHelperTextProps={{ style: { marginTop: -180 } }}></TextField>
                </Grid> */}
            </Grid>
        </Grid>
    )
}

export default UserDetails