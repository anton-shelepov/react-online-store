import s from "./TextInput.module.scss";


interface IInputProps {
    required?: boolean;
    errors?: any;
    type?: string; 
    label: string;
    name: string;
    register: any;
}

const TextInput: React.FC<IInputProps> = ({
    register, 
    required,
    label,
    name,
    errors, 
    type = "text"
}: IInputProps) => { 

    return (
        <div className={s.text_input}>
            <label className={required ? s.required : ''} htmlFor={name}>{label}</label>
            <input {...register(name)} id={name} type={type} />
            {
                errors?.[name] && <p className={s.error}>{errors?.[name]?.message || "Ошибка!"}</p>
            }
        </div>
    )
}

export default TextInput;