import { Link } from 'react-router-dom';
import { ProductsItem } from '../../types/catalogTypes';
import { priceFormatter } from '../../utils/commonScripts/PriceFormatter';
import StaticRating from '../Rating/StaticRating/StaticRating';
import ButtonWithIcon from '../_common/Buttons/ButtonWithIcon/ButtonWithIcon';
import FavoriteButton from '../_common/Buttons/FavoriteButton/FavoriteButton';
import s from './ProductCard.module.scss';

const ProductCard: React.FC<ProductsItem> = ({
    images,
    title,
    id,
    rating,
    isInStock,
    isFavorite,
    price,
    discount,
    btnIcon,
    btnValue,
    _count,
}) => { 

    return (
        <div className={s.product_card}>
            <div className={s.block_left}>
                <img src={`http://localhost:3001/uploads/images/${images[0]?.fileName}`} className={s.product_image} alt='product' />
                <div className={s.product_info}>
                    <Link to={`/product/${id}`}><h3 className={s.title}>{title}</h3></Link>
                    <div className={s.additional}>
                        <div className={s.rating}>
                            <StaticRating reviews={_count?.reviews} rating={rating} /> 
                        </div>
                        <p className={s.in_stock}>В наличии: {isInStock ? "есть" : "нет"}</p>
                    </div>
                </div>
            </div>
            <div className={s.block_right}>
                <div className={s.price}>
                    { 
                        discount && (
                            <>
                                
                                <span className={s.discount}>{`-${discount}%`}</span>
                                <span className={s.old_price}>{priceFormatter(price + (price * (discount/100)))}</span>
                            </>
                        )
                    }
                    <p className={s.current_price}>{priceFormatter(price)}</p>
                </div>

                <div className={s.buttons}>
                    <FavoriteButton isFavorite={isFavorite} />
                    <ButtonWithIcon content={btnValue} icon={btnIcon} />
                </div>
            </div>
        </div>
    )
}

export default ProductCard;