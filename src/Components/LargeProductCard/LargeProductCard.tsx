import { priceFormatter } from '../../Utils/CommonScripts/PriceFormatter';
import ProductGallery from '../ProductGallery/ProductGallery';
import Rating from '../Rating/Rating';
import ButtonWithIcon from '../_Common/Buttons/ButtonWithIcon/ButtonWithIcon';
import FavoriteButton from '../_Common/Buttons/FavoriteButton/FavoriteButton';
import s from './LargeProductCard.module.scss';

interface ILargeProductCard {
    discount?: number;
}

const LargeProductCard: React.FC<ILargeProductCard> = ({ discount = 15 }) => {
    return (
        <div className={s.large_product_card}>

            <ProductGallery />

            <div className={s.product_info}>
                <span className={s.main_parameters}>2560x1600, IPS, Apple M1, 8 ядер, RAM 16 ГБ, SSD 256 ГБ, Apple M1 7-core , macOS</span>
                <Rating reviewsCount={123} />
                <div className={s.buy}>
                    <div className={s.price}>
                        <div className={s.current_price}>
                            <span className={s.current_price}>{priceFormatter(100000)}</span>
                        </div>
                        <div className={s.discount}>
                            {
                                discount !== 0 && (
                                    <>
                                        <span className={s.discount_size}>{`-${discount}%`}</span>
                                        <span className={s.old_price}>{priceFormatter(120000)}</span>
                                    </>
                                )
                            }
                        </div> 
                    </div>
                    <div className={s.buttons}>
                        <FavoriteButton isFavorite={false} />
                        <ButtonWithIcon content='В корзину' icon='basket' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LargeProductCard;