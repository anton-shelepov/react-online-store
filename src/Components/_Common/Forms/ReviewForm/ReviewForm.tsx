import s from './ReviewForm.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RadioInput from '../../Inputs/RadioInput/RadioInput';
import TextInput from '../../Inputs/TextInput/TextInput';
import SubmitButton from '../../Buttons/SubmitButton/SubmitButton';
import Rating from '../../../Rating/Rating';
import { useState } from 'react';
import DefaultSelect from '../../Selects/DefaultSelect';

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

    const onSubmit = handleSubmit((data) => {
        console.log(data, rating)
        reset({
            comment: '',
            dignity: '',
            flews: '',
        });
        setRating(0);
    })

    const [rating, setRating] = useState(0); 

    const options = [
        { value: 'lessThanMouth', label: 'Менее месяца' },
        { value: 'biggerThanMouth', label: 'Более месяца' },
        { value: 'biggerThanYear', label: 'Более года' },
        { value: 'biggerThanYears', label: 'Более 3-х лет' },
    ]

    return (
        <form className={s.review_form} onSubmit={onSubmit}>
            <h3 className={s.title}>Написать отзыв</h3>
            <div className={s.rating}>
                <span>Оценка</span>
                <Rating setRating={setRating} rating={rating} />
            </div>
            <div className={s.used_term}>
                <span>Срок использования: </span>
                <Controller
                    render={({ field }) => (
                        <DefaultSelect options={options} {...field} />)}
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
        </form>
    )
}

export default ReviewForm;