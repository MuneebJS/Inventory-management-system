import { Component } from 'react';
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton'
import Drawer from '../components/drawer'

class App extends Component {
    constructor(props) {
        super(props);
        // this.close = this.close.bind(this);
        this.state = { open: false };
    }
    open = () => this.setState({
        open: true
    });
    close = () => this.setState({
        open: false
    });
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Title"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonTouchTap={this.open.bind(this)}
                    />
                    <Drawer open={this.state.open}
                        close={this.close.bind()}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;