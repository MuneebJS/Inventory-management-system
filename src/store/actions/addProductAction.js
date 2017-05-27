// import { AuthActions } from './const';
import * as firebase from 'firebase'
import { browserHistory } from 'react-router'

const product_added = () => {
    return {
        type: "productAdded"
    }
}

export const addProduct = (productObj, dispatch) => {
    return dispatch => {
        firebase.database().ref('/')
            .child('Products')
            .push(productObj)
            .then(
            () => {
                dispatch(product_added())
            }
            )
            .catch(
            () => {
            }
            )
    }
}