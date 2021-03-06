import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './header'
import Barsearch from './BarSearch'
import {HashRouter,  Route} from 'react-router-dom';
// import Chart from './chart';
import Visualiton from './visualiton';
// import {MultFrom} from './multFrom';
// import App from './main';
import App from './App';
import Step1 from './step1';
import Tables from './table';
import Search2 from './main';


// import Clean from './clean';

ReactDOM.render( <React.StrictMode >
    <HashRouter>
        <Header/>
        <div>
            <Route path="/" exact component={Search2} />
            <Route path="/visualition" exact  render={()=> <Visualiton namePath="file"/>} />
            <Route path= "/configuration" exact component={Step1}/>
            {/* <Route path="/main" exact  render={()=> <Visualiton namePath="database"/>} /> */}
            <Route path='/table' exact component={Tables} />

        </div>
    </HashRouter>
    {/* <Main/> */}
    {/* <Chart/> */}
    {/* <Visualiton/> */}
    {/* <Clean/> */}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();