import { MouseEventHandler, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import s from './CatalogSidebar.module.scss'


interface ICatalogSidebar {
    closeSideBar?: MouseEventHandler<HTMLAnchorElement> | undefined;
    isOpen?: boolean;
}

export default function CatalogSidebar({closeSideBar, isOpen}: ICatalogSidebar): ReactElement { 

    return (
        <div className={s.catalog}>
            <h1><Link to='/catalog'>Каталог</Link></h1>
            <ul className={s.categories_list}>
                <li><Link to="/catalog/computers" onClick={isOpen ? closeSideBar : undefined}>Компьютеры</Link></li> 
                <li><Link to="/catalog/laptops">Ноутбуки</Link></li>
                <li><Link to="/catalog/tablets">Планшеты</Link></li>
                <li><Link to="/catalog/computers">Комплектующие</Link></li>
                <li><Link to="/catalog/computers">Моноблоки</Link></li>
                <li><Link to="/catalog/computers">Сетевое оборудование</Link></li>
                <li><Link to="/catalog/computers">Сетевые хранилища</Link></li>
                <li><Link to="/catalog/computers">Серверы</Link></li>
                <li><Link to="/catalog/computers">Мониторы</Link></li> 
                <li><Link to="/catalog/computers">Компьютеры</Link></li>
                <li><Link to="/catalog/laptops">Ноутбуки</Link></li>
                <li><Link to="/catalog/tablets">Планшеты</Link></li>
                <li><Link to="/catalog/computers">Комплектующие</Link></li>
                <li><Link to="/catalog/computers">Моноблоки</Link></li>
                <li><Link to="/catalog/computers">Сетевое оборудование</Link></li>
                <li><Link to="/catalog/computers">Сетевые хранилища</Link></li>
                <li><Link to="/catalog/computers">Серверы</Link></li> 
            </ul>
        </div>
    )
}
