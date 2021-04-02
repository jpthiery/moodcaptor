import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers";

import {routerMiddleware} from 'connected-react-router'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = history => createStore(
        rootReducer(history),
        composeEnhancers(
            applyMiddleware(
                thunk,
                routerMiddleware(history)
            )
        )
    )

export default configureStore