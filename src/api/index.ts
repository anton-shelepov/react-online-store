import { users } from './users/users-api';
import { admin } from './admin/admin-api';
import { catalog } from './catalog/catalog-api';
import { auth } from './auth/auth-api';
import axios from "axios"; 


export const instance = axios.create({
    baseURL: 'http://localhost:3001/', 
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiMTIzNEBtYWlsLnJ1IiwiaWF0IjoxNjQ3NTcwNzk4LCJleHAiOjE2NDc2MzA3OTh9.E7AWoA5UagTaqqYq3ltG3FDInxF07RlawrMJjzDNkpg"
    }
}); 

export const api = {
    auth,
    catalog,
    admin,
    users
}