import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router'

export default class MenuDrawer extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <Drawer open={this.props.open}>
                    <AppBar title="AppBar"
                        onLeftIconButtonTouchTap={this.props.close}
                    />
                    <Link to="store"> <MenuItem>Add Store</MenuItem></Link>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </MuiThemeProvider>
        );
    }
}

