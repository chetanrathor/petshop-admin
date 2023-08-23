import { Grid, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../../theme/theme'
import ImageElement from '../../../shared/components/ImageElement'

const OrderDeatails = () => {
    const secondaryColor = theme.palette.secondary.main
    const primaryColor = theme.palette.primary.main
    return (
        <Grid container padding={5} boxShadow={'0px 0px 55px 0px rgba(0, 0, 0, 0.06)'}>
            <Grid item paddingY={3}>
                <Typography variant='h4' color={secondaryColor}>
                    Order ID : #1532
                </Typography>
            </Grid>
            <ImageElement isPublicAsset src='images/divider.svg' width='100%'></ImageElement>
            <Grid item container flexDirection={'column'} >
                <Grid item paddingY={3}>
                    <Typography variant='h5'>
                        Shipping Details
                    </Typography>
                </Grid>
                <Grid item container justifyContent={'space-between'} >
                    {[1, 1, 1, 1,].map((item) => {
                        return (<Grid item lg={3}>
                            <Typography variant='h5' marginBottom={3} fontWeight={600}>
                                Name
                            </Typography>
                            <Typography variant='h6'>
                                Mike Amiri
                            </Typography>
                        </Grid>)
                    })}

                    {/* <Grid item lg={3}>
                        <Typography variant='h5' marginBottom={3}>
                            Name
                        </Typography>
                        <Typography variant='h6'>
                            Mike Amiri
                        </Typography>
                    </Grid>
                    <Grid item lg={3}>
                        <Typography variant='h5' marginBottom={3}>
                            Name
                        </Typography>
                        <Typography variant='h6'>
                            Mike Amiri
                        </Typography>
                    </Grid>
                    <Grid item lg={3}>
                        <Typography variant='h5' marginBottom={3}>
                            Name
                        </Typography>
                        <Typography variant='h6'>
                            Mike Amiri
                        </Typography>
                    </Grid> */}

                </Grid>
            </Grid>
            <Grid item>
                {/* Table will come */}
            </Grid>
            <ImageElement isPublicAsset src='images/divider.svg' width='100%'></ImageElement>
            <Grid item container justifyContent={'end'}>
                <Grid lg={3} container rowGap={3} marginTop={2}>
                    <Grid item container justifyContent={'space-between'}>
                        <Typography variant='h5' fontWeight={500}>
                            Subtotal
                        </Typography>
                        <Typography variant='h5' fontWeight={700}>
                            $39.62
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent={'space-between'}>
                        <Typography variant='h5' fontWeight={500}>
                            Shipping
                        </Typography>
                        <Typography variant='h5' fontWeight={700}>
                            $0.92
                        </Typography>
                    </Grid>

                    <ImageElement isPublicAsset src='images/divider.svg' height='2px' width='100%'></ImageElement>
                    <Grid item container justifyContent={'space-between'}>
                        <Typography variant='h4' fontWeight={700} color={'#1B1D21'}>
                            Order Total
                        </Typography>
                        <Typography variant='h2' fontWeight={800} color={primaryColor}>
                            $0.92
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default OrderDeatails