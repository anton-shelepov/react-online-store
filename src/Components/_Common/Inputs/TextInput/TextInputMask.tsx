import s from "./TextInput.module.scss";


interface IInputProps {
    required?: boolean; 
    type?: string;
    label: string;
    errors?: any;
    name: string; 
    [x:string]: any;
}

const TextInputMask: React.FC<IInputProps> = ({ 
    required,
    label,
    name, 
    type = "text", 
    errors,
    ...props
}: IInputProps) => {

    return (
        <div className={s.text_input}>
            <label className={required ? s.required : undefined} htmlFor={name}>{label}</label>
            <input id={name} {...props} />
            {
                errors?.[name] && <p className={s.error}>{errors?.[name]?.message || "Ошибка!"}</p>
            }
        </div>
    )
}

export default TextInputMask;