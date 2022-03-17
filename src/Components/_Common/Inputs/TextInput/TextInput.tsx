import s from "./TextInput.module.scss";
import classNames from 'classnames'

interface IInputProps {
    required?: boolean;
    errors?: any;
    type?: string;
    label?: string;
    name: string;
    register?: any;
    textarea?: boolean;
    [x: string]: any;
}

const TextInput: React.FC<IInputProps> = ({
    register,
    required,
    label,
    name,
    errors,
    type = "text",
    textarea = false,
    ...props
}: IInputProps) => {

    const labelClasses = classNames(s.input_label, required && s.required) 

    return (
        <div className={s.text_input}>
            {label && <label className={labelClasses} htmlFor={name}>{label}</label>}
            {
                textarea
                    ? <textarea {...register(name)} id={name} type={type} {...props} />
                    : <input {...register(name)} id={name} type={type} {...props} />
            }
            {
                errors?.[name] && <p className={s.error}>{errors?.[name]?.message || "Ошибка!"}</p>
            }
        </div>
    )
}

export default TextInput;