import { GlobalSvgSelector } from '../../../_Assets/GlobalSvgSelector';
import s from './ButtonWithIcon.module.scss';

interface IButtonWithIcon {
    content: string; 
    icon: string;
}

const ButtonWithIcon: React.FC<IButtonWithIcon> = ({ content, icon }) => {
    return (
        <button className={s.button_with_icon}>
            <i><GlobalSvgSelector id={icon} /></i>
            {content}
        </button>
    )
}

export default ButtonWithIcon;