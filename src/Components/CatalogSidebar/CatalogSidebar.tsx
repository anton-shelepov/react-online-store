import { MouseEventHandler, ReactElement, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchCategoriesRequest } from '../../store/actions/catalogActions/catalogActions';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks';
import { getImageSrc } from '../../utils/scripts/scripts';
import s from './CatalogSidebar.module.scss'


interface ICatalogSidebar {
    closeSideBar?: MouseEventHandler<HTMLAnchorElement> | undefined;
    isOpen?: boolean;
}

export default function CatalogSidebar({ closeSideBar, isOpen }: ICatalogSidebar): ReactElement {

    const dispatch = useAppDispatch()

    const categories = useAppSelector(store => store.catalog.categories) 

    useEffect(() => {
        if(categories.length === 0) {
            dispatch(fetchCategoriesRequest())
        }
    }, [dispatch, categories])


    return (
        <div className={s.catalog}>
            <h2 className={s.title}><Link to='/catalog'>Каталог</Link></h2>
            <ul className={s.categories_list}>
                {
                    categories.map(category => {
                        const { categoryName, categoryCatalogName, icon } = category
                        return (
                            <li key={categoryName}>
                                <Link to={`/catalog/${categoryName}`} onClick={isOpen ? closeSideBar : undefined}>
                                    <img src={getImageSrc(icon)} alt='category' />
                                    {categoryCatalogName}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
