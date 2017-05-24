import authActions from "./../actions/authActions"


// const INITIAL_STATE = {
//     authUser : [
//         users = {
//             name: 'No name',
//         }
//     ]
// }

export const authReducer = (state = {
    users : {
        name: 'No name',
    }
}, action) => {
    switch(action.type) {   
        case authActions.SIGNUP :
            return {
                ...state,
                users : {
                    name: payload
                }
            }
            default : return state
    }
}
