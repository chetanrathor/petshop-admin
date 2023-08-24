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

const TableElement = () => {
    const navigate = useNavigate()
    return (
        <TableContainer component={Paper} sx={{ maxHeight: 440 }} onClick={() => { navigate('/consultations/1') }}>
            <Table stickyHeader sx={{ minWidth: 650, }} aria-label="simple table">
                <TableHead >
                    <TableRow >
                        <TableCell sx={{ borderTopRightRadius: 2, backgroundColor: 'rgb(255,245,248)' }}><Typography variant='h5'>Dessert (100g serving)</Typography> </TableCell>
                        <TableCell sx={{ backgroundColor: 'rgb(255,245,248)', }}><Typography variant='h5'>Dessert (100g serving)</Typography> </TableCell>
                        <TableCell sx={{ backgroundColor: 'rgb(255,245,248)', }}><Typography variant='h5'>Dessert (100g serving)</Typography> </TableCell>
                        <TableCell sx={{ backgroundColor: 'rgb(255,245,248)', }}><Typography variant='h5'>Dessert (100g serving)</Typography> </TableCell>
                        <TableCell sx={{ backgroundColor: 'rgb(255,245,248)', }}><Typography variant='h5'>Dessert (100g serving)</Typography> </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                        >
                            <TableCell component="th" scope="row">
                                <Typography variant='h6'>{row.name}</Typography>
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableElement