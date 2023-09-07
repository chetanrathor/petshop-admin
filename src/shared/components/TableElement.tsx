import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { theme } from '../../theme/theme';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { camelCaseToCapitalized } from '../../utils';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const TableElement = ({ data }: any) => {
    const navigate = useNavigate()
    console.log('data', data)
    const headings = data.length ? Object.keys(data[0]) : []
    console.log('headings', headings)
    const handelRowClick = (id: string) => {
        navigate(id)
    }

    return (
        <TableContainer component={Paper} sx={{ maxHeight: 440 }} >
            <Table stickyHeader sx={{ minWidth: 650, }} aria-label="simple table">
                <TableHead >
                    <TableRow >
                        {
                            headings.map((item: any) => {
                                return (<>

                                    <TableCell sx={{ borderTopRightRadius: 2, backgroundColor: 'rgb(255,245,248)' }}><Typography variant='h5'>{camelCaseToCapitalized(item)}</Typography> </TableCell>
                                </>)
                            })
                        }

                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row: any, index: any) => (
                        <TableRow
                            sx={{ cursor: 'pointer' }}
                            onClick={() => { handelRowClick(row['id']) }}
                            key={row.name}
                        >
                            {
                                headings.map((col) => {
                                    return (<>
                                        <TableCell component="th" scope="row">
                                            <Typography variant='h6'>{(col !== 'id' ? row[col] : index+1)}</Typography>
                                        </TableCell>
                                    </>)
                                })
                            }


                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableElement