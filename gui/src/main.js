
// <Plot
//         data={[
//           {
//             x: [1, 2, 3],
//             y: [2, 6, 3],
//             type: 'scatter',
//             mode: 'lines+markers',
//             marker: {color: 'red'},
//           },
//           {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
//         ]}
//         layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
//       />

// import React,{useState} from 'react'
// import axios from 'axios';
// import Button from '@material-ui/core/Button';


// const Main = () => {

//   const [response, setResponse] = useState([]);
//   const handleRequest = ()=>{
//     // axios.defaults.headers.post['Content-Type'] = 'application/json';

   
          
//     axios.get('/hello').then(res=> {
//       console.log("response", res.data)

//     }).catch(error => console.log('error',error))

//   };
//   console.log("rende main");


//   return (

//     <div style={{backgroundColor:'red'}}>
//       <h2>page test</h2>
//       <hr/>
//         <Button color='primary' variant='contained' onClick={handleRequest}>
//           Request
//         </Button>     
//     </div>
//   )
// }

// export default Main;






// import React from 'react';
// import {makeStyles}  from '@material-ui/core/styles';
// import {Chart, ChartPlotly} from './chart';



// const Main = ()=>{

//   const classes = useStyles();
  
//   return(
//     <div className={classes.root}>
//       <div className={classes.item1}>
//         <ChartPlotly/>
//       </div>
//       <div className={classes.item1}>
//       <ChartPlotly/>
//       </div>
//       <div className={classes.item2}>
//         item3
//       </div>
//       <div className={classes.item2}>
//         item4
//       </div>
//     </div>
//   )
// }

// export default Main;

// const useStyles = makeStyles({
//   root:{
//     width:'100%',
//     backgroundColor:'#444',
//     display:'flex',
//     flexDirection:'row',
//     // flexWrap:'wrap',
//   },
//   item1:{
//   backgroundColor:'white',
//   flexGrow:'1',
//   // flexBasis:'50%',
//   // maxWidth:'50%',

//   },
//   item2:{
//     backgroundColor:'white',
//     flexGrow:'1',
//     // flexBasis:'50%',
  
//     },
// })

import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

// interface IProps {
//     data?: number[];
// }

/* Component */

// export const MyD3Component = (props) => {
//     /* The useRef Hook creates a variable that "holds on" to a value across rendering
//        passes. In this case it will hold our component's SVG DOM element. It's
//        initialized null and React will assign it later (see the return statement) */
//     const d3Container = useRef(null);

//     /* The useEffect Hook is for running side effects outside of React,
//        for instance inserting elements into the DOM using D3 */
//     useEffect(
//         () => {
//             if (props.data && d3Container.current) {
//                 const svg = d3.select(d3Container.current);

//                 // Bind D3 data
//                 const update = svg
//                     .append('g')
//                     .selectAll('text')
//                     .data(props.data);

//                 // Enter new D3 elements
//                 update.enter()
//                     .append('text')
//                     .attr('x', (d, i) => i * 25)
//                     .attr('y', 40)
//                     .style('font-size', 24)
//                     .text((d) => d);

//                 // Update existing D3 elements
//                 update
//                     .attr('x', (d, i) => i * 40)
//                     .text((d) => d);

//                 // Remove old D3 elements
//                 update.exit()
//                     .remove();
//             }
//         },

//         /*
//             useEffect has a dependency array (below). It's a list of dependency
//             variables for this useEffect block. The block will run after mount
//             and whenever any of these variables change. We still have to check
//             if the variables are valid, but we do not have to compare old props
//             to next props to decide whether to rerender.
//         */
//         [props.data, d3Container.current])

//     return (
//         <svg
//             className="d3-component"
//             width={400}
//             height={200}
//             ref={d3Container}
//         />
//     );
// }

// /* App */
// const MyApp = () => {
//     return (
//         <div className="my-app">
//             <MyD3Component data={[1,2,3]}/>
//         </div>
//     )
// }

const MyApp = () => {
  const ref = useRef()
  useEffect(() => {
    const svgElement = d3.select(ref.current)
    svgElement.append("circle")
    .attr("cx", 150)
    .attr("cy", 70)
    .attr("r",  50)
  }, [])
  return (
    <svg
      ref={ref}
    />
  )
}

export default MyApp;