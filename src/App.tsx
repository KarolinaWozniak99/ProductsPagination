import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Form from './Components/Form/Form';
import Content from './Components/Content/Content';

export interface Products{
  data: Array<SingleProduct>;
  page: number;
  per_page: number;
  total_pages: number;
  total: number;
}

export interface SingleProduct{
  id: number;
  name: string;
  year: number;
  color: string;
}

export interface Props{
  products: Products | undefined;
}



function App() {

  const [products, setProducts] = useState<Products | undefined>(undefined);


  useEffect(()=>{
    axios
      .get(
        `https://reqres.in/api/products?page=2`
      )
      .then((res) => {
        setProducts(res.data);
      });
  },[])
  console.log(products)
  //products to jest caaaały obiekt który się pobiera, wszystko wszystko


//ten props products={products} w formie nie bedzie potrzebny bo tam się pobiera po id
  return (
    <div className="App">
      
      <Form products={products}/>
      {/* <Content products={products}/> */}
    </div>
  );
}

export default App;
