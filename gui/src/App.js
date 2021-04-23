import React ,{useEffect,useState}from 'react';

import axios from 'axios';

const App = () => {
  const [item , setItem] = useState({});
  const data={startTime:'yassine',size:['q','w']}
  useEffect(() => {
    // axios.get('/search',{startTime:'yassine',size:'33'})
    axios({
      method: 'post',
      url: '/search',
      headers: {
        'Content-type': 'application/json'
        },
      data:data
    })
    .then(res =>{
      console.log(res);
      setItem(res);
    })
    .catch(err => console.log(err))
  },[])
  return (
    <div>
      <h1>hello test</h1>
      {/* <h1>{item}</h1> */}
      
    </div>
  )
}

export default App
