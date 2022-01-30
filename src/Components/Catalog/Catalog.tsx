import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import s from './Catalog.module.scss'


interface Props {
    
}

export default function Catalog({}: Props): ReactElement { 

    return (
        <div className={s.catalog}>
            <h1>Каталог</h1>
            <ul className={s.categories_list}>
                <li><Link to="/catalog/computers">Компьютеры</Link></li>
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
                <li><Link to="/catalog/computers">Мониторы</Link></li> 
                <li><Link to="/catalog/computers">Компьютеры</Link></li>
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
                <li><Link to="/catalog/computers">Мониторы</Link></li> 
            </ul>
        </div>
    )
}
