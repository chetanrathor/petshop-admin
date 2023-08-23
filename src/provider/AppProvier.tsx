import { ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from '../theme/theme'
import { BrowserRouter as Router } from 'react-router-dom'

type AppProviderProperties = {
    children: React.ReactNode
}
const AppProvier = ({ children }: AppProviderProperties) => {
    return (
        <ThemeProvider theme={theme}>
            <Router>{children}</Router>
        </ThemeProvider>
    )
}

export default AppProvier