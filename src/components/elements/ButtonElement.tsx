import { Button, SxProps, Theme, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import ImageElement from '../../shared/components/ImageElement';
import { theme } from '../../theme/theme';
type ButtonElementPops = {
    sx?: SxProps<Theme>;
    children?: React.ReactNode
}
const ButtonElement = ({ sx }: ButtonElementPops) => {
    const warning = theme.palette.warning.main
    return (
        <Button sx={{ paddingX: 3, paddingY: 2, borderRadius: 3 }} variant='contained' >
            <Grid2 container columnGap={2} alignItems={'center'}>
                <ImageElement src={'images/btn_icon.svg'} isPublicAsset={true} ></ImageElement>  <Typography variant='h5' color={warning}>Alex</Typography>
            </Grid2>
        </Button>
    )
}
export default ButtonElement