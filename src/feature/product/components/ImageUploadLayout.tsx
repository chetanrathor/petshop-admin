import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import ImageElement from '../../../shared/components/ImageElement'
import { theme } from '../../../theme/theme'

type Properties = {
    children: React.ReactNode,
    imagePath: string
}

const ImageUploadLayout = ({ imagePath,children }: Properties) => {
    const [image, SetImage] = useState('')
    const primaryColor = theme.palette.primary.main

    const handelFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            if (e.target.files.length > 0) {
                const objectUrl = URL.createObjectURL(e.target.files[0])
                console.log('objectUrl', objectUrl)
                SetImage(objectUrl)

            }
        }
    }
    console.log('first', imagePath)
    return (
        <Grid item width={'25%'} sx={{ cursor: 'pointer' }} maxWidth={'218px'} height={'124px'} position={'relative'} borderRadius={'6px'} border={`1.5px dashed ${primaryColor}`} >
            {children}
            {imagePath &&
                <ImageElement  height='100%' width='100%' isPublicAsset={false} src={imagePath} style={{ position: 'absolute', top: 0, left: 0 }}></ImageElement>
            }

            {!imagePath &&
                <>
                    <Typography variant='h5' position={'absolute'} left={'25%'} top={'40%'}>
                        Upload Picture
                    </Typography>
                </>
            }

        </Grid>
    )
}

export default ImageUploadLayout