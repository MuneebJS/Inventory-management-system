import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddProduct extends Component {
    state = {}
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>Add Product</h1>
                    <TextField
                        hintText="Product Name"
                        floatingLabelText="Product Name"
                        ref="product_name"

                    /> <br />
                    <TextField
                        hintText="Manufacturer"
                        floatingLabelText="Manufacturer"
                        ref="product_manufacturer"
                    />
                    <br />
                    <TextField
                        hintText="Description"
                        floatingLabelText="Description"
                        multiLine={true}
                        rows={2}
                    />
                    <br />
                    <RaisedButton label="Primary" primary={true} />
                    <RaisedButton label="Disabled" disabled={true} />
                </div>
            </MuiThemeProvider>
        );
    }
}

