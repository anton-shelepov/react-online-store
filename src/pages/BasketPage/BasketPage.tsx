import ProductCard from '../../components/ProductCard/ProductCard';
import SubmitButton from '../../components/_common/Buttons/SubmitButton/SubmitButton';
import { useAppSelector } from '../../utils/hooks/hooks';
import s from './BasketPage.module.scss';

interface IBasketPage { }

const BasketPage: React.FC<IBasketPage> = (props) => {

    const products = useAppSelector((store) => store.basket.products)

    return (
        <div className={s.basket_page}>
            <h1 className={s.title}>Корзина</h1>
            <div className={s.container}>
                <div className={s.products}>
                    {
                        products.map((product) => {
                            return (
                                <ProductCard btnValue='Удалить' btnIcon='close' {...product} />
                            )
                        })
                    }
                </div>
                <div className={s.info}>
                    <div className={s.summary}>
                        <h2 className={s.title}>Итого</h2>
                        <span className={s.sum}>sum</span>
                    </div>
                    <div className={s.products}>
                        <span>Товары</span>
                        <span>count шт.</span>
                    </div>
                    <div className={s.discount}>
                        <span>Скидка</span>
                        <span>- disc р.</span>
                    </div>
                    <div className={s.delivery}>
                        <span>Доставка</span>
                        <span>delivery р.</span>
                    </div>

                    <button className={s.order_btn}>Оформить заказ</button>
                </div>
            </div>
        </div>
    )
}

export default BasketPage;