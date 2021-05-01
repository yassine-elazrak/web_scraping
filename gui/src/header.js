import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {HashRouter , Link } from 'react-router-dom';
// import Brightness6Icon from '@material-ui/icons/Brightness6';
// import Button from '@material-ui/core/Button'
// import {Link} from 'react-router-dom';

function Header() {

  const classes = useStyles()
    return (
      <div className={classes.root}>
          <HashRouter>
          <nav>
            <ul className={classes.list}>
            <li className={classes.li}>
                <Link to='/main'>test</Link>
              </li>
              <li className={classes.li}>
                <Link to='/table'>Tweet</Link>
              </li>
              <li className={classes.li}>
                  <Link to='/configuration'>Configuration</Link>
              </li>
              <li className={classes.li}>
              <Link to="/visualition">visualition</Link>
              </li>
              <li className={classes.li}>
                <Link to="/">home</Link>
              </li>
            </ul>
          </nav>
          </HashRouter>
          <div className={classes.logo}>hello</div>
      </div>
      )
}

const useStyles = makeStyles({
  root:{
    // position:'fixed',
    // width:"100%",
    backgroundColor: 'darkcyan',
    display: 'flex',
    justifyContent:'flex-end',
    flexGrow: 1,
    minHeight:'20px',
    // marginBottom:'git 30px',

  },
  list:{ 
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',


  },
  li:{
    padding: '2px 22px',
    textDecoration:'none',
  }
  ,
  logo:{
    // alignSelf:'flex-end',
    // justifyContent: 'flex-end',

  }

});


export default Header;