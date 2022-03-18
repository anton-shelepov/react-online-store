import s from "./FileInput.module.scss";

interface IInputProps {
    required?: boolean | string;
    label: string;
    name: string;
    id: string;

    register: any;
}


const FileInput: React.FC<IInputProps> = ({ register, label, name, id }: IInputProps) => {
    return (
        <div className={s.file_input}>
            <label htmlFor={id}>
                {label}
                <input {...register(name)} id={id} type="file" />
            </label>
        </div>

    )
}

export default FileInput;
