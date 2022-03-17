import { ICreateCategoryRequestData } from './admin-api.d';
import { instance } from ".."
import axios from 'axios';

const basePath = '/categories'

export const admin = {

    createCategory({ categoryName, linkName, image, icon }: ICreateCategoryRequestData) {
        axios.all([
            instance.post(`${basePath}/create`, ({ categoryName, linkName })),
            instance.post(`${basePath}/upload-images`, ({ image, icon }))
        ]).then(axios.spread((response1, response2) => {
            return { response1, response2 }
        }))
    },

    createProduct(formData: ICreateCategoryRequestData) {
        return instance.post(`${basePath}/signup`, { ...formData })
    }
} 