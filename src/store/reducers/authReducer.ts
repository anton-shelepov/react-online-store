import { AuthActionTypes } from "../actions/authActions/authActions";
import { SET_USER_AUTH } from "../actions/authActions/authActionsTypes";
import { IAuthState } from "../../types/authTypes";

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