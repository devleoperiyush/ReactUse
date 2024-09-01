import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import appReducerObject from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(appReducerObject, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
