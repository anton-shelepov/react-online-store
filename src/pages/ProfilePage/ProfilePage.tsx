import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import ProfileEditForm from '../../components/_common/Forms/ProfileEditForm/ProfileEditForm';
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