import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { GlobalSvgSelector } from '../_utils/GlobalSvgSelector';
import s from './AdminSidebar.module.scss';

interface IAdminSidebar { }

const AdminSidebar: React.FC<IAdminSidebar> = (props) => {

    const pathname = useLocation().pathname
    console.log(pathname)

    const path = '/admin/'

    return (
        <nav className={s.admin_sidebar}>
            <div className={s.logo}>
                <GlobalSvgSelector id='main-logo' />
            </div>
            <div className={s.nav}>
                <ul className={s.nav_items}>
                    <li className={`${s.nav_item} ${pathname === (path + 'home') ? s.active : ''}`}>
                        <Link to={path + 'home'}>Главная страница
                            <GlobalSvgSelector id='home' />
                        </Link>
                    </li>
                    <li className={`${s.nav_item} ${pathname === (path + 'categories') ? s.active : ''}`}>
                        <Link to={path + 'categories'}>Редактирование категорий
                            <GlobalSvgSelector id='category' />
                        </Link>
                    </li>
                    <li className={`${s.nav_item} ${pathname === (path + 'products') ? s.active : ''}`}>
                        <Link to={path + 'products'}>Редактирование товаров
                            <GlobalSvgSelector id='product' />
                        </Link>
                    </li>
                    <li className={`${s.nav_item} ${pathname === (path + 'users') ? s.active : ''}`}>
                        <Link to={path + 'users'}>Пользователи
                            <GlobalSvgSelector id='profile' />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AdminSidebar;