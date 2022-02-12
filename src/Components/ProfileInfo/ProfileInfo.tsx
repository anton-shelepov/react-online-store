import s from './ProfileInfo.module.scss';
import profile_photo_placeholder from './../../Images/ProfileImages/profile_photo_placeholder.jpg';
import { GlobalSvgSelector } from '../_Assets/GlobalSvgSelector';

let link = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF7Uu-WifiJwJwV8qAzPGYtgkZbt5VoJcusw&usqp=CAU'

const ProfileInfo: React.FC = () => {
    return (
        <div className={s.profile_info}> 
            <div className={s.profile_photo}>
                <img src={link !== '' ? link : profile_photo_placeholder} alt="profile_photo" />
                <div className={s.overlay}>
                    <GlobalSvgSelector id='photo' />
                </div>
            </div> 
            <span className={s.user_email}>{"user_email"}</span>
            <div className={s.info_item}>
                <h4 className={s.label}>Дата регистрации: &nbsp;</h4>
                <span className={s.value}>{'registration_date'}</span>
            </div>
            <div className={s.info_item}>
                <h4 className={s.label}>Количество заказов: &nbsp;</h4>
                <span className={s.value}>{'orders_count'}</span>
            </div>
            <div className={s.info_item}>
                <h4 className={s.label}>Товаров в списке желаемого: &nbsp;</h4>
                <span className={s.favorites_count}>{'favorites_count'}</span>
            </div>

        </div>
    )
}

export default ProfileInfo;