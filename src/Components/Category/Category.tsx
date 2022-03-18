import { Link } from 'react-router-dom';
import { CategoriesItem } from '../../types/catalogTypes';
import s from './Category.module.scss';


const Category: React.FC<CategoriesItem> = ({ image, categoryCatalogName, categoryName }) => {
    return (
        <Link className={s.container} to={categoryName}>
            <div className={s.catalog_item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEWB_2cNs6vOkbKy8L3ttN3STSumC41xFfw&usqp=CAU" alt="catalog_item_image" />
                <span className={s.item_name}>{categoryCatalogName}</span>
            </div>
        </Link>
    )
}

export default Category;