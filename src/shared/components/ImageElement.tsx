import { Grid, SxProps, Theme } from '@mui/material'
import React, { CSSProperties } from 'react'
interface Properties {
    height?: string,
    width?: string,
    src: string,
    isPublicAsset: boolean,
    style?: CSSProperties

}

const ImageElement = ({ height, isPublicAsset, src, width, style }: Properties) => {

    const getSource = () => {
        if (isPublicAsset) {
            return `${process.env.PUBLIC_URL}/${src}`
        }
        return src
    }
    return (

        <img height={height} width={width} style={style} src={getSource()}></img>

    )
}

export default ImageElement