import React, { ReactElement } from 'react'
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
    debugger
    return (
        <div className={s.discounts}>
            {discounts.map(item => {
                return (
                    <div key={item.title} className={s.discount_item}>
                        <h3>{item.title}</h3>
                        <span>{item.description}</span>
                        <span>{item.discountSize}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Discounts;
