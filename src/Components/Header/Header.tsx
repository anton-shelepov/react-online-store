import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import s from './Header.module.scss'


interface Props {

}

export default function Header({ }: Props): ReactElement {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.block_top}>
                    <div className={s.location}>location</div>
                    <div className={s.phone}>8 (924) 336-33-78</div>
                </div>
                <div className={s.block_bottom}>
                    <img className={s.main_logo} alt='main-logo' />
                    <form className={s.search_form}>input form search</form>
                    <div className={s.nav}>
                        <Link to='/profile'>Профиль</Link>
                        <Link to='/basket'>Корзина</Link>
                    </div>
                </div>
            </div> 
        </header>
    )
}
