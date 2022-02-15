import s from './ProductCard.module.scss';

interface IProductCard { }

const ProductCard: React.FC<IProductCard> = (props) => {
    return (
        <div className={s.product_card}>
            
        </div>
    )
}

export default ProductCard;