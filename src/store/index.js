import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
import { authReducer } from './reducers/authReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    authReducer: authReducer
})

const middleware = compose(
    applyMiddleware(thunk, logger())
);

export let store = createStore(
    rootReducer,
    middleware
);