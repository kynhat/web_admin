import { createStore,applyMiddleware } from 'redux';
import combinedReducers from "../reducers";
import createSagaMiddleware from 'redux-saga';
import foo from '../saga';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    combinedReducers,
    applyMiddleware(sagaMiddleware)
    );
    // then run the saga
sagaMiddleware.run(foo)

export default store;
