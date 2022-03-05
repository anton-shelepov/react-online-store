import { Link } from 'react-router-dom'
import s from './Header.module.scss'
import { GlobalSvgSelector } from '../_assets/GlobalSvgSelector'
import SearchForm from '../_common/Forms/SearchForm/SearchForm'
import { useAppSelector } from '../../utils/hooks/hooks'
import CatalogBurgerMenu from '../CatalogBurgerMenu/CatalogBurgerMenu'
import MediaQuery from 'react-responsive'
import { mediumWidth, smallWidth } from '../_assets/BreakpointsConsts'
import SearchButton from '../_common/Buttons/SeacrhButton/SearchButton'

type Props = {

}

const Header: React.FC<Props> = () => {

    const isAuth = useAppSelector((state) => state.auth.isAuth)

    return (
        <header className={s.header}>
            <div className={s.container}>

                <div className={s.block_left}>

                    <MediaQuery maxWidth={mediumWidth}>
                        <CatalogBurgerMenu />
                    </MediaQuery>

                    <div className={s.logo}>
                        <Link to='/'><GlobalSvgSelector id="main-logo" /></Link>
                    </div>
                </div>

                <SearchForm />

                <div className={s.block_right}>
                    <div className={s.nav}>
                        <MediaQuery maxWidth={mediumWidth} minWidth={smallWidth}>
                            <SearchButton>Поиск</SearchButton>
                        </MediaQuery> 
                        {
                            isAuth
                                ? <>
                                    <Link className={s.item} to='/profile'><GlobalSvgSelector id="profile" />Профиль</Link>
                                    <Link className={s.item} to='/orders'><GlobalSvgSelector id="orders" />Заказы</Link>
                                    <Link className={s.item} to='/basket'><GlobalSvgSelector id="basket" />Корзина</Link>
                                </>
                                : <>
                                    <Link className={s.item} to='/auth'><GlobalSvgSelector id="auth" />Вход в аккаунт</Link>
                                </>
                        }
                    </div>
                </div>

            </div>
        </header >
    )
}


export default Header;