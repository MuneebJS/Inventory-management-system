// import React from 'react';
// import authActions from './../actions/authActions'
// import * as firebase from 'firebase'

// export default class AuthMiddleware {
//     static signup(dispatch, credentials) {
//         firebase.auth()
//         .createUserWithEmailAndPassword(credentials.email, credentials.pass)
//         .then((user) => {
//             console.log('signup successfull  ', user)

//         })
//         .catch((error) => {
//             console.log('signup rejected' , error)
//         })
//         dispatch(authActions.signup())
//     }
// }