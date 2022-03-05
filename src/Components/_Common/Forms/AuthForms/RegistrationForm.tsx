import s from './AuthForms.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInput from '../../Inputs/TextInput/TextInput';
import { registrationSchema } from '../FormsSchemas';
import SubmitButton from '../../Buttons/SubmitButton/SubmitButton';
import { Dispatch, SetStateAction } from 'react';
import NumberFormat from 'react-number-format';
import TextInputMask from '../../Inputs/TextInput/TextInputMask';
import { api } from '../../../../api';

export interface IRegistrationForm {
    phone: string;
    email: string,
    fullName: string,
    password: string,
    confirmPassword: string,
}

type RegistrationFormProps = {
    setForm: Dispatch<SetStateAction<string>>
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ setForm }) => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        control,
    } = useForm<IRegistrationForm>({
        resolver: yupResolver(registrationSchema),
        mode: "onBlur",
    })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        reset({
            email: '',
            fullName: '',
            phone: '',
            password: '',
            confirmPassword: '',
        });

        api.auth.setUserSignup(data)
    })

    const changeForm = () => setForm('login');

    return (
        <form className={s.registration} onSubmit={onSubmit}>
            <h2 className={s.page_title}>Регистрация</h2>
            <TextInput register={register} errors={errors} required name='email' label='Почта' />
            <TextInput register={register} errors={errors} name='fullName' label='Полное имя (ФИО)' />
            <Controller
                render={({ field }) => (
                    <NumberFormat customInput={TextInputMask} errors={errors} label="Телефон" format="+7 (###) ###-##-##" mask="_" {...field} />
                )}
                name="phone"
                control={control}
            />
            <TextInput register={register} errors={errors} name='password' required type='password' label='Пароль' />
            <TextInput register={register} errors={errors} name='confirmPassword' required type='password' label='Повторите пароль' />
            <div className={s.buttons}>
                <span className={s.change_form} onClick={changeForm}>Вернуться</span>
                <SubmitButton value="Зарегистрироваться" />
            </div>

        </form>
    )
}

export default RegistrationForm;