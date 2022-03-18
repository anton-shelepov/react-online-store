import { useEffect } from 'react';
import { ActionMeta, SingleValue } from 'react-select';
import ProductCard from '../../../components/ProductCard/ProductCard';
import CreateProductForm from '../../../components/_common/Forms/CreateProductForm/CreateProductForm';
import DefaultSelect from '../../../components/_common/Selects/DefaultSelect';
import { fetchCategoriesRequest, fetchCategoryProductsRequest } from '../../../store/actions/catalogActions/catalogActions';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/hooks';
import s from './ProductsEditPage.module.scss';

interface IProductsEditPage { }

const ProductsEditPage: React.FC<IProductsEditPage> = (props) => { 

    const dispatch = useAppDispatch()

    const products = useAppSelector(store => store.catalog.categoryProducts)

    const categories = useAppSelector(store => store.catalog.categories)

    const onSelectChange = (e: any)=> {
        dispatch(fetchCategoryProductsRequest(e.value))
    } 

    useEffect(() => {
        dispatch(fetchCategoriesRequest())
    }, [dispatch])

    const options = categories.map(category => ({
        value: category.categoryName, 
        label: category.categoryCatalogName,
    }))

    return (
        <div className={s.products_edit}>
            <h2 className={s.title}>Редактирование товаров</h2>
            <div className={s.container}>
                <div className={s.category_select}>
                    <h2 className={s.categories_title}>Категория</h2>
                    <DefaultSelect options={options} onChange={onSelectChange} />
                </div>
                <div className={s.products}>
                    <h2 className={s.products_title}>Список товаров</h2>
                    {products.length === 0
                        ? <span>Для отображения списка товаров, выберите категорию</span>
                        : <div className={s.products_info}>
                            <div className={s.products_items}>
                                {
                                    products.map(product => (<ProductCard btnIcon='close' btnValue='Удалить из каталога' {...product} />))
                                }
                            </div>
                            <div className={s.product_create}>
                                <CreateProductForm />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsEditPage;