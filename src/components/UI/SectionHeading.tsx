import { Button, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BreedType } from '../../constants/breed-type';
import { ModalChild } from '../../constants/modal-child';
import { fetchBrands } from '../../feature/brand/state/brand.slice';
import { fetchProductCategories, setCategoryFilterStatus } from '../../feature/category/state/category.slice';
import { setYear } from '../../feature/dashboard/state/dashboard.slice';
import { setProductFilterBrand, setProductFilterBreedType, setProductFilterCategory, setProductFilterSpecy, setProductFilterStatus } from '../../feature/product/store/product-slice';
import { fetchSpecies } from '../../feature/specy/state/specy.slice';
import { setFilterStatus } from '../../feature/user/store/users-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/selctor.dispatch.hook';
import { SelectElement } from '../../shared/components/SelectElement';
import { RootState } from '../../store';
import { setModalChild, setOpen } from '../../store/modalSlice';
import { theme } from '../../theme/theme';
import { getLastFiveYears, geteSelectElementData } from '../../utils';

const DashboardFilters = () => {
    const dispatch = useDispatch()
    const selectedYear = useSelector((state: RootState) => state.dashboard.year)
    const years = getLastFiveYears()
    return (
        <>
            <Grid item lg={4}>
                <SelectElement value={selectedYear.toString()} handleChange={(e) => { dispatch(setYear(Number(e.target.value))) }} menuItem={years}></SelectElement>
            </Grid>
        </>
    )
}
const UsersFilters = () => {
    const dispatch = useAppDispatch()
    const status = useSelector((state: RootState) => state.users.filters.status)
    const menuItems = [
        {
            name: 'Active',
            value: 'Active'
        },
        {
            name: 'InActive',
            value: 'InActive'
        },
        {
            name: 'Deleted',
            value: 'Deleted'
        }
    ]
    return (
        <>
            <Grid item lg={4}>
                <SelectElement value={status} handleChange={(e) => { dispatch(setFilterStatus({ status: e.target.value })) }} menuItem={menuItems}></SelectElement>
            </Grid>
        </>
    )
}
const ProductsFilters = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchSpecies({ limit: 0, offset: 0, order: 'DESC' }))
        dispatch(fetchProductCategories({ limit: 0, offset: 0, order: 'DESC' }))
        dispatch(fetchBrands({ limit: 0, offset: 0, order: 'DESC' }))
    }, [dispatch])
    const { specy, category, brand } = useAppSelector((state) => state)
    const { species } = specy
    const { categories } = category
    const { brands } = brand
    const navigate = useNavigate()
    const productStatus = [
        {
            name: 'Active',
            value: 'Active'
        },
        {
            name: 'InActive',
            value: 'In Active'
        },
        {
            name: 'Deleted',
            value: 'Deleted'
        }
    ]
    const petSpecies = geteSelectElementData(species)
    const breedType = [
        {
            name:'Small',
            value:BreedType.SMALL
        },
        {
            name:'Medium',
            value:BreedType.MEDIUM
        },
        {
            name:'Large',
            value:BreedType.LARGE
        }
    ]
    return (
        <>
            <Grid item width={'14%'}>
                <SelectElement inputLabel={'Species'} handleChange={(e) => { dispatch(setProductFilterSpecy({ specy: e.target.value })) }} menuItem={petSpecies}></SelectElement>
            </Grid>
            <Grid item width={'14%'}>
                <SelectElement inputLabel={'Categories'} handleChange={(e) => { dispatch(setProductFilterCategory({ category: e.target.value })) }} menuItem={geteSelectElementData(categories)}></SelectElement>
            </Grid>
            <Grid item width={'14%'}>
                <SelectElement inputLabel={'Breed Type'} handleChange={(e) => { dispatch(setProductFilterBreedType({ breedType: e.target.value })) }} menuItem={breedType}></SelectElement>
            </Grid>
            <Grid item width={'14%'}>
                <SelectElement inputLabel={'Brands'} handleChange={(e) => { dispatch(setProductFilterBrand({ brand: e.target.value })) }} menuItem={geteSelectElementData(brands)}></SelectElement>
            </Grid>
            <Grid item width={'14%'}>
                <SelectElement inputLabel={'Status'} handleChange={(e) => { dispatch(setProductFilterStatus({ status: e.target.value })) }} menuItem={productStatus}></SelectElement>
            </Grid>
            <Grid item width={'14%'}>
                <Button fullWidth variant='contained' sx={{ paddingX: 3, paddingY: 2, marginX: 'auto' }} onClick={() => { navigate('products/add') }}>Add</Button>
            </Grid>
        </>
    )
}
const CategroriesFilters = () => {
    const dispatch = useAppDispatch()
    const categoriesStatus = [
        {
            name: 'Active',
            value: 'Active'
        },
        {
            name: 'InActive',
            value: 'In Active'
        },
        {
            name: 'Deleted',
            value: 'Deleted'
        }
    ]
    return (
        <>
            <Grid item lg={4}>
                <SelectElement handleChange={(e) => { setCategoryFilterStatus({ status: e.target.value }) }} menuItem={categoriesStatus}></SelectElement>
            </Grid>
            <Grid item lg={4}>
                <Button fullWidth variant='contained' sx={{ paddingX: 3, paddingY: 2, marginX: 'auto' }} onClick={() => { dispatch(setOpen(true)) }}>Add</Button>
            </Grid>
        </>
    )
}
const SpeciesFilters = () => {
    const speciesStatus = [
        {
            name: 'Active',
            value: 'Active'
        },
        {
            name: 'InActive',
            value: 'In Active'
        },
        {
            name: 'Deleted',
            value: 'Deleted'
        }
    ]
    const dispatch = useAppDispatch()
    return (
        <>
            <Grid item lg={4}>
                <SelectElement handleChange={() => { }} menuItem={speciesStatus}></SelectElement>
            </Grid>
            <Grid item lg={4}>
                <Button fullWidth variant='contained' sx={{ paddingX: 3, paddingY: 2, marginX: 'auto' }} onClick={() => { dispatch(setOpen(true)); dispatch(setModalChild(ModalChild.Specy)) }}>Add Specy</Button>
            </Grid >
        </>
    )
}
const BrandsFilter = () => {
    const brandsStatus = [
        {
            name: 'Active',
            value: 'Active'
        },
        {
            name: 'InActive',
            value: 'In Active'
        },
        {
            name: 'Deleted',
            value: 'Deleted'
        }
    ]
    const dispatch = useAppDispatch()
    return (
        <>
            <Grid item lg={4}>
                <SelectElement handleChange={() => { }} menuItem={brandsStatus}></SelectElement>
            </Grid>
            <Grid item lg={4}>
                <Button fullWidth variant='contained' sx={{ paddingX: 3, paddingY: 2, marginX: 'auto' }} onClick={() => { dispatch(setOpen(true)); dispatch(setModalChild(ModalChild.Brand)) }}>Add Specy</Button>
            </Grid >
        </>
    )
}
const Filters = (Properties: { globalState: string }) => {
    const { globalState } = Properties
    switch (globalState) {
        case 'Dashboard':
            return <DashboardFilters></DashboardFilters>
        case 'Users':
            return <UsersFilters></UsersFilters>
        case 'Products':
            return <ProductsFilters></ProductsFilters>
        case 'Categories':
            return <CategroriesFilters></CategroriesFilters>
        case 'Species':
            return <SpeciesFilters></SpeciesFilters>
        case 'Brands':
            return <BrandsFilter></BrandsFilter>
        default:
            return <DashboardFilters></DashboardFilters>
    }
}
const SectionHeading = () => {
    const globalState = useSelector((state: RootState) => state.global.activeState)
    const secondaryColor = theme.palette.secondary.main
    return (
        <Grid container justifyContent={'space-between'} py={4} alignItems={'center'}>
            <Grid item>
                <Typography variant='h1' fontFamily={'Inter'} color={secondaryColor}>{globalState}</Typography>
            </Grid>
            <Grid item container lg={globalState === 'Products' ? 10 : 6} justifyContent={'end'} gap={3} alignItems={'center'}>
                <Filters globalState={globalState} ></Filters>
            </Grid>
        </Grid>
    )
}
export default SectionHeading