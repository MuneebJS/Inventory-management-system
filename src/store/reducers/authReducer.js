import authActions from "./../actions/const"



const INITIAL_STATE = {
    authUser: {},
    isRegistered: false,
    isAuthenticated: false,
    errorMessage: {},
    isSuccess: false
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case authActions.SIGNUP:
            return {
                ...state,
                isRegistered: true,
            }
        case authActions.SIGNUP:
            return {
                ...state,
                isAuthenticated: true
            }
        case authActions.SIGNUP_SUCCESSFUL:
            return {
                ...state,
                isSuccess: true,
                errorMessage : {}
            }
        default: return state
    }
}
