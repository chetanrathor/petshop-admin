import { Button, Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { SelectElement } from '../../shared/components/SelectElement'
import { RootState } from '../../store'
import { theme } from '../../theme/theme'
import { getLastFiveYears } from '../../utils'
import { setYear } from '../../feature/dashboard/state/dashboard.slice'
import ButtonElement from '../elements/ButtonElement'
import { useNavigate } from 'react-router-dom'

const DashboardFilters = () => {
    const dispatch = useDispatch()

    const years = getLastFiveYears()

    return (
        <>
            <Grid item lg={4}>
                <SelectElement  handleChange={(e) => { dispatch(setYear(Number(e.target.value))) }} menuItem={years}></SelectElement>
            </Grid>

        </>
    )
}
const UsersFilters = () => {
    const menuItems = [
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
                <SelectElement handleChange={() => { }} menuItem={menuItems}></SelectElement>
            </Grid>
        </>
    )
}
const ProductsFilters = () => {
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
    const petSpecies: any = []
    const categories: any = []
    const breedType: any = []
    const brands: any = []
    return (
        <>
            <Grid item lg={2}>
                <SelectElement handleChange={() => { }} menuItem={petSpecies}></SelectElement>
            </Grid>
            <Grid item lg={2}>
                <SelectElement handleChange={() => { }} menuItem={categories}></SelectElement>
            </Grid>
            <Grid item lg={2}>
                <SelectElement handleChange={() => { }} menuItem={breedType}></SelectElement>
            </Grid>
            <Grid item lg={2}>
                <SelectElement handleChange={() => { }} menuItem={brands}></SelectElement>
            </Grid>
            <Grid item lg={2}>
                <Button variant='contained' onClick={() => { navigate('products/add') }}>Add</Button>
            </Grid>
        </>
    )
}

const CategroriesFilters = () => {
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
        <Grid item lg={4}>
            <SelectElement handleChange={() => { }} menuItem={categoriesStatus}></SelectElement>
        </Grid>
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
    return (
        <Grid item lg={4}>
            <SelectElement handleChange={() => { }} menuItem={speciesStatus}></SelectElement>
        </Grid>
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
            <Grid item container lg={6} justifyContent={'end'} gap={3}>
                <Filters globalState={globalState} ></Filters>

            </Grid>
        </Grid>
    )
}

export default SectionHeading