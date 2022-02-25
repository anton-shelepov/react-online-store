import classNames from 'classnames';
import { FormEventHandler, MouseEventHandler, useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';
import { smallWidth } from '../_Assets/BreakpointsConsts';
import DefaultSelect from '../_Common/Selects/DefaultSelect';
import s from './Sort.module.scss';

interface ISort { }

const Sort: React.FC<ISort> = (props) => {

    const [sortValue, setSortValue] = useState('popularity')

    const [isMax, setIsMax] = useState(false)

    useEffect(() => {
        console.log('запрос')
    }, [sortValue])

    const onSortChange: FormEventHandler<HTMLInputElement> | undefined = (e: any) => {
        let targetValue: string = e.target.value;

        if (targetValue === 'price') {
            targetValue = isMax ? 'priceMax' : 'priceMin';
        }
        console.log(targetValue)
        setSortValue(targetValue)
    }

    const onSelectChange = (newValue: any) => { 
        setSortValue(newValue.value)
    }

    const onChangePriceSortType: MouseEventHandler<HTMLInputElement> | undefined = (value: any) => {
        setIsMax(!isMax)
        onSortChange(value)
    }

    const labelClassActive = (sortType: string) => classNames(s.sort_item, sortType === sortValue && s.active);

    const labelPriceClassActive = classNames(
        s.sort_item,
        s.price,
        sortValue === "priceMax" && `${s.arrow_top} ${s.active}`,
        sortValue === "priceMin" && `${s.arrow_bottom} ${s.active}`
    )

    return (
        <div className={s.sort} >
            <span>Сортировка по: </span>
            <div className={s.inline_sort} onChange={onSortChange}>

                <label className={labelClassActive("popularity")} htmlFor="popularity">Популярности
                    <input
                        type="radio"
                        value="popularity"
                        id="popularity"
                        name="sort" />
                </label>

                <label className={labelClassActive("rating")} htmlFor="rating">Рейтингу
                    <input
                        type="radio"
                        value="rating"
                        id="rating"
                        name="sort" />
                </label>

                <label
                    className={labelPriceClassActive}
                    htmlFor="price">Цене
                    <input
                        type="radio"
                        value="price"
                        id="price"
                        name="sort"
                        onClick={onChangePriceSortType}
                        className={s.price} />
                </label>

                <label className={labelClassActive("discount")} htmlFor="discount">Скидке
                    <input
                        type="radio"
                        value="discount"
                        id="discount"
                        name="sort" />
                </label>
            </div>

            <MediaQuery maxWidth={smallWidth}>
                <DefaultSelect onChange={onSelectChange} defaultValue={sortValue} />
            </MediaQuery>

        </div>
    )
}

export default Sort;