import React, { useState, useEffect } from "react";
import axios from 'axios';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";
import { v4 } from 'uuid';
import background from './undraw_Project_completed_re_pqqq.svg'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  root: {
    backgroundColor: '#eceff0',
    padding: '18px',

  },
});

export default function Tables() {
  const classes = useStyles();
  const handleurl = () => { };
  const [rows, setRows] = useState([])

  useEffect(() => {
      async function getData()
      {
        const res = await axios({
        method: 'get',
        url: '/tweet',
        headers: {
          'Content-type': 'application/json'
          },

        })
        setRows(res.data.data)
      }
      getData()
  },[])


  return (
    <div className={classes.root} style={{ backgroundImage: `url(${background})` }}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tweets</StyledTableCell>
              {/* <StyledTableCell align="right">tweet</StyledTableCell> */}
              <StyledTableCell align="left">Username</StyledTableCell>
              <StyledTableCell align="left"> Date</StyledTableCell>
              <StyledTableCell align="right">Sentiment</StyledTableCell>
              <StyledTableCell align="left">Topic</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.uid}>
                <StyledTableCell component="th" scope="row">
                  {row.tweet}
                </StyledTableCell>
                {/* <StyledTableCell align="right">{row.tweet}</StyledTableCell> */}
                <StyledTableCell align="left">{row.username}</StyledTableCell>
                <StyledTableCell align="left">{row.date}</StyledTableCell>
                <StyledTableCell align="left">{row.sentiment}</StyledTableCell>
                <StyledTableCell align="left">{`#Topic${row.topic}`}</StyledTableCell>

                {/* <StyledTableCell align="right">
                  <a href={row.url}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      startIcon={<TwitterIcon />}
                      className={classes.button}
                    ></Button>
                  </a>
                </StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
