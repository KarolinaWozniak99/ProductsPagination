import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Products } from '../TableElement/TableElement';
import TableElement from '../TableElement/TableElement';




interface myProps{
    pageNumber: number;
}

const Content: React.FC<myProps>=(pageNumber:myProps)=>{

    const [productOnPage, setProductOnPage] = useState<Products | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const list = productOnPage?.data;

     const productsPerPage = 5;


  useEffect(()=>{
    axios
      .get(
        `https://reqres.in/api/products?page=${pageNumber.pageNumber}&per_page=${productsPerPage}`
      )
      .then((res) => {
        setProductOnPage(res.data);
        setLoading(false)
      });
    },[pageNumber, productsPerPage])


    {if(!loading){
    return(
           <>
                {list!.map((el)=>{
                    return(
                        <TableElement name={el.name} id={el.id} year={el.year} color={el.color} key={el.id}/>
                    )
                })}
            </>
        )}
    else{
        return(
            <>
                Loading
            </>
        )
    }}

    
}

export default Content;