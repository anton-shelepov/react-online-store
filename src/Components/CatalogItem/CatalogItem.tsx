import { Link } from 'react-router-dom';
import { CatalogItems } from '../../Types/catalogTypes';
import s from './CatalogItem.module.scss';


const CatalogItem: React.FC<CatalogItems> = ({ image, itemName, link }) => {
    return (
        <Link to={link}>
            <div className={s.catalog_item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEWB_2cNs6vOkbKy8L3ttN3STSumC41xFfw&usqp=CAU" alt="catalog_item_image" />
                <span className={s.item_name}>{itemName}</span>
            </div>
        </Link>
    )
}

export default CatalogItem;