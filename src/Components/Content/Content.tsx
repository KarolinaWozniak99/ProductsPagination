import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Products, Props, SingleProduct } from "../../App";
import TableRow from '../TableRow/TableRow';


const Content: React.FC<Props>=({products})=>{
    const maxNum = products?.per_page;
    const ProductList = products?.data.map((el)=>el.name);
    const list = products?.data;

    {if(products!=undefined){
        return(
            <ul>
                {list!.map((el)=>{
                    return(
                        <TableRow name={el.name} id={el.id} year={el.year} color={el.color} key={el.id}/>
                    )
                })}
            </ul>
        
        )}
        else{
            return(
                <h1>List of products is</h1>
            )
        }
    }
    
}

export default Content;