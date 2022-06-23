import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Products, Props, SingleProduct } from "../../App";
import TableElement from '../TableElement/TableElement';
import { Button, Card, Grid, TableHead} from '@mui/material';
import Table from '@mui/material/Table/Table';  //<table> z html
import TableContainer from "@mui/material/TableContainer/TableContainer";
import TableBody from '@mui/material/TableBody/TableBody'; // <tbody> 
import TableRow from '@mui/material/TableRow/TableRow';
import TableCell from "@mui/material/TableCell/TableCell";
import Paper from '@mui/material/Paper';
import Fade from "@mui/material/Fade";


const Content: React.FC=()=>{
    // const maxNum = products?.per_page;
    // const ProductList = products?.data.map((el)=>el.name);
    // const list = products?.data;

    const [productOnPage, setProductOnPage] = useState<Products | undefined>(undefined);
    const [pageNumber, setPageNumber] = useState(1);
    const list = productOnPage?.data;

    const totalPages = 3;
    const productsPerPage = 5;

    const nextClickHandler = () =>{
        if(pageNumber!=totalPages){
            setPageNumber(pageNumber+1)
        }
    }

    const prevClickHandler = () =>{
        if(pageNumber>0){
            setPageNumber(pageNumber-1)
        }
    }

  useEffect(()=>{
    axios
      .get(
        `https://reqres.in/api/products?page=${pageNumber}&per_page=${productsPerPage}`
      )
      .then((res) => {
        setProductOnPage(res.data);
      });
    },[pageNumber, productsPerPage])

    // if(productOnPage!=undefined){
    //     totalPages = Math.ceil(productOnPage!.total/productsPerPage);
    // }

    {if(list!=undefined){
        return(
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={8}>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{fontWeight: 'bold'}}>Id</TableCell>
                                <TableCell style={{fontWeight: 'bold'}}>Name</TableCell>
                                <TableCell style={{fontWeight: 'bold'}}>Year</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {list!.map((el)=>{
                                return(
                                    <TableElement name={el.name} id={el.id} year={el.year} color={el.color} key={el.id}/>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                </Grid>
                <Grid item xs={8}>
                    <Button variant="contained" onClick={()=>prevClickHandler()} disabled={pageNumber===1}>Previous</Button>
                    <Button variant="contained" onClick={()=>nextClickHandler()} disabled={pageNumber===totalPages}>Next</Button>
                </Grid>
            </Grid>
        )}
    else{
        return(
            <>
            </>
        )
    }}

    
}

export default Content;