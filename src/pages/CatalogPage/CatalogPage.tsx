import CatalogItem from '../../Components/CatalogItem/CatalogItem';
import { useAppSelector } from '../../Hooks/hooks';
import s from './CatalogPage.module.scss';

interface ICatalogPage { }

const CatalogPage: React.FC<ICatalogPage> = () => {

    const catalogItems = useAppSelector((state) => state.catalog.catalogItems)

    return (
        <div className={s.catalog_page}>
            <h1 className={s.page_title}>Каталог оборудования и комплектующих</h1>
            <div className={s.catalog_items}>
                {catalogItems.map(item => {
                    return (
                        <CatalogItem {...item} />
                    )
                })}
            </div>

        </div>
    )
}

export default CatalogPage;