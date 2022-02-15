import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authReducer";
import catalogReducer from "./Reducers/catalogReducer";
import homeReducer from "./Reducers/homeReducer";

const store = configureStore({
    reducer: {
        home: homeReducer,
        catalog: catalogReducer,
        auth: authReducer,
    }
}
)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;