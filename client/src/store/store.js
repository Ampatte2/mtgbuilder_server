import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import main from "./reducers/main"
import logger from "redux-logger"
import {loadState} from "./localStorage"

const persistedState = loadState()

const store = createStore(main, persistedState, applyMiddleware(thunk, logger
    ))

export default store