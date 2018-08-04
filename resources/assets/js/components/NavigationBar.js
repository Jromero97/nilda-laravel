import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const styles = theme => ({
   root: {
       flexGrow: 1,
       height: 430,
       zIndex: 1,
       overflow: 'hidden',
       position: 'relative',
       display: 'flex',
   },
   appBar: {
       zIndex: theme.zIndex.drawer + 1,
       transition: theme.transitions.create(['width', 'margin'], {
           easing: theme.transitions.easing.sharp,
           duration: theme.transitions.duration.leavingScreen,
       }),
   },
   appBarShift: {
       marginLeft: drawerWidth,
       width: `calc(100% - ${drawerWidth}px)`,
       transition: theme.transitions.create(['width', 'margin'], {
           easing: theme.transitions.easing.sharp,
           duration: theme.transitions.duration.leavingScreen,
       }),
   },
   menuButton: {
       marginLeft: 12,
       marginRight: 36,
   },
   hide: {
       display: 'none',
   },
   drawerPaper: {
       position: 'relative',
       whiteSpace: 'nowrap',
       width: drawerWidth,
       transition: theme.transitions.create('width', {
           easing: theme.transitions.easing.sharp,
           duration: theme.transitions.duration.enteringScreen,
       }),
   },
   drawerPaperClose: {
       overflowX: 'hidden',
       transition: theme.transitions.create('width', {
           easing: theme.transitions.easing.sharp,
           duration: theme.transitions.duration.leavingScreen,
       }),
       width: theme.spacing.unit * 7,
       [theme.breakpoints.up('sm')]: {
           width: theme.spacing.unit * 9,
       },
   },
   toolbar: {
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'flex-end',
       padding: '0 8px',
       ...theme.mixins.toolbar,
   },
});

class MiniDrawer extends Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({
            open: true
        });
    };

    handleDrawerClose = () => {
        this.setState({
            open: false
        });
    };

    render() {
        return (
        <div className={classes.root}>
            <AppBar position="absolute" className={classNames(classes.appBar, this.state.open && classes.appBarShift )}>
                <Toolbar disableGutters={!this.state.open}>
                    <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerOpen()} className={classNames(classes.menuButton, this.state.open && classes.hide)}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography>
                        Administration
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" classes={{
                paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }} open={this.state.open}>

            </Drawer>
        </div>
        )
    }
}

export default withStyles(styles)(MiniDrawer);