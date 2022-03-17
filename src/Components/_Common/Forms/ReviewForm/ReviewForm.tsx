import s from './ReviewForm.module.scss';
import { Controller, useForm } from 'react-hook-form';
import TextInput from '../../Inputs/TextInput/TextInput';
import SubmitButton from '../../Buttons/SubmitButton/SubmitButton';
import Rating from '../../../Rating/Rating';
import { useState } from 'react';
import DefaultSelect from '../../Selects/DefaultSelect';
import classNames from 'classnames';
import { GlobalSvgSelector } from '../../../_assets/GlobalSvgSelector';

const ReviewForm: React.FC = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        control,
    } = useForm({
        mode: "onBlur",
    })

    const [rating, setRating] = useState(0);

    const [isOpen, setIsOpen] = useState(false);

    const selectOptions = [
        { value: 'lessThanMouth', label: 'Менее месяца' },
        { value: 'biggerThanMouth', label: 'Более месяца' },
        { value: 'biggerThanYear', label: 'Более года' },
        { value: 'biggerThanYears', label: 'Более 3-х лет' },
    ]

    const onOpenOrClose = () => {
        setIsOpen(!isOpen)
    }

    const onSubmit = handleSubmit((data) => {

        const submitData = { 
            ...data, 
            rating, 
        }
        console.log(submitData)
        reset({
            comment: '',
            dignity: '',
            flews: '',
        });
        setRating(0);
    })

    const formFieldsClasses = classNames(s.form_fields, isOpen ? s.opened : s.closed)

    return (
        <form className={s.review_form} onSubmit={onSubmit}>
            <h3 className={s.title} onClick={onOpenOrClose}>
                <span className={s.title__text}>Написать отзыв</span>
                <span className={s.title__icon}><GlobalSvgSelector id='arrow' /></span>
            </h3>
            <div className={formFieldsClasses}>
                <div className={s.rating}>
                    <span>Оценка</span>
                    <Rating setRating={setRating} rating={rating} />
                </div>
                <div className={s.used_term}>
                    <span>Срок использования: </span>
                    <Controller
                        render={({ field }) => (
                            <DefaultSelect options={selectOptions} {...field} />)}
                        name="usedTerm"
                        control={control}
                    />
                </div>
                <div className={s.text_input_item}>
                    <TextInput register={register} errors={errors} name='dignity' label='Достоинства' textarea={true} />
                </div>
                <div className={s.text_input_item}>
                    <TextInput register={register} errors={errors} name='flews' label='Недостатки' textarea={true} />
                </div>
                <div className={s.text_input_item}>
                    <TextInput register={register} errors={errors} name='comment' label='Комментарий' textarea={true} />
                </div>
                <SubmitButton value="Оставить отзыв" />
            </div>

        </form>
    )
}

export default ReviewForm;