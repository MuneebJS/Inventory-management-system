import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
import {authReducer} from './reducers/authReducer'
import logger from 'redux-logger'

const rootReducer = combineReducers({
    authReducer: authReducer
})
const middleware = compose(
    applyMiddleware(logger())
);

export let store = createStore(
    rootReducer,
    middleware
);