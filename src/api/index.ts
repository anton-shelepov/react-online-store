import { auth } from './auth/auth-api';
import axios from "axios";

export const instance = axios.create({ 
    baseURL: 'http://localhost:3001/',
    headers: {}
});

export const api = {
    auth,
}