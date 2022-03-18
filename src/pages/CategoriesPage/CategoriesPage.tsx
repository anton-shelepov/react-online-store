
import Category from '../../components/Category/Category';
import { useAppSelector } from '../../utils/hooks/hooks';
import s from './CategoriesPage.module.scss';

interface ICategoriesPage { }

const CategoriesPage: React.FC<ICategoriesPage> = () => {

    const categories = useAppSelector((state) => state.catalog.categories)

    return (
        <div className={s.categories_page}>
            <h1 className={s.page_title}>Каталог оборудования и комплектующих</h1>
            <div className={s.categories_items}>
                {categories.map(item => {
                    return (
                        <Category key={item.categoryName} {...item} />
                    )
                })}
            </div>

        </div>
    )
}

export default CategoriesPage;