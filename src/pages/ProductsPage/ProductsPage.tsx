import ProductCard from '../../components/ProductCard/ProductCard';
import s from './ProductsPage.module.scss';
import Info from './Info/Info';
import { useEffect } from 'react';
import { useAppSelector } from '../../utils/hooks/hooks';

interface IProductsPage { }

const ProductsPage: React.FC<IProductsPage> = (props) => {

    useEffect(() => {
        // request for products data from DB
    }, [])

    const products = useAppSelector(state => state.catalog.products)

    return (
        <div className={s.products_page}>

            <Info />

            <div className={s.products}>
                {
                    products.map((product) => {
                        return (
                            <ProductCard key={product.id} {...product} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ProductsPage;