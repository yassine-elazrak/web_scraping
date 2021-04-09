import React,{useState} from 'react'
import axios from 'axios';
import Button from '@material-ui/core/Button';


const Main = () => {

  const [response, setResponse] = useState([]);
  const handleRequest = ()=>{
    // axios.defaults.headers.post['Content-Type'] = 'application/json';

   
          
    axios.get('/hello').then(res=> {
      console.log("response", res.data)

    }).catch(error => console.log('error',error))

  };
  console.log("rende main");


  return (

    <div style={{backgroundColor:'red'}}>
      <h2>page test</h2>
      <hr/>
        <Button color='primary' variant='contained' onClick={handleRequest}>
          Request
        </Button>     
    </div>
  )
}

export default Main;