import React from "react";
import { TableCell, TableRow, Typography} from "@mui/material";
import { idText } from "typescript";

export interface Products{
    data: Array<SingleProduct>;
    page: number;
    per_page: number;
    total_pages: number;
    total: number;
  }
  
  export interface SingleProduct{
    id?: number;
    name?: string;
    year?: number;
    color?: string;
  }
  
  export interface Props{
    products: Products | undefined;
  }
  
  export interface Selection{
    productSelected: boolean;
  }

const TableElement: React.FC<SingleProduct>=({name, id, year, color})=>{
    return(
        <TableRow>
            <TableCell sx={{backgroundColor: color}}>
               <Typography variant="subtitle1">
                    {name}
                </Typography> 
            </TableCell>
            <TableCell sx={{backgroundColor: color}}>
            <Typography variant="subtitle1">
                    {id}
                </Typography> 
            </TableCell>
            <TableCell sx={{backgroundColor: color}}>
            <Typography variant="subtitle1">
                    {year}
                </Typography> 
            </TableCell>
        </TableRow>
    )
}

export default TableElement;