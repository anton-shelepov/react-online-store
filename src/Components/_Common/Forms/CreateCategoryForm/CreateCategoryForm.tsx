import { useForm } from 'react-hook-form';
import { api } from '../../../../api';
import { useAppDispatch } from '../../../../utils/hooks/hooks';
import SubmitButton from '../../Buttons/SubmitButton/SubmitButton';
import TextInput from '../../Inputs/TextInput/TextInput';
import s from './CreateCategoryForm.module.scss';

interface ICreateCategoryFormProps {

}

interface ICreateCategoryForm { 
    image: any
    icon: any
    linkName: string
    categoryName: string
}

const CreateCategoryForm: React.FC<ICreateCategoryFormProps> = (props) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<ICreateCategoryForm>({
        mode: "onBlur",
    })

    const dispatch = useAppDispatch()

    const onSubmit = handleSubmit((data) => {
        dispatch(api.admin.createCategory(data))
        reset()
    })

    return (
        <form className={s.create_category} onSubmit={onSubmit}>
            <h3 className={s.title}>Создать новую категорию</h3>
            <div className={s.personal}>
                <TextInput register={register} errors={errors} name="linkName" label="Ссылочное наименование" />
                <TextInput register={register} errors={errors} name="categoryName" label="Название категории" />
                <div className={s.upload_images}>
                    <span className={s.upload_image__title}>Добавить картинку</span>
                    <input {...register('image')} type='file' />
                    <span className={s.upload_icon__title}>Добавить иконку</span>
                    <input {...register('icon')} type='file' />
                </div>
            </div>
            <SubmitButton value="Создать категорию" />
        </form>
    )
}

export default CreateCategoryForm;