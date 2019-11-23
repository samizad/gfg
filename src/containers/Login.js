import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const styles = theme => ({

  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class LoginClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: "", password: "" }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangePassword= this.onChangePassword.bind(this);
    this.onChangeUserName= this.onChangeUserName.bind(this);

  }

  async onSubmit(event) {
    event.preventDefault()
    console.log(this.state)
    
    const response = await axios.post('https://demo6723462.mockable.io/login', {
      username: this.state.username,
      password: this.state.password
    });

    console.log(response.data)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    localStorage.setItem('token', response.data.token);
    window.location = "/product"
  }

  onChangeUserName(event) {
    this.setState(
      { username: event.target.value }
    )
  }
  onChangePassword(event) {
    this.setState(
      { password: event.target.value }
    )
  }
  render() {
    const { classes } = this.props
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="User Name"
              autoComplete="User Name"
              autoFocus
              onChange={this.onChangeUserName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.onChangePassword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.onSubmit}
            >
              Sign In
          </Button>
          </form>
        </div>
      </Container>
    );
  }
}
const Login = withStyles(styles)(LoginClass)
export { Login }