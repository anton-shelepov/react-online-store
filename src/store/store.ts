import { createStore, applyMiddleware, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import catalogReducer from "./reducers/catalogReducer";
import homeReducer from "./reducers/homeReducer";
import createSagaMiddleware from 'redux-saga'
import productReducer from "./reducers/productReducer";
import basketReducer from "./reducers/basketReducer";
import rootSaga from "./reduxSaga/rootSaga";
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from "./reducers/usersReducer";


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 

const rootReducer = combineReducers({
    home: homeReducer,
    catalog: catalogReducer,
    auth: authReducer,
    product: productReducer,
    basket: basketReducer,
    users: usersReducer,
}) 

const sagaMiddleware = createSagaMiddleware()

const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)) ) 

sagaMiddleware.run(rootSaga)

export default store;