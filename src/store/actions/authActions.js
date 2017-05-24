export default class AuthActions {
    static SIGNUP = 'SIGNUP';
    static SIGNUP_SUCCESSFUL = 'SIGNUP_SUCCESSFUL';
    static SIGNUP_REJECTED = 'SIGNUP_REJECTED';


    static signup(payload) {
        return {
            //I will replace AuthActions with this
            type: AuthActions.SIGNUP,
            data: payload
        }
    }
     static signup_successful(authUser) {
        return {
            type: AuthActions.SIGNUP_SUCCESSFUL,
            payload: authUser

        }
    }
     static signup_rejected(error) {
        return {
            type: AuthActions.SIGNUP_REJECTED,
            payload: error
        }
    }
}