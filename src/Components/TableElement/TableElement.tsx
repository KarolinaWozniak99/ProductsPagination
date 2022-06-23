import React from "react";
import { Products, Props, SingleProduct } from "../../App";
import { TableCell, TableRow} from "@mui/material";


const TableElement: React.FC<SingleProduct>=({name, id, year, color})=>{
    return(
        <TableRow>
            <TableCell sx={{backgroundColor: color}}>{name}</TableCell>
            <TableCell sx={{backgroundColor: color}}>{id}</TableCell>
            <TableCell sx={{backgroundColor: color}}>{year}</TableCell>
        </TableRow>
    )
}

export default TableElement;