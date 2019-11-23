import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));
const Product = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2} >
      <Grid item xs={12}>
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="left">brand</TableCell>
                <TableCell align="left">image</TableCell>
                <TableCell align="left">price</TableCell>
                <TableCell align="left">sale price</TableCell>
                <TableCell align="left">stock</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow >
                  <TableCell component="th" scope="row">
                   AirMax
                  </TableCell>
                  <TableCell align="left">Nike</TableCell>
                  <TableCell align="left">
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                  </TableCell>
                  <TableCell align="left">150</TableCell>
                  <TableCell align="left">130</TableCell>
                  <TableCell align="left">20</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Grid>
  );
}
export { Product }