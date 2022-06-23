import { useEffect, useMemo } from 'react';
import ReactTable from '../../../components/ReactTable/ReactTable';
import ButtonWithIcon from '../../../components/_common/Buttons/ButtonWithIcon/ButtonWithIcon';
import { fetchAllUsersRequest } from '../../../store/actions/usersActions/usersActions';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/reduxHooks';
import s from './UsersPage.module.scss';

interface IUsersPage { }

const UsersPage: React.FC<IUsersPage> = (props) => {

    const columns = useMemo(
        () => [
            {
                Header: ' ',
                columns: [
                    {
                        Header: 'Номер',
                        accessor: 'id',
                    },
                    {
                        Header: 'Фото профиля',
                        accessor: 'profileImage',
                    },
                    {
                        Header: 'Роль',
                        accessor: 'role',
                    },
                    {
                        Header: 'Дата регистрации',
                        accessor: 'createdAt',
                    },
                    {
                        Header: 'Почта',
                        accessor: 'email',
                    },
                    {
                        Header: 'Отзывы (шт.)',
                        accessor: 'review',
                    },
                    {
                        Header: 'Действия',
                        accessor: 'buttons',
                    },
                ],
            },
        ],
        []
    )

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAllUsersRequest())
    }, [dispatch])

    const users = useAppSelector(store => store.users.users)

    const tableData = users.map(user => {

        const createdAt = user.createdAt.replace('T', ' ').replace(/-/g, '.').slice(0, -5)

        return {
            id: user.id,
            profileImage: !user.profileImage ? 'placeholder' : user.profileImage,
            role: user.role,
            createdAt,
            email: user.email,
            review: user._count.review,
            buttons: <ButtonWithIcon content="Заблокировать" icon="close" />
        }
    })


    return (
        <div className={s.users_page}>
            <h2 className={s.title}>Пользователи</h2>
            <div className={s.users_list}>
                <h2 className={s.users_list__title}>Список пользователей</h2>
                <ReactTable columns={columns} data={tableData} />
            </div>
        </div>
    )
}

export default UsersPage;