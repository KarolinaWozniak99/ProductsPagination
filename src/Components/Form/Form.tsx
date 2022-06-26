import React, { useState, useEffect } from "react";
import axios from "axios";
import { SingleProduct } from "../TableElement/TableElement";
import TableElement from "../TableElement/TableElement";

interface myProps{
    isSelected: boolean;
    id:number;
}

const Form: React.FC<myProps>=({isSelected, id}:myProps)=>{

    const [singleProduct, setSingleProduct] = useState<SingleProduct>({name:'', id:0, year:0, color:''})
   

    console.log("Form id"+id)

    useEffect(()=>{
        if(isSelected){
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
        <TableElement id={singleProduct.id} name={singleProduct.name} year={singleProduct.year} color={singleProduct.color}/>
    )
}

export default Form;