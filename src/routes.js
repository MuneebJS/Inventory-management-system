import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import * as firebase from 'firebase';
// import { Signin, Signup } from '../containers'
import Signup from './containers/signup'
import Signin from './containers/signin'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
export default class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Signup} >
                <Route path='/signin' component={Signin} />
                </Route>
            </Router>
        )
    }

}
