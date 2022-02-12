import s from "./SubmitButton.module.scss";

type Props = {
    value?: string;
    [x:string]: any;
}

const SubmitButton:React.FC<Props> = (props) => {
    return (
        <input className={s.submit_btn} type="submit" value={props.value} {...props}/>
    )
}

export default SubmitButton;