import { getImageSrc } from '../../utils/scripts/scripts';
import s from './Discounts.module.scss';

interface DiscountItem {
    title: string,
    description: string,
    discountSize: string,
}

interface Props {
    discounts: DiscountItem[], 
} 

const Discounts: React.FC<Props> = ({ discounts }) => {
    return (
        <div className={s.discounts}>
            {discounts.map(item => {
                return (
                    <div key={item.title} className={s.discount_item} style={{backgroundImage: getImageSrc('das')}}>
                        <h3>{item.title}</h3>
                        <span className={s.description}>{item.description}</span>
                        <span className={s.discount}>{item.discountSize}</span>
                    </div>
                )
            })}
        </div>
    )
} 

export default Discounts;
