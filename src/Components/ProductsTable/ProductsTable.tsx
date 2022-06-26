import React from "react";
import { TableBody, TableContainer, Table, TableHead, TableCell, TableRow , Grid} from "@mui/material";
import Form from "../Form/Form";
import Paper from '@mui/material/Paper';
import Content from "../Content/Content";


interface myProps{
    isSelected: boolean;
    id:number;
    pageNumber: number;
}


const ProductsTable: React.FC<myProps>=({isSelected, id, pageNumber})=>{
    

    return(
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={10} md={8} lg={6}>
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
                        {isSelected && (
                            <Form isSelected={isSelected} id={id}/>
                        )}
                        {!isSelected && (
                            <Content pageNumber={pageNumber}/>
                        )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default ProductsTable;