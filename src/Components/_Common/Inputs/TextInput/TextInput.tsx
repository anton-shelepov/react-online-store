import s from "./TextInput.module.scss";


interface IInputProps {
    required?: boolean;
    errors?: any;
    type?: string;
    label: string;
    name: string;
    register?: any; 
    [x:string]: any;
}

const TextInput: React.FC<IInputProps> = ({
    register,
    required,
    label,
    name,
    errors,
    type = "text", 
    ...props
}: IInputProps) => {

    return (
        <div className={s.text_input}>
            <label className={required ? s.required : undefined} htmlFor={name}>{label}</label>
            <input {...register(name)} id={name} type={type} {...props} /> 
            {
                errors?.[name] && <p className={s.error}>{errors?.[name]?.message || "Ошибка!"}</p>
            }
        </div>
    )
}

export default TextInput;