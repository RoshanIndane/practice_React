import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setdata]=useState([])

  useEffect(()=>{
    getdata ()
  },[])

const getdata=()=>{
  axios.get("https://fakestoreapi.com/products").then((res)=>{
    setdata(res.data)
   // console.log(res.data)
  })
}

  return (
    <div className="App">

      <div id='main'>{data.map((e)=>
      <div id='child'><img src={e.image}></img>
      <h3>Product Name: {e.title}</h3>
      {/* <p>Discription: {e.description}</p> */}
      <h4>Price: {e.price}</h4>
      <p>Rating: {e.rating.rate}</p>

      
      </div>
      
      )}</div>

    </div>
  );
}

export default App;
