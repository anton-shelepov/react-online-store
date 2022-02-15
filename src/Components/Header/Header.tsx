import { Link } from 'react-router-dom'
import s from './Header.module.scss'
import { GlobalSvgSelector } from '../_Assets/GlobalSvgSelector'
import SearchForm from '../_Common/Forms/SearchForm/SearchForm'
import { useAppSelector } from '../../Hooks/hooks'

type Props = {

}

const Header: React.FC<Props> = () => {

    const isAuth = useAppSelector((state) => state.auth.isAuth)

    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.logo}>
                    <Link to='/'><GlobalSvgSelector id="main-logo" /></Link>
                </div>
                <SearchForm /> 
                {
                    isAuth
                        ? <div className={s.nav}>
                            <Link className={s.item} to='/profile'><GlobalSvgSelector id="profile" />Профиль</Link>
                            <Link className={s.item} to='/orders'><GlobalSvgSelector id="orders" />Заказы</Link>
                            <Link className={s.item} to='/basket'><GlobalSvgSelector id="basket" />Корзина</Link>
                        </div> 
                        : <div className={s.nav}>
                            <Link className={s.item} to='/auth'><GlobalSvgSelector id="auth" />Вход в аккаунт</Link>
                        </div> 
                }
            </div>
        </header>
    )
}


export default Header;