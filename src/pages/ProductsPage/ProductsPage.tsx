import ProductCard from '../../components/ProductCard/ProductCard';
import s from './ProductsPage.module.scss';
import Info from './Info/Info';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks';
import { fetchCategoryProductsRequest } from '../../store/actions/catalogActions/catalogActions';
import { useLocation } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';

interface IProductsPage { }

const ProductsPage: React.FC<IProductsPage> = (props) => {

    const categoryName = useLocation().pathname.split('/')[2]
    const queryPage = useLocation().search

    const catalog = useAppSelector(state => state.catalog)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCategoryProductsRequest(categoryName, queryPage))
    }, [categoryName, dispatch, queryPage])

    return (
        <div className={s.products_page}>

            <Info productsCount={catalog.productsCount} />

            <div className={s.products}>
                {
                    catalog.categoryProducts.map((product) => {
                        return (
                            <ProductCard btnValue='В корзину' btnIcon='basket' key={product.id} {...product} />
                        )
                    })
                }
            </div>

            {catalog.productsCount > catalog.pageSize &&
                <Pagination
                    pageSize={catalog.pageSize}
                    productsCount={catalog.productsCount}
                    queryPage={+queryPage}
                />}

        </div>
    )
}

export default ProductsPage;