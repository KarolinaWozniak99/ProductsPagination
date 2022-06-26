import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { Grid} from '@mui/material';
import ProductsTable from './Components/ProductsTable/ProductsTable';
import InputForm from './Components/InputForm/InputForm';
import PaginationButtons from './Components/PaginantionButtons/PaginationButtons';
import axios from 'axios';

function App() {

  const [isSelected, setIsSelected] = useState<boolean>(false);
  const[id, setId] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(()=>{
    axios
      .get( `https://reqres.in/api/products`)
      .then((res)=>setTotalProducts(res.data.total))
  })

  return (
    <div className="App">
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12}>
          <Header/>
        </Grid>
        <Grid item xs={12}>
          <InputForm setIsSelected={setIsSelected} setId={setId}/>
        </Grid>
        <Grid item xs={12}>
          <ProductsTable isSelected={isSelected} id={id} pageNumber={pageNumber}/>
        </Grid>
        <Grid item xs={12}>
          {(id===0) &&(
            <PaginationButtons pageNumber={pageNumber} setPageNumber={setPageNumber} totalProducts={totalProducts}/>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
