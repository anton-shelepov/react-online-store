import s from './AuthForms.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInput from '../../Inputs/TextInput/TextInput';
import { loginSchema } from '../FormsSchemas';
import SubmitButton from '../../Buttons/SubmitButton/SubmitButton';
import { Dispatch, SetStateAction } from 'react';
import { useAppDispatch } from '../../../../utils/hooks/hooks';
import { userSigninRequest } from '../../../../store/actions/authActions/authActions';

export interface ILoginForm {
    email: string;
    password: string
}

type LoginFormProps = {
    setForm: Dispatch<SetStateAction<string>>
}

const LoginForm: React.FC<LoginFormProps> = ({setForm}) => {

    const dispatch = useAppDispatch();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<ILoginForm>({
        resolver: yupResolver(loginSchema),
        mode: "onBlur",
    })

    const onSubmit = handleSubmit(({email, password}: ILoginForm) => { 
        dispatch(userSigninRequest({email, password}))
        reset();
    })

    const changeForm = () => setForm('registration');

    return (
        <form className={s.login} onSubmit={onSubmit}>
            <h2 className={s.page_title}>Вход в аккаунт</h2>
            <TextInput register={register} errors={errors} required name='email' label='Почта' />
            <TextInput register={register} errors={errors} required name='password' type='password' label='Пароль' />
            <div className={s.buttons}>
                <span className={s.change_form} onClick={changeForm}>Создать новый аккаунт</span>
                <SubmitButton value="Войти" />
            </div>

        </form>
    )
}

export default LoginForm;