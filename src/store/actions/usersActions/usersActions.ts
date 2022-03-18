import { User } from './../../../types/usersTypes.d';
import { FETCH_ALL_USERS_REQUEST, FETCH_ALL_USERS_SUCCESS, FETCH_ALL_USERS_FAILURE } from './usersActionsTypes';



// Fetch users

export const fetchAllUsersRequest = () =>
({
    type: FETCH_ALL_USERS_REQUEST
})

export const fetchAllUsersSuccess = (data: User) =>
({
    type: FETCH_ALL_USERS_SUCCESS,
    data
})

export const fetchAllUsersFailure = () =>
({
    type: FETCH_ALL_USERS_FAILURE
})
