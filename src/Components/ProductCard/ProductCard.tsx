import { Link } from 'react-router-dom';
import { priceFormatter } from '../../Utils/CommonScripts/PriceFormatter';
import Rating from '../Rating/Rating';
import ButtonWithIcon from '../_Common/Buttons/ButtonWithIcon/ButtonWithIcon';
import FavoriteButton from '../_Common/Buttons/FavoriteButton/FavoriteButton';
import s from './ProductCard.module.scss';

interface IProductCard {
    image: string;
    title: string;
    reviewsCount: number;
    isInStock: boolean;
    isFavorite: boolean;
    price: number;
    discount?: number;
    oldPrice?: number;
}

const ProductCard: React.FC<IProductCard> = ({ image, title, reviewsCount, isInStock, isFavorite, price, discount = 0, oldPrice = 0 }) => { 

    return (
        <div className={s.product_card}>
            <div className={s.block_left}>
                <img src={image} className={s.product_image} alt='product' />
                <div className={s.product_info}>
                    <Link to='/product/1'><h3 className={s.title}>{title}</h3></Link>
                    <div className={s.additional}>
                        <div className={s.rating}>
                            <Rating reviewsCount={reviewsCount} />
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
                                <span className={s.old_price}>{priceFormatter(price)}</span>
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