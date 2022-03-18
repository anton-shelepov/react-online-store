
export type UsersActionsTypes =
    IFetchAllUsersRequest |
    IFetchAllUsersSuccess |
    IFetchAllUsersFailure


// Fetch categories
export interface IFetchAllUsersRequest {
    type: typeof FETCH_ALL_USERS_REQUEST
}

export interface IFetchAllUsersSuccess {
    type: typeof FETCH_ALL_USERS_SUCCESS
    data: any
}

export interface IFetchAllUsersFailure {
    type: typeof FETCH_ALL_USERS_FAILURE
}

export const FETCH_ALL_USERS_REQUEST = 'FETCH_ALL_USERS_REQUEST'
export const FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS'
export const FETCH_ALL_USERS_FAILURE = 'FETCH_ALL_USERS_FAILURE'