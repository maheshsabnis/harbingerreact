import logo from './logo.svg';
import './App.css';
import {HttpService} from './service/httpservice';
import {useEffect,useState} from 'react';

function App(props) {
  const serv = new HttpService();
  const [categories,updateCategories]=useState([]);
  const [products,updateProducts]=useState([]);

  useEffect(()=>{
    let catsPromise = serv.getCategories();
    let prdsPromise = serv.getProducts();
    Promise.all([catsPromise,prdsPromise])
           .then((responses)=>{
                updateCategories([...categories, responses[0].data]);
                updateProducts([...products, responses[1].data]);
           }).catch((error)=>{
             console.log();
           });
  },[]);


  return (
    <div className="App">
     <strong>{props.msg}</strong>
      {
        JSON.stringify(categories)
      }
    <hr/>
    {
      JSON.stringify(products)
    }
    </div>
  );
}

export default App;
