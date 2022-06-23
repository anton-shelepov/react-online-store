import classNames from 'classnames';
import { useState } from 'react';
import { GlobalSvgSelector } from '../_utils/GlobalSvgSelector';
import s from './AlertMessage.module.scss';

interface IAlertMessage {
    message: string,
    success: boolean,
}

const AlertMessage: React.FC<IAlertMessage> = ({ message, success }) => {

    if (message) {

    }

    const [isShow, setIsShow] = useState(false);

    const onHandleClose = () => {
        setIsShow(false)
    }

    const alertClasses = classNames(s.alert, isShow && s.show)

    return (
        <div className={alertClasses}>
            <button onClick={onHandleClose} className={s.close_btn}><GlobalSvgSelector id='close' /></button>
            <div className={s.message}>
                <span>{message}</span>
                {success
                    ? <GlobalSvgSelector id='success' />
                    : <GlobalSvgSelector id='failure' />
                }
            </div>
        </div>
    )
}

export default AlertMessage;