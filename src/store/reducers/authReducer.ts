import { USER_SIGNIN_FAILURE, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, AuthActionTypes, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILURE } from './../actions/authActions/authActionsTypes';
import { IAuthState } from "../../types/authTypes";

const initialState: IAuthState = {
    isAuth: false,
    isLoading: false,
    access_token: '',
    error: null,
}

const authReducer = (state: IAuthState = initialState, action: AuthActionTypes): IAuthState => {
    switch (action.type) { 
        case USER_SIGNIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case USER_SIGNIN_SUCCESS:
            debugger
            return { 
                isAuth: true,
                isLoading: false,
                access_token: action.access_token,
                error: null
            }

        case USER_SIGNIN_FAILURE: 
            return { 
                ...state,
                isLoading: false,
                error: action.error
            }

        case USER_SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case USER_SIGNUP_SUCCESS:
            return { 
                isAuth: true,
                isLoading: false,
                access_token: action.access_token,
                error: null
            }

        case USER_SIGNUP_FAILURE: 
            return { 
                ...state,
                isLoading: false,
                error: action.error
            }

        default:
            return state
    }
}

export default authReducer;