import { admin } from './admin/admin-api';
import { catalog } from './catalog/catalog-api';
import { auth } from './auth/auth-api';
import axios from "axios"; 


export const instance = axios.create({
    baseURL: 'http://localhost:3001/', 
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiMkBtYWlsLnJ1IiwiaWF0IjoxNjQ3Mzk3MDA0LCJleHAiOjE2NDc0NTcwMDR9.rTmmXxpUFT7Fcd1w3PUPiw1CDvhIaSRGYtl0DopVVw0"
    }
}); 

export const api = {
    auth,
    catalog,
    admin
}