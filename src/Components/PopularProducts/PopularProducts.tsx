import { PopularProduct } from '../../types/homeTypes';
import { discountCalculate, getImageSrc, priceFormatter } from '../../utils/scripts/commonScripts';
import StaticRating from '../Rating/StaticRating/StaticRating';
import s from './PopularProducts.module.scss';


interface IPopularProducts {
    popularProducts: PopularProduct[]
}

const PopularProducts: React.FC<IPopularProducts> = ({ popularProducts }) => {
    return (
        <div className={s.popular_products} >
            <h2 className={s.title}>Сейчас популярно</h2>
            <div className={s.container}>
                {
                    popularProducts.map((product) => {
                        return (
                            <div className={s.card}>
                                <img src={product?.image?.length
                                    ? getImageSrc(product.image)
                                    : undefined}
                                    alt='popular_product'
                                />
                                <h3 className={s.product_title}>{product.title}</h3>
                                <div className={s.rating}>
                                    <StaticRating reviews={product._count?.reviews} rating={product.rating} />
                                </div>
                                <p className={s.in_stock}>В наличии: {product.isInStock ? "есть" : "нет"}</p>
                                <div className={s.price}>
                                    <span className={s.current_price}>{priceFormatter(product.price)}</span>
                                    {
                                        product.discount !== 0 && product.discount !== undefined && (
                                            <>
                                                <div className={s.discount_block}>
                                                    <span className={s.discount}>{`-${product.discount}%`}</span>
                                                    <span className={s.old_price}>{priceFormatter(product.price + (product.price * (product.discount / 100)))}</span>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PopularProducts;