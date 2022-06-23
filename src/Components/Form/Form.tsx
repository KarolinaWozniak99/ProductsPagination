import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { NumericLiteral } from "typescript";
import { Products, Props, SingleProduct } from "../../App";
import Content from "../Content/Content";
import TableElement from "../TableElement/TableElement";
import { TableBody, TableContainer, TextField, Table, TableHead, TableCell, TableRow } from "@mui/material";

const Form: React.FC=()=>{
    const [singleProduct, setSingleProduct] = useState<SingleProduct>({name:'', id:0, year:0, color:''})
    const [clicked, setClicked] = useState(false)
    const[id, setId] = useState(0)

    useEffect(()=>{
        if(clicked){
            axios
            .get(
                `https://reqres.in/api/products/${id}`
            )
            .then((res) => {
                setSingleProduct(res.data.data);
            });
        }
    },[id])
 
    return(
        <>
            <TextField
                type="number"
                label="Id"
                InputProps={{
                    inputProps: { 
                        max: 12, min: 1
                    }
                }}
                onChange={(e:any)=> {
                    setId(e.target.value)
                    setClicked(true)
                    if(e.target.value==""){
                        setClicked(false)
                    }
                }}
            />
            {clicked && (
                <TableContainer>
                    <Table>
                    <TableHead>
                            <TableRow>
                                <TableCell style={{fontWeight: 'bold'}}>Id</TableCell>
                                <TableCell style={{fontWeight: 'bold'}}>Name</TableCell>
                                <TableCell style={{fontWeight: 'bold'}}>Year</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableElement id={singleProduct.id} name={singleProduct.name} year={singleProduct.year} color={singleProduct.color}/>
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
            {!clicked &&(
                <Content/>
            )}
           
        </>
    )
}

export default Form;