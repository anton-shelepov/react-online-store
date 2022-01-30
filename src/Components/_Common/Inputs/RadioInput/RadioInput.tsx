import s from "./RadioInput.module.scss";

interface IInputProps {
    required?: boolean | string;
    label: string;
    name: string;
    id: string; 

    register: any;
}


const RadioInput: React.FC<IInputProps> = ({ register, label, name, id }: IInputProps) => {
    return (
        <div className={s.radio_input}>
            <label htmlFor={id}>
                <input {...register(name)} id={id} value={id} type="radio" />
                {label}
            </label>
        </div>

    )
}

export default RadioInput;
