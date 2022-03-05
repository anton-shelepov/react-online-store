import { instance } from ".."

interface IAuth {
    email?: string,
    password?: string,
}

export const auth = {

    path: '/auth',

    setUserSignin({ email, password }: IAuth) {
        return instance.post(`${this.path}/signin`, {
            email,
            password
        })
    },

    setUserSignup({ email, password }: IAuth) {
        return instance.post(`${this.path}/signup`, {
            email,
            password
        })
    }
} 