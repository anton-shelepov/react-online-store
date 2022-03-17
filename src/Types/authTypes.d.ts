
//Auth reducer state interface
export interface IAuthState {
    isAuth: boolean,
    isLoading: boolean,
    access_token: string | null,
    error: string | null | unknown,
}

// Auth state components types
