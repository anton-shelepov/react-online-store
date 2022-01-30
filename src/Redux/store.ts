import { combineReducers, createStore } from "redux" 
import { IHomeState } from "../Types/homeTypes";
import homeReducer from "./Reducers/homeReducer"

export interface IRootState {
    home: IHomeState;
}

const rootReducer = combineReducers({
    home: homeReducer
})

const store = createStore<IRootState, any, any, any>(
    rootReducer
) 

export default store;