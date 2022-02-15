import { AuthActionTypes } from "../Actions/AuthActions/authActionsCreators";
import { SET_USER_AUTH } from "../Actions/AuthActions/authActionsTypes";
import { IAuthState } from "./../../Types/authTypes";

const initialState: IAuthState = { 
    email: "",
    password: '',
    isAuth: true, 
} 

const authReducer = (state: IAuthState = initialState, action: AuthActionTypes): IAuthState => {
    switch (action.type) {

        case SET_USER_AUTH:
            return {
                ...state,
                isAuth: true
            }

        default:
            return state
    }
}

export default authReducer;