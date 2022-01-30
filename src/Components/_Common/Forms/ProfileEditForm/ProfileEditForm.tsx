import s from './ProfileEditForm.module.scss';
import { useForm } from 'react-hook-form';
import SubmitButton from '../../Buttons/SubmitButton/SubmitButton';
import RadioInput from '../../Inputs/RadioInput/RadioInput';
import TextInput from '../../Inputs/TextInput/TextInput'; 
import { profileEditSchema } from './../FormsSchemas';
import { yupResolver }  from '@hookform/resolvers/yup';

export interface IProfileEdit {
    full_name: string;
    email: string;
    country: string;
    phone: string;
    gender: string;
    old_password: string;
    new_password: string;
    confirm_password: string; 
} 

const ProfileEditForm: React.FC = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<IProfileEdit>({
        resolver: yupResolver(profileEditSchema),
        mode: "onBlur",
    })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        reset();
    }) 

    return (
        <form className={s.profile_edit} onSubmit={onSubmit}>
            <h2 className={s.title}>Редактирование профиля</h2>
            <div className={s.personal}>
                <h3 className={s.subtitle}>Личное</h3>
                <TextInput register={register} errors={errors} name="email" label="Почта" required />
                <TextInput register={register} errors={errors} name="full_name" label="Полное имя" />
                <TextInput register={register} name="country" label="Страна" />
                <TextInput register={register} name="phone" label="Телефон" />
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
                <TextInput register={register} errors={errors} name="old_password" label="Старый пароль" type="password" />
                <TextInput register={register} errors={errors} name="new_password" label="Новый пароль" type="password" />
                <TextInput register={register} errors={errors} name="confirm_password" label="Подтвердите новый пароль" type="password" />
            </div>
            <SubmitButton value="Сохранить изменения" />
        </form>
    )
}

export default ProfileEditForm;