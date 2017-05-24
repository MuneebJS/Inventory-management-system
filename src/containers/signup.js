import React from 'react';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import AuthActions from '../store/actions/authActions'
import { connect } from 'react-redux'

injectTapEventPlugin();
class Signup extends React.Component {
    constructor() {
        super();
    }
    signup() {
        credentials = {
            email: this.refs.email.getValue,
            pass: this.refs.pass.getValue
        }
        this.props.signup(credentials.email)
    }
    render() {
        return (
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
                <h1>{this.props.user.users.name}</h1>
                {/*<RaisedButton label="Primary" primary={true} /*style={style}*/}
                <button value="Button"
                    onClick={
                            this.signup.bind(this)
                        }
                ></button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // const { key } = state
    return {
        user: state.authReducer
    }
}

// const mapDispatchToProps = dispatch => bindActionCreators({actions}, dispatch);

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (payload) => {
            dispatch(AuthActions.signup(payload));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)
// export default Signup