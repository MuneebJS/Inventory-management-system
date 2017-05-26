import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddStore extends Component {
    state = {}
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>Add Store</h1>
                    <TextField
                        hintText="Name"
                        floatingLabelText="Name"
                        ref="store_name"

                    /> <br />
                    <TextField
                        hintText="Location"
                        floatingLabelText="location"
                        ref="store_loaction"
                    />
                    <br />
                    <RaisedButton label="Primary" primary={true} />
                    {/*<br />*/}
                    <RaisedButton label="Disabled" disabled={true} />
                </div>
            </MuiThemeProvider>
        );
    }
}

