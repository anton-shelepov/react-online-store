import { IUsersState } from './../../types/usersTypes.d';
import { FETCH_ALL_USERS_REQUEST, FETCH_ALL_USERS_SUCCESS, UsersActionsTypes } from './../actions/usersActions/usersActionsTypes';

const initialState: IUsersState = {
    users: [],
    isLoading: false,
    errorMessage: ''
}

const usersReducer = (state: IUsersState = initialState, action: UsersActionsTypes): IUsersState => {
    switch (action.type) {

        case FETCH_ALL_USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            }

            case FETCH_ALL_USERS_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    users: action.data
                }

        default:
            return state
    }
}

export default usersReducer;