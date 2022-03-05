import { ProductSpec } from '../../types/productTypes';
import s from './ProductSpecs.module.scss';

interface IProductSpecs {
    title: string,
    specs: ProductSpec[]
}

const ProductSpecs: React.FC<IProductSpecs> = ({ title, specs }) => {
    return (
        <div className={s.product_specs} >

            <h3 className={s.title}>Характеристики {title}</h3>

            {
                specs.map((group: ProductSpec) => {
                    return (
                        <div className={s.spec_group}>
                            <h4 className={s.group_title}>{group.groupTitle}</h4>

                            {
                                group.groupValues.map((spec) => {
                                    return (
                                        <div className={s.spec_item}>
                                            <div className={s.spec_title}>{spec.specTitle}</div>
                                            <div className={s.spec_value}>{spec.specValue}</div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    )
                })
            }

        </div>
    )
}

export default ProductSpecs;