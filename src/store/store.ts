import { createStore, applyMiddleware, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import catalogReducer from "./reducers/catalogReducer";
import homeReducer from "./reducers/homeReducer";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./reduxSaga/rootSaga";
import productReducer from "./reducers/productReducer";
import basketReducer from "./reducers/basketReducer";


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    home: homeReducer,
    catalog: catalogReducer,
    auth: authReducer,
    product: productReducer,
    basket: basketReducer,
})

const store = createStore( rootReducer, applyMiddleware(sagaMiddleware) ) 

sagaMiddleware.run(rootSaga)

export default store;