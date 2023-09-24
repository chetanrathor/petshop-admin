import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export type MenuItem = {
    value: string,
    name: string
}

export type SelectElementProperties = {
    menuItem: MenuItem[],
    handleChange: (e: SelectChangeEvent) => void,
    value?: string,
    inputLabel?: string
}
export const SelectElement = ({ menuItem, handleChange, value, inputLabel }: SelectElementProperties) => {
    return (
        <FormControl sx={{ m: 1, width: '100%',maxHeight:'250px' }} >
            <InputLabel id="demo-simple-select-label">{inputLabel}</InputLabel>
            <Select 
            
                fullWidth
                value={value}
                onChange={(e) => { handleChange(e) }}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                onScroll={() => { console.log('scroll') }}
            >
                {menuItem.map((item) => {
                    return (
                        <MenuItem key={item.value} value={item.value} >{item.name}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}
