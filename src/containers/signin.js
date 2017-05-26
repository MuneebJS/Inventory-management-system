import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { signin } from '../store/actions/authActions'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Signin extends React.Component {
    constructor() {
        super();
    }


    signin() {
        var credentials = {
            email: this.refs.email.getValue(),
            pass: this.refs.pass.getValue()
        }
        console.log(credentials.email, credentials.pass)
        this.props.signin(credentials)
    }
    render() {
        return (
            <MuiThemeProvider>
            <div>
                <TextField
                    hintText="Email"
                    floatingLabelText="Email"
                    ref="email"
                  
                /> <br />
                <TextField
                    hintText="Password"
                    floatingLabelText="Password"
                    ref="pass"
                />
                {/*<h1>{this.props.user.users.name}</h1>*/}
                <RaisedButton label="Sign in"
                    onClick={
                        this.signin.bind(this)
                    }
                    primary={true} />
            </div>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.authReducer
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signin: (credentials) => {
            dispatch(signin(credentials));
        }
    }
}
 export default connect(null, mapDispatchToProps)(Signin)