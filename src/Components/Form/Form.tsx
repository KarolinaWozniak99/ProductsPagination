import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { NumericLiteral } from "typescript";
import { Products, Props, SingleProduct } from "../../App";
import Content from "../Content/Content";
import TableRow from "../TableRow/TableRow";



const Form: React.FC<Props>=({products})=>{
    const inpputRef = useRef()
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
    console.log(singleProduct)
 

    return(
        <>
            <h2>Select id of post</h2>
            <input type="number" max={12} min={1} onChange={(e:any)=> {
                setId(e.target.value)
                setClicked(true)
                if(e.target.value===""){
                    setClicked(false)
                }
            }}/>
            {clicked && (
                <TableRow id={singleProduct.id} name={singleProduct.name} year={singleProduct.year} color={singleProduct.color}/>
            )}
            {!clicked &&(
                <Content products={products}/>
            )}
           
        </>
    )
}

export default Form;