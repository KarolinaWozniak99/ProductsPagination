import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Form from './Components/Form/Form';
import Content from './Components/Content/Content';

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
      <Form/>
    </div>
  );
}

export default App;
