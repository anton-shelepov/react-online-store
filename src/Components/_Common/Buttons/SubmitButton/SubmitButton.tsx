import s from "./SubmitButton.module.scss";

type Props = {
    value?: string;
    width?: string;
    [x: string]: any;
}

const SubmitButton: React.FC<Props> = (props) => {

    const style = {
        maxWidth: props.width
    }

    return (
        <input className={s.submit_btn} type="submit" style={style} value={props.value} {...props} />
    )
}

export default SubmitButton;  