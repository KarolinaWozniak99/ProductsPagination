import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Products, Props, SingleProduct } from "../../App";
import TableRow from '../TableRow/TableRow';
import { Button} from '@mui/material';


const Content: React.FC=()=>{
    // const maxNum = products?.per_page;
    // const ProductList = products?.data.map((el)=>el.name);
    // const list = products?.data;

    const [productOnPage, setProductOnPage] = useState<Products | undefined>(undefined);
    const [pageNumber, setPageNumber] = useState(1);
    const list = productOnPage?.data;

    const totalPages = 3;

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
        `https://reqres.in/api/products?page=${pageNumber}&per_page=5`
      )
      .then((res) => {
        setProductOnPage(res.data);
      });
    },[pageNumber])
  console.log(pageNumber)

    {if(list!=undefined){
        return(
            <>
                <ul>
                    {list!.map((el)=>{
                        return(
                            <TableRow name={el.name} id={el.id} year={el.year} color={el.color} key={el.id}/>
                        )
                    })}
                </ul>
                <Button variant="contained" onClick={()=>prevClickHandler()} disabled={pageNumber===1}>Previous</Button>
                <Button variant="contained" onClick={()=>nextClickHandler()} disabled={pageNumber===totalPages}>Next</Button>
            </>
        )}
    else{
        return(
            <h1>List of products is empty</h1>
        )
    }}

    
}

export default Content;