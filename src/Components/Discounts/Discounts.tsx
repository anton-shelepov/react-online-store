import s from './Discounts.module.scss';

interface DiscountItem {
    title: string,
    description: string,
    discountSize: string,
    image: string,
}

interface Props {
    discounts: DiscountItem[],
}

const Discounts: React.FC<Props> = ({ discounts }) => {
    return (
        <>
            <h2 className={s.section_title}>Активные распродажи</h2>
            <div className={s.discounts}>
                {discounts.map(item => {
                    return (
                        <div key={item.title} className={s.discount_item} style={{ backgroundImage: `url(${item.image})` }}>
                            <div className={s.wrapper}>
                                <h3>{item.title}</h3>
                                <span className={s.description}>{item.description}</span>
                                <span className={s.discount}>{item.discountSize}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Discounts;
