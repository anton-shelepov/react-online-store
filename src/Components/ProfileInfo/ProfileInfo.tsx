import s from './ProfileInfo.module.scss';
import profile_photo_placeholder from './../../images/ProfileImages/profile_photo_placeholder.jpg';
import { GlobalSvgSelector } from '../_assets/GlobalSvgSelector';

let link = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF7Uu-WifiJwJwV8qAzPGYtgkZbt5VoJcusw&usqp=CAU'

const ProfileInfo: React.FC = () => {
    return (
        <div className={s.profile_info}> 
        <h2 className={s.page_title}>Информация о профиле</h2>
            <div className={s.profile_photo}>
                <img src={link !== '' ? link : profile_photo_placeholder} alt="profile_photo" />
                <div className={s.overlay}>
                    <GlobalSvgSelector id='photo' />
                </div>
            </div> 
            <span className={s.user_email}>{"shelepovantonweb@gmail.com"}</span>
            <div className={s.info_item}>
                <h4 className={s.label}>Дата регистрации: &nbsp;</h4>
                <span className={s.value}>{"10.10.2021" || 'registration_date'}</span>
            </div>
            <div className={s.info_item}>
                <h4 className={s.label}>Количество заказов: &nbsp;</h4>
                <span className={s.value}>{22 || 'orders_count'}</span>
            </div>
            <div className={s.info_item}>
                <h4 className={s.label}>Товаров в списке желаемого: &nbsp;</h4>
                <span className={s.favorites_count}>{10 || 'favorites_count'}</span>
            </div>

        </div>
    )
}

export default ProfileInfo;