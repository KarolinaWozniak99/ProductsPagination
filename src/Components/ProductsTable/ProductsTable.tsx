import React from "react";
import { Products, Props, SingleProduct } from "../../App";
import { TableBody, TableContainer, TextField, Table, TableHead, TableCell, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';



const ProductsTable: React.FC=()=>{
    return(
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
                
            </TableBody>
        </Table>
    </TableContainer>
    )
}

export default ProductsTable;