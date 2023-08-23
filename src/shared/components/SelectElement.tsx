import { FormControl, FormHelperText, MenuItem, SxProps, Theme } from '@mui/material'
import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select';
export const SelectElement = () => {
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (
        <FormControl sx={{ m: 1, width: '100%' }} >
            <Select

                fullWidth
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            {/* <FormHelperText>Without label</FormHelperText> */}
        </FormControl>
    )
}
