import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddPurchasedDetail extends Component {
    state = {}
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>Add Purchase Details</h1>
                    <TextField
                        hintText="Quantity"
                        floatingLabelText="Quantity"
                        ref="purchased_product_quant"

                    /> <br />
                    <TextField
                        hintText="Unit Price"
                        floatingLabelText="Unit Price"
                        ref="purchased_product_unit_price"
                    />
                    <br />
                    <RaisedButton label="Primary" primary={true} />
                    <RaisedButton label="Disabled" disabled={true} />
                </div>
            </MuiThemeProvider>
        );
    }
}

