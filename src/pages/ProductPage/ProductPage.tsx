import s from './ProductPage.module.scss';
import LargeProductCard from './../../Components/LargeProductCard/LargeProductCard';

interface IProductPage { }

const ProductPage: React.FC<IProductPage> = (props) => {
    return (
        <div className={s.product_page}>
            <h2 className={s.title}>13.3" Ноутбук Apple MacBook Air серый</h2>
            <LargeProductCard />
        </div>
    )
}

export default ProductPage;