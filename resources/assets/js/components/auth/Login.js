import React, {Component} from 'react'
import DashboardNavBar from './../DashboardNavBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
   root: {
       overflow: 'hidden',
       padding: `0 ${theme.spacing * 3}px `,
   },
   wrapper: {
       maxWidth: 400,
   },
   paper: {
       margin: theme.spacing,
       padding: theme.spacing * 2,
   },
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const {email, password} = this.state;
        axios.post('api/login', {
            email, password
        })
            .then(response => {
                this.setState({err: false});
                this.props.history.push('home');
            })
            .catch(error => {
                this.refs.email.value = "";
                this.refs.password.value = "";
                this.setState({err: true});
            });
    }

    onChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        const {classes} = this.props;
        let error = this.state.err;
        // let msg = (!error) ? 'Login Successful' : 'Wrong Credentials';
        // let name = (!error) ? 'alert alert-success' : 'alert alert-danger';
        return (
            <div>
                <DashboardNavBar/>
                <div className={classes.root}>
                    <div className={classes.wrapper}>
                        <Paper className={classes.paper}>
                            <Typography variant='title' component='h1'>LOGIN</Typography>

                        </Paper>
                    </div>
                </div>

            </div>
        )
    }
};

export default withStyles(styles)(Login);