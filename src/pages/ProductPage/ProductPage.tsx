import s from './ProductPage.module.scss';
import LargeProductCard from '../../components/LargeProductCard/LargeProductCard'; 
import { useAppSelector } from '../../utils/hooks/hooks';
import ProductSpecs from '../../components/ProductSpecs/ProductSpecs';
import { ProductInfo, ProductReview, ProductSpec } from '../../types/productTypes';
import Reviews from '../../components/Reviews/Reviews';
import ReviewForm from '../../components/_common/Forms/ReviewForm/ReviewForm';

const ProductPage: React.FC = () => {

    const productInfo: ProductInfo = useAppSelector((store) => store.product.productInfo) 
    const productSpecs: ProductSpec[] = useAppSelector((store) => store.product.productSpecs) 
    const productReviews: ProductReview[] = useAppSelector((store) => store.product.productReviews)

    return (
        <div className={s.product_page}>
            <h2 className={s.title}>13.3" Ноутбук Apple MacBook Air серый</h2>
            <LargeProductCard {...productInfo} />
            <ProductSpecs title={productInfo.title} specs={productSpecs} />
            <ReviewForm />
            <Reviews title={productInfo.title} reviews={productReviews} />
        </div>
    )
}

export default ProductPage;