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

const LandingButtonAppBar = props => {
    const { classes } = props;
    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Hospital Landing
                    </Typography>
                    <Button color="inherit">Dashboard</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
};

LandingButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(LandingButtonAppBar);