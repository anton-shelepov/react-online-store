import ProfileInfo from '../../Components/ProfileInfo/ProfileInfo';
import ProfileEditForm from '../../Components/_Common/Forms/ProfileEditForm/ProfileEditForm';
import s from './ProfilePage.module.scss';

const ProfilePage: React.FC = () => {
    return (
        <div className={s.profile}>
            <div className={s.block_left}>
                <ProfileInfo />
            </div>
            <div className={s.block_right}> 
                <ProfileEditForm />
            </div>
        </div>
    )
}

export default ProfilePage;