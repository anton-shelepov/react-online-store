import { Link } from 'react-router-dom';
import { GlobalSvgSelector } from '../_assets/GlobalSvgSelector';
import s from './AdminSidebar.module.scss';

interface IAdminSidebar { }

const AdminSidebar: React.FC<IAdminSidebar> = (props) => {
    return (
        <nav className={s.admin_sidebar}>
            <div className={s.logo}>
                <GlobalSvgSelector id='main-logo' />
            </div>
            <div className={s.nav}>
                <ul className={s.nav_items}>
                    <li className={s.nav_item}>
                        <Link to='/admin/home'>Главная страница
                            <GlobalSvgSelector id='home' />
                        </Link>
                    </li>
                    <li className={s.nav_item}>
                        <Link to='/admin/categories'>Редактирование категорий
                            <GlobalSvgSelector id='category' />
                        </Link>
                    </li>
                    <li className={s.nav_item}>
                        <Link to='/admin/products'>Редактирование товаров
                            <GlobalSvgSelector id='product' />
                        </Link>
                    </li>
                    <li className={s.nav_item}>
                        <Link to='/admin/users'>Пользователи
                            <GlobalSvgSelector id='profile' />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AdminSidebar;