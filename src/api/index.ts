import { home } from './home/home-api';
import { users } from './users/users-api';
import { admin } from './admin/admin-api';
import { catalog } from './catalog/catalog-api';
import { auth } from './auth/auth-api';
import axios from "axios";


export const api = {
    auth,
    catalog,
    admin,
    users,
    home
}

export const privateClient = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiMkBtYWlsLnJ1IiwiaWF0IjoxNjQ4NDUzMjU2LCJleHAiOjE2NDg0NTY4NTZ9._bHS_n2Ht8OPJ6v9gm-z2MtfzmBbL91CnYkwZOW1ng4"
    }
});

