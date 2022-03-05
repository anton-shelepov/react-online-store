import { Link } from 'react-router-dom';
import { ProductsItem } from '../../types/catalogTypes';
import { priceFormatter } from '../../utils/commonScripts/PriceFormatter';
import StaticRating from '../Rating/StaticRating/StaticRating';
import ButtonWithIcon from '../_common/Buttons/ButtonWithIcon/ButtonWithIcon';
import FavoriteButton from '../_common/Buttons/FavoriteButton/FavoriteButton';
import s from './ProductCard.module.scss'; 

const ProductCard: React.FC<ProductsItem> = ({ image, title, id, reviews, rating, isInStock, isFavorite, price, discount = 0, oldPrice = 0 }) => { 

    return (
        <div className={s.product_card}>
            <div className={s.block_left}>
                <img src={image} className={s.product_image} alt='product' />
                <div className={s.product_info}>
                    <Link to={`/product/${id}`}><h3 className={s.title}>{title}</h3></Link>
                    <div className={s.additional}>
                        <div className={s.rating}>
                            <StaticRating reviews={reviews} rating={rating} />
                        </div>
                        <p className={s.in_stock}>В наличии: {isInStock ? "есть" : "нет"}</p>
                    </div>
                </div>
            </div>
            <div className={s.block_right}>
                <div className={s.price}>
                    { 
                        discount !== 0 && (
                            <>
                                <span className={s.discount}>{`-${discount}%`}</span>
                                <span className={s.old_price}>{priceFormatter(oldPrice)}</span>
                            </> 
                        ) 
                    }
                    <p className={s.current_price}>{priceFormatter(price)}</p>
                </div>

                <div className={s.buttons}>
                    <FavoriteButton isFavorite={isFavorite} />
                    <ButtonWithIcon content='В корзину' icon='basket' />
                </div>
            </div>
        </div>
    )
}

export default ProductCard;