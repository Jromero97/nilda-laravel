import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const DashboardButtonAppBar = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='title' color='inherit' className={classes.flex}>Dashboard</Typography>
                    <Button color='inherit' href='/login'>Login</Button>
                    <Button color='inherit'>Register</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
};

DashboardButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardButtonAppBar);