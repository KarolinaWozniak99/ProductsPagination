import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import { Grid } from '@mui/material';

export interface Products{
  data: Array<SingleProduct>;
  page: number;
  per_page: number;
  total_pages: number;
  total: number;
}

export interface SingleProduct{
  id: number;
  name: string;
  year: number;
  color: string;
}

export interface Props{
  products: Products | undefined;
}

function App() {

  return (
    <div className="App">
      <Grid container spacing={7} justifyContent="center">
        <Grid item xs={12}>
          <Header/>
        </Grid>
        <Grid item xs={12}>
          <Form/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
