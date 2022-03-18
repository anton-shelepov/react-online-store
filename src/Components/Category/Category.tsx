import { Link } from 'react-router-dom';
import { CategoriesItem } from '../../types/catalogTypes';
import { getImageSrc } from '../../utils/scripts/scripts';
import s from './Category.module.scss';


const Category: React.FC<CategoriesItem> = ({ image, categoryCatalogName, categoryName }) => {
    return (
        <Link className={s.container} to={categoryName}>
            <div className={s.catalog_item}>
                <img src={getImageSrc(image)} alt="catalog_item" />
                <span className={s.item_name}>{categoryCatalogName}</span>
            </div>
        </Link>
    )
}

export default Category;