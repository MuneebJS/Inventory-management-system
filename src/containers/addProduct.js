import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { addProduct } from '../store/actions/addProductAction'
import { connect } from 'react-redux'
class AddProduct extends Component {
    constructor(props) {
        super(props);

    }
    addProductHandler() {
        // e.preventDefault()
        let detailes = {
            name: this.refs.product_name.getValue(),
            manufacturer: this.refs.product_manufacturer.getValue(),
            description: this.refs.product_des.getValue(),
        }
        // console.log(detailes)
        this.props.addProduct(detailes)
    }
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
                        ref="product_des"
                    />
                    <br />
                    <RaisedButton label="Primary" primary={true}
                    onClick={this.addProductHandler.bind(this)}
                    
                    />
                    <RaisedButton label="Disabled" disabled={true} />
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (productsObj) => {
            dispatch((productsObj));
        }
    }
}
export default connect(null, mapDispatchToProps)(AddProduct)
