
import { useEffect } from 'react';
import Category from '../../components/Category/Category';
import { fetchCategoriesRequest } from '../../store/actions/catalogActions/catalogActions';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks';
import s from './CategoriesPage.module.scss';

interface ICategoriesPage { }

const CategoriesPage: React.FC<ICategoriesPage> = () => {

    const dispatch = useAppDispatch()

    const categories = useAppSelector((state) => state.catalog.categories)

    useEffect(() => {
        if (categories.length === 0) {
            dispatch(fetchCategoriesRequest())
        }
    }, [dispatch, categories])

    return (
        <div className={s.categories_page}>
            <h1 className={s.page_title}>Каталог оборудования и комплектующих</h1>
            <div className={s.categories_items}>
                {categories.map(category => {
                    return (
                        <Category key={category.categoryName} {...category} />
                    )
                })}
            </div>

        </div>
    )
}

export default CategoriesPage;