import { Input, TextField } from '@mui/material'

import React from 'react'

interface Properties {
    required?: boolean,
    type: 'text' | 'password' | 'number' | 'email',
    helperText?: string,
    error: boolean,
    value: string | number,
    onChange?: () => {},
    id?: string
    name: string,
    label?: string

}


const InputElement = ({ error, required, name, onChange, type, value, helperText, id, label }: Properties) => {

    return (
        <TextField fullWidth name={name} InputProps={{ style: { height: '50px', padding: 0 } }} sx={{ height: ' 50px' }} required={required} type={type} error={error} helperText={helperText} id={id} value={value} />
    )
}

export default InputElement