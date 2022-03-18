import { useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { ProductInfo } from '../../types/productTypes';
import { priceFormatter } from '../../utils/scripts/scripts';
import ProductGallery from '../ProductGallery/ProductGallery';
import StaticRating from '../Rating/StaticRating/StaticRating';
import MainSlider from '../Slider/Slider';
import { smallWidth } from '../_assets/BreakpointsConsts';
import { GlobalSvgSelector } from '../_assets/GlobalSvgSelector';
import ButtonWithIcon from '../_common/Buttons/ButtonWithIcon/ButtonWithIcon';
import FavoriteButton from '../_common/Buttons/FavoriteButton/FavoriteButton';
import s from './LargeProductCard.module.scss';


const LargeProductCard: React.FC<ProductInfo> = ({
    images,
    title,
    mainSpecs,
    rating,
    reviews,
    discount,
    oldPrice,
    price,
    isFavorite,
    isInStock,
    deliveryPrice, }) => {

    useEffect(() => {
        // Request for product data by id
    }, [])

    return (
        <div className={s.large_product_card}>

            <ProductGallery images={images} />

            <MediaQuery maxWidth={smallWidth}>
                <MainSlider isArrows={false} images={images} />
            </MediaQuery>

            <div className={s.product_info}>
                <span className={s.main_parameters}>2560x1600, IPS, Apple M1, 8 ядер, RAM 16 ГБ, SSD 256 ГБ, Apple M1 7-core , macOS</span>
                <StaticRating rating={rating} reviews={reviews} />
                <div className={s.buy}>
                    <div className={s.price}>
                        <div className={s.current_price}>
                            <span>{priceFormatter(100000)}</span>
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
                <div className={s.order}>
                    <div className={s.order_info}>
                        <p className={s.in_stock}>В наличии:
                            <span className={s.in_stock__value}>{isInStock ? 'есть' : 'нет'}</span>
                        </p>
                        <p className={s.delivery_time}>Стоимость доставки:
                            <span className={s.delivery_time__value}>{deliveryPrice ? priceFormatter(deliveryPrice) : 'бесплатно'}</span>
                        </p>
                    </div>
                    <GlobalSvgSelector id='delivery' />
                </div>
            </div>
        </div>
    )
}

export default LargeProductCard;