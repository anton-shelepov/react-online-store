import s from './ViewedProducts.module.scss';

interface IViewedProducts { }

const ViewedProducts: React.FC<IViewedProducts> = (props) => {
    return (
        <div className={s.viewed_products}>
            <h2 className={s.title}>Ранее просмотренное</h2>
            
        </div>
    )
}

export default ViewedProducts;