import React from 'react'
interface Properties {
    height: string,
    width: string,
    src: string,
    isPublicAsset: boolean
}

const ImageElement = ({ height, isPublicAsset, src, width }: Properties) => {

    const getSource = () => {
        if (isPublicAsset) {
            return `${process.env.PUBLIC_URL}/${src}`
        }
        return src
    }
    return (
        <img height={height} width={width} src={getSource()}></img>
    )
}

export default ImageElement