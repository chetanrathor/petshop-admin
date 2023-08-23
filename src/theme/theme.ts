import { createTheme } from "@mui/material";

export const theme = createTheme({

    palette: {
        primary: {
            main: '#F84072'
        },
        secondary: {
            main: '#2D2F55'
        },
        warning: {
            main: '#FFFFFF',
            "100": "#68686A",
            "200": "#B6B8BB",
            "300": "#ECECF2",
            "400": "#1B1D21"
        },
        success: {
            main: '#28A745'
        },
        info: {
            main: "#FF710A"
        },
        common: { black: '#1B1D21', white: '#FFFFFF' }

    },
    typography: {
        h1: {
            fontFamily: 'Nunito',
            fontWeight: '700',
            fontSize: '32px',
            color:'#                                                                                            2D2F55'

        },
        h2: {
            fontFamily: 'Nunito',
            fontWeight: '',
            fontSize: '22px'

        },
        h3: {
            fontFamily: 'Nunito',
            fontWeight: '700',
            fontSize: '20px'
        },
        h4: {
            fontFamily: 'Nunito',
            fontWeight: '700',
            fontSize: '18px'
        },
        h5: {
            fontFamily: 'Nunito',
            fontWeight: '700',
            fontSize: '16px',
            color:'#2D2F55'
        },
        h6: {
            fontFamily: 'Nunito',
            fontWeight: '500',
            fontSize: '15px',
            color:'#1B1D21'
        },
        body1: {
            fontFamily: 'Nunito',
            fontWeight: '700',
            fontSize: '14px'
        },


    },
    direction: "ltr"

})