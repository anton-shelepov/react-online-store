import { instance } from ".."

export interface ICatalogApi {
    
} 

const basePath = '/categories'

export const catalog = { 

    fetchCategories() {
        return instance.get(`${basePath}`)
    },

    fetchCategoryProducts(categoryName: string, queryPage?: string) {
        return instance.get(`${basePath}/${categoryName}${typeof queryPage !== "undefined" ? `/${queryPage}` : ''}`)
    }, 

} 