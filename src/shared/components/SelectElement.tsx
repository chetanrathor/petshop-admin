import { FormControl, FormHelperText, InputLabel, MenuItem, SxProps, Theme } from '@mui/material'
import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export type MenuItem = {
    value: string,
    name: string
}

export type SelectElementProperties = {
    menuItem: MenuItem[],
    handleChange: (e: SelectChangeEvent) => void,
    value?: string,
    inputLabel?:string
}
export const SelectElement = ({ menuItem, handleChange, value,inputLabel }: SelectElementProperties) => {
    return (
        <FormControl sx={{ m: 1, width: '100%' }} >
            <InputLabel id="demo-simple-select-label">{inputLabel}</InputLabel>
            <Select
              
                fullWidth
                value={value}
                onChange={(e) => { handleChange(e) }}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}

            >
                {menuItem.map((item) => {
                    return (
                        <MenuItem key={item.name} value={item.value} >{item.name}</MenuItem>
                    )
                })}
            </Select>
            {/* <FormHelperText>Without label</FormHelperText> */}
        </FormControl>
    )
}
