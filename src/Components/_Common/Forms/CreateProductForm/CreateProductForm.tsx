import s from './CreateProductForm.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInput from '../../Inputs/TextInput/TextInput';
import SubmitButton from '../../Buttons/SubmitButton/SubmitButton';
import { createProductSchema, profileEditSchema } from '../FormsSchemas';
import { useState } from 'react';
import { GlobalSvgSelector } from '../../../_utils/GlobalSvgSelector';
import SpecsGroupItems from './SpecsGroupsItems/SpecsGroupItems';
import FileInput from '../../Inputs/FileInput/FileInput';

export interface ICreateProductForm {

}

const CreateProductForm: React.FC = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        control,
    } = useForm<ICreateProductForm>({
        resolver: yupResolver(createProductSchema),
        mode: "onBlur",
    })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        reset({

        });
    })

    const [currentGroup, setCurrentGroup] = useState(1);

    const [totalGroups, setTotalGroups] = useState([currentGroup])

    const [currentSpec, setCurrentSpec] = useState(1)

    const onAddSpecGroup = () => {
        setTotalGroups([...totalGroups, currentGroup + 1])
        setCurrentGroup(currentGroup + 1)
        setCurrentSpec(1)
    }

    const onDeleteSpecGroup: React.MouseEventHandler<HTMLDivElement> | undefined = (e) => {
        const currentGroupNumber = +e.currentTarget.id.replace('btn', '')
        setTotalGroups(totalGroups.filter(groupNumber => groupNumber !== currentGroupNumber))
    }

    const onAddSpecItem = () => {
        setCurrentSpec(currentSpec + 1)
    }

    return (
        <form className={s.create_product_form} onSubmit={onSubmit}>
            <h2 className={s.form_title}>Создание товара</h2>
            <TextInput register={register} errors={errors} name="title" label="Наименование" required />
            <TextInput register={register} errors={errors} name="mainSpecs" label="Основные характеристики" required />
            <TextInput register={register} errors={errors} name="isInStock" label="В наличии" required />
            <TextInput register={register} errors={errors} name="price" label="Стоимость" required />
            <TextInput register={register} errors={errors} name="discount" label="Скидка" />
            <FileInput register={register} name="productImages" id="productImages" label="Картинки товара (до 10 шт.)" />
            <div className={s.specs}>
                <h3>Характеристики</h3>
                <div className={s.specs_groups_items}>

                    <SpecsGroupItems
                        currentGroup={currentGroup}
                        register={register}
                        errors={errors}
                        totalGroups={totalGroups}
                        onDeleteSpecGroup={onDeleteSpecGroup}
                        onAddSpecItem={onAddSpecItem}
                        currentSpec={currentSpec}
                    />

                    <div className={s.new_group_btn} onClick={onAddSpecGroup}>
                        <GlobalSvgSelector id='plus' />
                        Добавить новую группу
                    </div>
                </div>
            </div>
            <SubmitButton value="Создать товар" />
        </form>
    )
}

export default CreateProductForm;