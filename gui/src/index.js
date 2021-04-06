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

ReactDOM.render( <React.StrictMode >
    <HashRouter>
        <Header/>
        <div>
            <Route path="/" exact component={Barsearch} />
            <Route path="/visualition"  component={Visualiton} />
        </div>
    </HashRouter>
    {/* <Chart/> */}
    {/* <Visualiton/> */}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();