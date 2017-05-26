import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import * as firebase from 'firebase';
import Signup from './containers/signup'
import Signin from './containers/signin'
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './containers/app'
import AddStore from './components/addStore'
import AddProduct from './components/addProduct'
import addPurchaseDetail from './components/addPurchaseDetail'
import addSalesDetail from './components/addSalesDetail'
injectTapEventPlugin();


export default class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                 <Route path="/" component={addSalesDetail} >
                {/*<Route path="/" component={Signup} >*/}
                <Route path='/signin' component={Signin} />
                <Route path='/store' component={AddStore} />
                
                </Route>
            </Router>
        )
    }

}
