import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';





function App() {

  const [data, setData]=useState([])

  useEffect(()=>{
    getdata()  },[]);


    const getdata = () =>{
      axios.get("https://show-art.herokuapp.com/").then((res)=>{
        setData(res.data.showArt)
        console.log(res.data.showArt);
      })
    }



  return (
    <div className="App">

      <table>
        <thead>
          <th>
            Art Title
          </th>
          <th>
            Artist Name
          </th>
          <th>
            Image
          </th>
          
          <th>
            City
          </th>
          <th>
            Country
          </th>
        </thead>
        <tbody>
          {data.map((e)=>
          <tr key={e._id}>
            <td>{e.art_name}</td>
            <td>{e.artist_name}</td>
            <td><img src={e.art_img}></img></td>
            <td>{e.city}</td>
            <td>{e.user_id.country}</td>

          </tr>
          )}
        </tbody>
      </table>


    </div>
  );
}

export default App;
