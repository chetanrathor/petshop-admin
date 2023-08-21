import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputElement from './shared/components/InputElement';
import { Box, Grid, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import PaginationElement from './shared/components/PaginationElement';
import { SelectElement } from './shared/components/SelectElement';
import TableElement from './shared/components/TableElement';
import Sidebar from './shared/components/Sidebar';

function App() {
  return (
    <ThemeProvider theme={theme}>

      <Box padding={5}>

        {/* <InputElement required={false} error={false} name='n' type='text' value={''} helperText='' id=''  ></InputElement> */}
        {/* <PaginationElement></PaginationElement> */}
        {/* <SelectElement></SelectElement> */}
        {/* <TableElement></TableElement> */}
        <Grid container>
          <Grid item sx={{ width: '300px' }} border={1}>
            <Sidebar></Sidebar>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
