import {  configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/index";
// import { PERSIST, PURGE } from 'redux-persist/es/constants';

const middlewares = [
    thunkMiddleware,   
]

export const initialState = {};

const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    preloadedState: initialState,
});


// add console debug(store and action) in each dispatch
const next = store.dispatch;
store.dispatch = function dispatchAndLog(action) {
    console.log("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    return result;
};

export default store;