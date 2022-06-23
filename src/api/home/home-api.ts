import { privateClient } from ".."

export interface IHomeApi {

}

export const home = {
    fetchPopularProducts() {
        return privateClient.get(`/products/popular`)
    },
} 