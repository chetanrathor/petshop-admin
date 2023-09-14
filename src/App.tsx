import React from 'react';
import './App.css';
import AppProvier from './provider/AppProvier';
import AppRoute from './routes';
function App() {
  return (
    <AppProvier>
      <AppRoute></AppRoute>
    </AppProvier>
  );
}
export default App;
