import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { GlobalSvgSelector } from '../../../../_utils/GlobalSvgSelector';
import TextInput from '../../../Inputs/TextInput/TextInput';
import { ICreateProductForm } from '../CreateProductForm';
import s from './../CreateProductForm.module.scss';

interface ISpecsGroupItems {
    currentGroup: number,
    register: UseFormRegister<ICreateProductForm>,
    errors: {} | unknown | undefined,
    totalGroups: number[],
    onDeleteSpecGroup: React.MouseEventHandler<HTMLSpanElement> | undefined,
    onAddSpecItem: any,
    currentSpec: any
}

const SpecsGroupItems: React.FC<ISpecsGroupItems> = ({
    currentGroup,
    register,
    errors,
    totalGroups,
    onDeleteSpecGroup,
    onAddSpecItem,
    currentSpec
}) => {
    return (
        <>
            {
                totalGroups.map((group) => {
                    return (
                        <div className={s.spec_group_item}>
                            <span className={s.delete_group_btn} id={`btn${group}`} onClick={onDeleteSpecGroup}><GlobalSvgSelector id='close' /></span>
                            <div className={s.specs_group_title}>
                                <TextInput register={register} errors={errors} name={`specGroupTitle${group}`} label="Наименование группы" />
                            </div>
                            <div className={s.specs_item}>
                                <TextInput register={register} errors={errors} name={`specGroupItemTitle${group}-${currentSpec}`} label="Характеристика" />
                                <TextInput register={register} errors={errors} name="specGroupItemValue1-1" label="Значение" />
                            </div>
                        </div>

                    )
                })
            }

        </>
    )
}

export default SpecsGroupItems;