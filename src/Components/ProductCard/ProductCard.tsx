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
    price: any;
}

const ProductCard: React.FC<IProductCard> = ({ image, title, reviewsCount, isInStock, isFavorite, price }) => {
    return (
        <div className={s.product_card}>
            <div className={s.block_left}>
                <img src={image} className={s.product_image} alt='product' />
                <div className={s.product_info}>
                    <h3 className={s.title}>{title}</h3>
                    <div className={s.additional}>
                        <div className={s.rating}>
                            <Rating />
                            <span>{reviewsCount}</span>
                        </div>
                        <p className={s.in_stock}>В наличии: {isInStock ? "есть" : "отсутствует"}</p>
                    </div>
                </div>
            </div>
            <div className={s.block_right}>
                <p className={s.price}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} р.</p>
                <div className={s.buttons}> 
                    <FavoriteButton isFavorite={isFavorite} />
                    <ButtonWithIcon content='В корзину' icon='basket' />
                </div>
            </div>
        </div>
    )
}

export default ProductCard;