import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import s from './Header.module.scss'
import { GlobalSvgSelector } from '../Assets/GlobalSvgSelector' 

interface Props {

}

export default function Header({ }: Props): ReactElement {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.logo}>
                    <Link to='/'><GlobalSvgSelector id="main-logo"/></Link>
                </div>
                <input className={s.search_form} />
                <div className={s.info}>
                    <div className={s.block_top}>
                        <span className={s.location}>location</span>
                        <span className={s.phone}>8 (924) 336-33-78</span>
                    </div>
                    <div className={s.block_bottom}> 
                        <div className={s.nav}>
                            <Link className={s.item} to='/profile'><GlobalSvgSelector id="profile"/>Профиль</Link>
                            <Link className={s.item} to='/basket'><GlobalSvgSelector id="basket"/>Корзина</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
