import { Grid } from '@mui/material'
import React from 'react'
import Sidebar from '../../shared/components/Sidebar';
import Header from '../UI/Header';
import SectionHeading from '../UI/SectionHeading';
import TableLoader from '../UI/TableLoader';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../hooks/selctor.dispatch.hook';
type MainLayoutProps = {
    children: React.ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
    const { loader } = useAppSelector((state) => state.loader)

    const GetChild = () => {
        if (loader) {
            return <TableLoader />
        } else {
            return children
        }
    }
    return (
        <Grid container>
            <Grid item width={300} height={'95vh'} ><Sidebar></Sidebar></Grid>
            <Grid item width={'80%'} >
                <Header></Header>
                <Grid height={'80vh'} overflow={'auto'} paddingX={5}>
                    <SectionHeading></SectionHeading>
                    {children}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MainLayout