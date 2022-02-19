import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../Utils/Hooks/hooks';
import { GlobalSvgSelector } from '../_Assets/GlobalSvgSelector';
import SearchButton from '../_Common/Buttons/SubmitButton/SeacrhButton/SearchButton';
import s from './MobileBottomNav.module.scss';

interface IMobileBottomNav { }

const MobileBottomNav: React.FC<IMobileBottomNav> = (props) => {

    const pathname = useLocation().pathname

    const isAuth = useAppSelector((state) => state.auth.isAuth)

    return (
        isAuth
            ? (
                <div className={s.mobile_bottom_nav}>
                    <Link className={pathname === "/" ? s.active : undefined} to="/">
                        <GlobalSvgSelector id='home' />
                    </Link>
                    <Link className={pathname === "/profile" ? s.active : undefined} to="/profile">
                        <GlobalSvgSelector id='profile' />
                    </Link>
                    <SearchButton />
                    <Link className={pathname === "/orders" ? s.active : undefined} to="/orders">
                        <GlobalSvgSelector id='orders' />
                    </Link>
                    <Link className={pathname === "/basket" ? s.active : undefined} to="/basket">
                        <GlobalSvgSelector id='basket' />
                    </Link>
                </div>
            )
            : (
                <div className={s.mobile_bottom_nav}>
                    <Link className={pathname === "/" ? s.active : undefined} to="/">
                        <GlobalSvgSelector id='home' />
                    </Link>
                    <SearchButton />
                    <Link className={pathname === "/auth" ? s.active : undefined} to="/auth">
                        <GlobalSvgSelector id='auth' />
                    </Link>
                </div>
            )
    )
}

export default MobileBottomNav;