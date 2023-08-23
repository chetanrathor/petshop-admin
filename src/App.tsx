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
import AppRoute from './routes';
import AppProvier from './provider/AppProvier';
import { useLocation } from 'react-router-dom';

function App() {
 
  return (




    <AppProvier>
      <AppRoute></AppRoute>
    </AppProvier>

  );
}

export default App;
