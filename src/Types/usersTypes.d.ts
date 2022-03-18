
export interface IUsersState {
    users: User[],
    isLoading: boolean,
    errorMessage: string,
}

export type User = {
    id: number,
    profileImage: string,
    createdAt: string,
    email: string,
    role: string,
    _count: {
        review: number
    }

}