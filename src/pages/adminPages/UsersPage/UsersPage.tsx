import s from './UsersPage.module.scss';

interface IUsersPage { }

const UsersPage: React.FC<IUsersPage> = (props) => {
    return (
        <div className={s.users_page}>
            <h2 className={s.title}>Пользователи</h2>
            <div className={s.users_list}>
                
            </div>
        </div>
    )
}

export default UsersPage;