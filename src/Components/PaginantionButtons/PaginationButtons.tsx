import React from "react";
import { Grid, Button, ButtonGroup } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface myProps{
    setPageNumber: any;
    pageNumber: number;
    totalProducts: number;
}

const PaginationButtons: React.FC<myProps>=({ pageNumber, setPageNumber, totalProducts}:myProps)=>{

    const productsPerPage = 5;
    const totalPages = Math.ceil(totalProducts/productsPerPage);

    
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
    
    return(

    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={4}>
        
            <ButtonGroup variant="text" aria-label="text button group">
                <Button onClick={()=>prevClickHandler()} disabled={pageNumber===1}><ArrowBackIosNewIcon fontSize="small"/>Previous</Button>
                <Button onClick={()=>nextClickHandler()} disabled={pageNumber===totalPages}>Next<ArrowForwardIosIcon fontSize="small"/> </Button>
            </ButtonGroup>
                
        </Grid>
    </Grid>
    )
}

export default PaginationButtons;