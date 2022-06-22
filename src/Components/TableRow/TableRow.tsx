import React from "react";
import { Products, Props, SingleProduct } from "../../App";


const TableRow: React.FC<SingleProduct>=({name, id, year, color})=>{
    return(
        <li>
            <div>{name}</div>
            <div>{id}</div>
            <div>{year}</div>
        </li>
    )
}

export default TableRow;