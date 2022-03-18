import { useForm } from 'react-hook-form';
import { api } from '../../../../api';
import { useAppDispatch } from '../../../../utils/hooks/hooks';
import SubmitButton from '../../Buttons/SubmitButton/SubmitButton';
import FileInput from '../../Inputs/FileInput/FileInput';
import TextInput from '../../Inputs/TextInput/TextInput';
import s from './CreateCategoryForm.module.scss';

interface ICreateCategoryFormProps {

}

interface ICreateCategoryForm { 
    image: any
    icon: any
    categoryName: string
    categoryCatalogName: string
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
                <TextInput register={register} errors={errors} name="categoryName" label="Ссылочное наименование" />
                <TextInput register={register} errors={errors} name="categoryCatalogName" label="Название категории" />
                <div className={s.upload_images}>
                    <FileInput register={register} label="Добавить картинку" name="image" id="image" />
                    <FileInput register={register} label="Добавить иконку" name="icon" id="icon" />
                </div>
            </div>
            <SubmitButton value="Создать категорию" />
        </form>
    )
}

export default CreateCategoryForm;