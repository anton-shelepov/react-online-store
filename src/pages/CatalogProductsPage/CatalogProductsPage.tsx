import ProductCard from '../../Components/ProductCard/ProductCard';
import s from './CatalogProductsPage.module.scss';
import Info from './Info/Info';

interface ICatalogProductsPage { }

const CatalogProductsPage: React.FC<ICatalogProductsPage> = (props) => {

    return (
        <div className={s.catalog_products_page}>

            <Info />
            
            <div className={s.products}>
                <ProductCard
                    image='https://c.dns-shop.ru/thumb/st4/fit/320/250/34db2a2f4da9d68bce4084816e795ff8/41fbb0012918eb89be15f209addbb49912ee554576f157be471a9728f040d32c.jpg'
                    title='13.3" Ноутбук Apple MacBook Air серый'
                    reviewsCount={1200}
                    isInStock={false}
                    isFavorite={true}
                    oldPrice={1_000_000}
                    price={850_000}
                    discount={15} />
                <ProductCard
                    image='https://c.dns-shop.ru/thumb/st4/fit/320/250/34db2a2f4da9d68bce4084816e795ff8/41fbb0012918eb89be15f209addbb49912ee554576f157be471a9728f040d32c.jpg'
                    title='13.3" Ноутбук Apple MacBook Air серый'
                    reviewsCount={1200}
                    isInStock={true}
                    isFavorite={false}
                    price={1000_000} />
                <ProductCard
                    image='https://c.dns-shop.ru/thumb/st4/fit/320/250/34db2a2f4da9d68bce4084816e795ff8/41fbb0012918eb89be15f209addbb49912ee554576f157be471a9728f040d32c.jpg'
                    title='13.3" Ноутбук Apple MacBook Air серый'
                    reviewsCount={1200}
                    isInStock={true}
                    isFavorite={false}
                    price={1000_000} />
                <ProductCard
                    image='https://c.dns-shop.ru/thumb/st4/fit/320/250/34db2a2f4da9d68bce4084816e795ff8/41fbb0012918eb89be15f209addbb49912ee554576f157be471a9728f040d32c.jpg'
                    title='13.3" Ноутбук Apple MacBook Air серый'
                    reviewsCount={1200}
                    isInStock={true}
                    isFavorite={false}
                    price={1000_000} />
                <ProductCard
                    image='https://c.dns-shop.ru/thumb/st4/fit/320/250/34db2a2f4da9d68bce4084816e795ff8/41fbb0012918eb89be15f209addbb49912ee554576f157be471a9728f040d32c.jpg'
                    title='13.3" Ноутбук Apple MacBook Air серый'
                    reviewsCount={1200}
                    isInStock={true}
                    isFavorite={false}
                    price={1000_000} />
                <ProductCard
                    image='https://c.dns-shop.ru/thumb/st4/fit/320/250/34db2a2f4da9d68bce4084816e795ff8/41fbb0012918eb89be15f209addbb49912ee554576f157be471a9728f040d32c.jpg'
                    title='13.3" Ноутбук Apple MacBook Air серый'
                    reviewsCount={1200}
                    isInStock={true}
                    isFavorite={false}
                    price={1000_000} />
            </div>

        </div>
    )
}

export default CatalogProductsPage;