import s from './CreateProductForm.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RadioInput from '../../Inputs/RadioInput/RadioInput';
import TextInput from '../../Inputs/TextInput/TextInput';
import SubmitButton from '../../Buttons/SubmitButton/SubmitButton';
import { profileEditSchema } from '../FormsSchemas';
import NumberFormat from 'react-number-format';
import TextInputMask from '../../Inputs/TextInput/TextInputMask';
import { useState } from 'react';

export interface IProfileEdit {

}

const CreateProductForm: React.FC = () => {
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

        });
    })

    const [specsGroupsCount, setSpecsGroupsCount] = useState(1);

    const onAddSpecGroup = () => {
        setSpecsGroupsCount(specsGroupsCount + 1)
    }

    return (
        <form className={s.create_product_form} onSubmit={onSubmit}>
            <h2 className={s.form_title}>Создание товара</h2>
            <TextInput register={register} errors={errors} name="title" label="Наименование" required />
            <TextInput register={register} errors={errors} name="mainSpecs" label="Основные характеристики" required />
            <TextInput register={register} errors={errors} name="isInStock" label="В наличии" required />
            <TextInput register={register} errors={errors} name="price" label="Стоимость" required />
            <TextInput register={register} errors={errors} name="discount" label="Скидка" />
            <div className={s.specs}>
                <h3>Характеристики</h3>
                <div className={s.specs_groups_items}>
                    <div className={s.specs_group_title}>
                        <TextInput register={register} errors={errors} name="specGroupTitle1" label="Наименование группы" />
                    </div>
                    <div className={s.specs_item}>
                        <TextInput register={register} errors={errors} name="specGroupItemTitle1-1" label="Характеристика" />
                        <TextInput register={register} errors={errors} name="specGroupItemValue1-1" label="Значение" />
                    </div>
                    <div className={s.specs_item}>
                        <TextInput register={register} errors={errors} name="specGroupTitle1-2" label="Характеристика" />
                        <TextInput register={register} errors={errors} name="specGroupValue1-2" label="Значение" />
                    </div>
                    <div className={s.specs_item}>
                        <TextInput register={register} errors={errors} name="specGroupTitle1-3" label="Характеристика" />
                        <TextInput register={register} errors={errors} name="specGroupValue1-3" label="Значение" />
                    </div>
                    <div className={s.specs_group_title}>
                        <TextInput register={register} errors={errors} name="specGroupTitle2" label="Наименование группы" />
                    </div>
                    <div className={s.specs_item}>
                        <TextInput register={register} errors={errors} name="specGroupItemTitle2-1" label="Характеристика" />
                        <TextInput register={register} errors={errors} name="specGroupItemValue2-1" label="Значение" />
                    </div>
                    <div className={s.specs_item}>
                        <TextInput register={register} errors={errors} name="specGroupTitle2-2" label="Характеристика" />
                        <TextInput register={register} errors={errors} name="specGroupValue2-2" label="Значение" />
                    </div>
                    <div className={s.specs_item}>
                        <TextInput register={register} errors={errors} name="specGroupTitle2-3" label="Характеристика" />
                        <TextInput register={register} errors={errors} name="specGroupValue2-3" label="Значение" />
                    </div>
                </div> 
            </div>
            <SubmitButton value="Создать товар" />
        </form>
    )
}

export default CreateProductForm;