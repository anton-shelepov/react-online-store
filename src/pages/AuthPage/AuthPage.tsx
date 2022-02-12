import { useState } from 'react';
import LoginForm from '../../Components/_Common/Forms/AuthForms/LoginForm';
import RegistrationForm from '../../Components/_Common/Forms/AuthForms/RegistrationForm';
import s from './AuthPage.module.scss';


interface IAuthPage {

}

const AuthPage: React.FC = (props: IAuthPage) => {

    const [form, setForm] = useState('login');

    return (
        <>
            {
            form === 'login' 
            ? <LoginForm setForm={setForm} /> 
            : <RegistrationForm setForm={setForm} />
            } 
        </>
    )
}

export default AuthPage;