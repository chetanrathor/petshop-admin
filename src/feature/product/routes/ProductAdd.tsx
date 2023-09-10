import { Button, Checkbox, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { theme } from '../../../theme/theme'
import ImageElement from '../../../shared/components/ImageElement'
import { useAppDispatch, useAppSelector } from '../../../hooks/selctor.dispatch.hook'
import { fetchBrands } from '../../brand/state/brand.slice'
import { useFormik } from 'formik'
import ImageUploadLayout from '../components/ImageUploadLayout'
import { fetchProductCategories } from '../../category/state/category.slice'
import { fetchSpecies } from '../../specy/state/specy.slice'
import { BreedType } from '../../../constants/breed-type'
import { addOneProduct } from '../store/product-slice'
import { InStock } from '../../../constants/instock'

const ProductAdd = () => {
    const { brands } = useAppSelector((state) => state.brand)
    const { categories } = useAppSelector((state) => state.category)
    const { species } = useAppSelector((state) => state.specy)
    const breedTypes = [
        {
            name: 'Small',
            value: BreedType.SMALL
        }, {
            name: 'Large',
            value: BreedType.LARGE
        },
        {
            name: 'Medium',
            value: BreedType.MEDIUM
        }
    ]
    const inStocks = [
        {
            name: 'Available',
            value: InStock.AVAILABLE
        },
        {
            name: 'Un Available',
            value: InStock.UNAVAILABLE
        }
    ]
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchBrands({ limit: 0, offset: 0, order: 'DESC' }))
        dispatch(fetchProductCategories({ limit: 0, offset: 0, order: 'DESC' }))
        dispatch(fetchSpecies({ limit: 0, offset: 0, order: 'DESC', }))
    }, [])
    const primaryColor = theme.palette.primary.main
    const [images, SetImage] = useState({
        image1: '',
        image2: '',
        image3: '',
        image4: '',
    })
    const formik = useFormik({
        initialValues: {
            title: '',
            category: '',
            mrp: 0,
            sellingPrice: 0,
            specy: '',
            brand: '',
            discount: 0,
            breedType: '',
            inStock: InStock.AVAILABLE,
            isOnSale: false,
            description: ''


        },
        onSubmit: (values) => {
            console.log('values', values)
            const imageUrls = Object.values(images)
            dispatch(addOneProduct({
                ...values, productImages: [...imageUrls], name: values.title
            }))
        }
    })
    const handelFileChange = (e: React.ChangeEvent<HTMLInputElement>, imageKey: string) => {
        if (e.target.files) {
            if (e.target.files.length > 0) {
                const objectUrl = URL.createObjectURL(e.target.files[0])
                console.log('objectUrl', imageKey)
                SetImage((state) => {
                    return { ...state, [imageKey]: objectUrl }
                })
                // formik.setFieldValue(image1, objectUrl)
            }
        }
    }
    const categoryRef = useRef<Window>(null)
    const handleSelectScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        // Your scroll event handling logic goes here
        console.log('Select dropdown scrolled', categoryRef.current?.scrollY);
    };



    const { brand, category, mrp, specy, sellingPrice, title, discount, breedType, inStock, isOnSale, description } = formik.values
    const { handleChange } = formik
    return (
        <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit() }}>

            <Grid container flexDirection={'column'} boxShadow={'0px 0px 55px 0px rgba(0, 0, 0, 0.06)'} padding={5} borderRadius={'14px'}>
                <Grid item>
                    <Typography variant='h4'>
                        Add Product
                    </Typography>
                </Grid>
                <Grid item container paddingY={5} justifyContent={'space-between'}>
                    <Grid width={'48%'}>
                        <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Product Title/Name</Typography>
                        <TextField id='title' name='title' value={title} onChange={formik.handleChange} fullWidth ></TextField>
                    </Grid>
                    <Grid width={'48%'}>
                        <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Category</Typography>
                        <FormControl fullWidth  >
                            <Select id='category' ref={categoryRef} onScrollCapture={(e) => { handleSelectScroll(e) }} name='category' value={category} onChange={handleChange}>
                                {
                                    categories.map((item) => {
                                        return (
                                            <MenuItem value={item.id}>{item.name}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item container paddingBottom={5} justifyContent={'space-between'}>
                    <Grid width={'48%'}>
                        <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Maximum Retail Price</Typography>
                        <TextField id='mrp' type='number' name='mrp' onChange={handleChange} value={mrp} fullWidth ></TextField>
                    </Grid>
                    <Grid width={'48%'}>
                        <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Selling Price</Typography>
                        <TextField id='sellingPrice' type='number' name='sellingPrice' onChange={handleChange} value={sellingPrice} fullWidth ></TextField>
                    </Grid>

                </Grid>
                <Grid item container paddingBottom={5} justifyContent={'space-between'}>
                    <Grid width={'48%'}>
                        <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Pet Specy</Typography>
                        {/* <TextField fullWidth ></TextField> */}
                        <FormControl fullWidth>
                            <Select id='specy' name='specy' onChange={handleChange} value={specy} >
                                {
                                    species.map((item) => {
                                        return (
                                            <MenuItem value={item.id}>{item.name}</MenuItem>

                                        )
                                    })
                                }


                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid width={'48%'}>
                        <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Discount</Typography>
                        <TextField type='number' id='discount' name='discount' onChange={handleChange} value={discount} fullWidth ></TextField>
                    </Grid>

                </Grid>
                <Grid item container paddingBottom={5} justifyContent={'space-between'}>
                    <Grid width={'48%'}>
                        <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Brand</Typography>
                        {/* <TextField fullWidth ></TextField> */}
                        <FormControl fullWidth>
                            <Select id='brand' name='brand' onChange={handleChange} value={brand}>
                                {brands.map((item) => {
                                    return (
                                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                    )
                                })}

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid width={'48%'}>
                        <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Breed Type</Typography>
                        {/* <TextField fullWidth ></TextField> */}
                        <FormControl fullWidth>
                            <Select id='breedType' name='breedType' onChange={handleChange} value={breedType}>
                                {
                                    breedTypes.map((item) => {
                                        return (
                                            <MenuItem key={item.name} value={item.value}>{item.name}</MenuItem>

                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Grid>

                </Grid>
                <Grid item container paddingBottom={5} justifyContent={'space-between'}>
                    <Grid width={'48%'}>
                        <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Availablity</Typography>
                        {/* <TextField fullWidth ></TextField> */}
                        <FormControl fullWidth>
                            <Select id='inStock' name='inStock' onChange={handleChange} value={inStock}>
                                {inStocks.map((item) => {
                                    return (
                                        <MenuItem key={item.name} value={item.value}>{item.name}</MenuItem>
                                    )
                                })}

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid width={'48%'}>
                        <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>On Sale</Typography>
                        <Checkbox size='medium' id='isOnSale' name='isOnSale' onChange={handleChange} value={isOnSale} />
                    </Grid>

                </Grid>
                <Grid item container paddingBottom={5} justifyContent={'space-between'}>
                    <Grid width={'48%'}>
                        <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Availablity</Typography>
                        {/* <TextField fullWidth ></TextField> */}
                        <FormControl fullWidth>
                            <Select id='inStock' name='inStock' onChange={handleChange} value={inStock}>
                                {inStocks.map((item) => {
                                    return (
                                        <MenuItem key={item.name} value={item.value}>{item.name}</MenuItem>
                                    )
                                })}

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid width={'48%'}>
                        <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>On Sale</Typography>
                        <TextField id='description' name='description' value={description} onChange={handleChange}></TextField>
                    </Grid>

                </Grid>
                <Grid item container paddingBottom={5} justifyContent={'space-between'}>
                    <Typography variant='h5' marginBottom={1} color={'#68686A'} fontWeight={500}>Product Image</Typography>
                    <Grid container justifyContent={'space-between'} >

                        <ImageUploadLayout imagePath={images.image1}>
                            <input value={''} name='image1' type='file' height={'100%'} accept=".jpg,.png,.gif" onChange={(e) => { handelFileChange(e, 'image1') }} width={'100%'} style={{ position: 'relative', zIndex: '1', opacity: 0, height: '100%', width: '100%' }}></input>
                        </ImageUploadLayout>
                        <ImageUploadLayout imagePath={images.image2}>
                            <input value={''} type='file' height={'100%'} accept=".jpg,.png,.gif" onChange={(e) => { handelFileChange(e, 'image2') }} width={'100%'} style={{ position: 'relative', zIndex: '1', opacity: 0, height: '100%', width: '100%' }}></input>
                        </ImageUploadLayout>
                        <ImageUploadLayout imagePath={images.image3}>
                            <input value={''} type='file' height={'100%'} accept=".jpg,.png,.gif" onChange={(e) => { handelFileChange(e, 'image3') }} width={'100%'} style={{ position: 'relative', zIndex: '1', opacity: 0, height: '100%', width: '100%' }}></input>
                        </ImageUploadLayout>
                        <ImageUploadLayout imagePath={images.image4}>
                            <input value={''} type='file' height={'100%'} accept=".jpg,.png,.gif" onChange={(e) => { handelFileChange(e, 'image4') }} width={'100%'} style={{ position: 'relative', zIndex: '1', opacity: 0, height: '100%', width: '100%' }}></input>
                        </ImageUploadLayout>
                    </Grid>

                </Grid>
                <Grid item lg={4}>
                    <Button type='submit' fullWidth variant='contained'>Add</Button>

                </Grid>
            </Grid>
        </form>

    )
}

export default ProductAdd