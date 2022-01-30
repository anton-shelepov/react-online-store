import s from './ProfileInfo.module.scss';

const ProfileInfo:React.FC = () => {
    return (
        <div className={s.profile_info}>
            <img src='' className={s.profile_photo} alt="profile_photo"/>
            <span className={s.user_name}>{"user_name"}</span>
        </div>
    )
}

export default ProfileInfo;