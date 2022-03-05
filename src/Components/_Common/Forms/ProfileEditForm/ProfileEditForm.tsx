import s from './ProfileEditForm.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RadioInput from '../../Inputs/RadioInput/RadioInput';
import TextInput from '../../Inputs/TextInput/TextInput';
import SubmitButton from '../../Buttons/SubmitButton/SubmitButton';
import { profileEditSchema } from '../FormsSchemas';
import NumberFormat from 'react-number-format';
import TextInputMask from '../../Inputs/TextInput/TextInputMask';

export interface IProfileEdit {
    fullName: string;
    email: string;
    address: string;
    phone: string;
    gender: string;
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}

const ProfileEditForm: React.FC = () => { 
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        control,
    } = useForm<IProfileEdit>({
        resolver: yupResolver(profileEditSchema),
        mode: "onBlur",
    })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        reset({
            fullName: '',
            email: '',
            address: '',
            phone: '',
            gender: '',
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        });
    })

    return (
        <form className={s.profile_edit} onSubmit={onSubmit}>
            <h2 className={s.title}>Редактирование профиля</h2>
            <div className={s.personal}>
                <h3 className={s.subtitle}>Личное</h3>
                <TextInput register={register} errors={errors} name="email" label="Почта" required />
                <TextInput register={register} errors={errors} name="fullName" label="Полное имя (ФИО)" />
                <TextInput register={register} name="address" label="Адрес" />
                <Controller
                    render={({ field }) => (
                        <NumberFormat customInput={TextInputMask} errors={errors} label="Телефон" format="+7 (###) ###-##-##" mask="_" {...field} />
                    )}
                    name="phone"
                    control={control}
                />
                <div className={s.gender}>
                    <span className={s.gender_subtitle}>Пол</span>
                    <div className={s.gender_radios}>
                        <RadioInput register={register} label="Мужской" name="gender" id="male" />
                        <RadioInput register={register} label="Женский" name="gender" id="female" />
                    </div>
                </div>
            </div>
            <div className={s.security}>
                <h3 className={s.subtitle}>Безопасность</h3>
                <TextInput register={register} errors={errors} name="oldPassword" label="Старый пароль" type="password" />
                <TextInput register={register} errors={errors} name="newPassword" label="Новый пароль" type="password" />
                <TextInput register={register} errors={errors} name="confirmPassword" label="Подтвердите новый пароль" type="password" />
            </div>
            <SubmitButton value="Сохранить изменения" />
        </form>
    )
}

export default ProfileEditForm;