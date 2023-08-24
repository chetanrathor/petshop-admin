import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../../theme/theme'
import ImageElement from '../../../shared/components/ImageElement'

const ConsultationDetails = () => {
    return (
        <Grid container flexDirection={'column'} paddingX={4} boxShadow={'0px 0px 55px 0px rgba(0, 0, 0, 0.06)'} borderRadius={2}>
            <Grid item container alignItems={'center'} justifyContent={'space-between'} paddingY={3}>
                <Grid item>
                    <Typography variant='h4'>
                        Appt. No. : #1532
                    </Typography>
                </Grid>
                <Grid item>
                    <Box paddingX={5} paddingY={1} bgcolor={'#EBF6EE'}  >
                        <Typography variant='h4' color={'#34A853'} fontWeight={500}>Completed</Typography>
                    </Box>
                </Grid>
            </Grid>
            <ImageElement isPublicAsset src='images/divider.svg' width='100%'></ImageElement>
            <Grid item container flexDirection={'column'} marginBottom={5}>
                <Grid item paddingY={3}>
                    <Typography variant='h5'>
                        Vet Detail
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



                </Grid>
            </Grid>
            <ImageElement isPublicAsset src='images/divider.svg' width='100%'></ImageElement>
            <Grid item container flexDirection={'column'} marginTop={5}>
                <Grid item paddingY={3}>
                    <Typography variant='h5'>
                        Vet Detail
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



                </Grid>
            </Grid>
            <Grid item container flexDirection={'column'} marginY   ={5}>
                <Grid item paddingY={3}>
                    <Typography variant='h5'>
                        Problem
                    </Typography>
                </Grid>
                <Grid item   >
                    <Typography variant='h6'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.  
                    </Typography>



                </Grid>
            </Grid>

        </Grid>
    )
}

export default ConsultationDetails