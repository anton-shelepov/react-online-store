import { useState } from 'react';
import LoginForm from '../../components/_common/Forms/AuthForms/LoginForm';
import RegistrationForm from '../../components/_common/Forms/AuthForms/RegistrationForm';
import s from './AuthPage.module.scss';


interface IAuthPage {

}

const AuthPage: React.FC<IAuthPage> = () => {

    const [form, setForm] = useState('login');

    return (
        <div className={s.loginPage}>
            {
            form === 'login' 
            ? <LoginForm setForm={setForm} /> 
            : <RegistrationForm setForm={setForm} />
            } 
        </div>
    )
}

export default AuthPage; 