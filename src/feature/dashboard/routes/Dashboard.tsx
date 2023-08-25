import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../../theme/theme'
import { Chart } from 'react-chartjs-2'
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Tooltip, scales } from "chart.js";
const Dashboard = () => {
    const random = () => { return Math.floor(Math.random()) * 100 }
    const secondary = theme.palette.secondary.main
    const cards = [
        {
            name: 'Products',
            value: 15,
            id: 1
        },
        {
            name: 'Brands',
            value: 8,
            id: 2
        },
        {
            name: 'Orders',
            value: 124,
            id: 3
        },
        {
            name: 'Appointments',
            value: 27,
            id: 4
        },
        {
            name: 'Users',
            value: 357,
            id: 5
        },
        {
            name: 'Consultations',
            value: 42,
            id: 6
        },
        {
            name: 'Income',
            value: 7890,
            id: 7
        },
        {
            name: 'Profit',
            value: 7890,
            id: 8
        },
        {
            name: 'Loss',
            value: 7890,
            id: 9
        }
    ];
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                type: 'line' as const,
                label: 'Dataset 1',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                data: labels.map(() => random())
            },
            {
                type: 'bar' as const,
                label: 'Dataset 2',
                backgroundColor: 'rgb(75, 192, 192)',
                data: labels.map(() => random()),
                borderColor: 'white',
                borderWidth: 2,
            },
            {
                type: 'bar' as const,
                label: 'Dataset 3',
                backgroundColor: 'rgb(53, 162, 235)',
                data: labels.map(() => random())
            },
        ],
    };

    ChartJS.register(
        LinearScale,
        CategoryScale,
        BarElement,
        PointElement,
        LineElement,
        Legend,
        Tooltip
    );

    return (
        <Grid container  gap={2}>

            {
                cards.map((item) => {
                    return (

                        <Card sx={{ minWidth: 275, paddingX: 5, paddingY: 4, border: 'none' }} key={item.id}>
                            <CardContent sx={{ gap: 3 }}>
                                <Typography variant='h2' color={secondary} gutterBottom>
                                    {item.value}
                                </Typography>
                                <Typography variant="body2">
                                    {item.name}
                                </Typography>
                            </CardContent>

                        </Card>
                    )
                })
            }
            <Grid container>

                <Grid item lg={8}>
                    <Chart
                        type={'line'}
                        data={data}
                    />
                </Grid>
                <Grid >
                    <Chart
                        type={'line'}
                        data={data}
                    />
                </Grid>
            </Grid>



        </Grid>
    )
}

export default Dashboard