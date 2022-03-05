import { ProductReview } from '../../types/productTypes';
import StaticRating from '../Rating/StaticRating/StaticRating';
import s from './Reviews.module.scss';

interface IReviews {
    title: string;
    reviews: ProductReview[]
}

const Reviews: React.FC<IReviews> = ({ title, reviews }) => {
    return (
        <div className={s.reviews}>

            <h3 className={s.title}>Отзывы о {title}</h3>

            {
                reviews.map((review) => {
                    return (
                        <div className={s.review_item}>
                            <div className={s.info}>
                                <StaticRating rating={review.rating} />
                                <span className={s.date}>{review.date}</span>
                            </div> 
                            <div className={s.used_term}>
                                <h4 className={s.section_title}>Срок использования: <span>{review.usedTerm}</span></h4>
                            </div>
                            <div className={s.dignity}>
                                <h4 className={s.section_title}>Достоинства</h4>
                                <p className={s.section_description}>{review.dignity}</p>
                            </div>
                            <div className={s.flaws}>
                                <h4 className={s.section_title}>Недостатки</h4>
                                <p className={s.section_description}>{review.flaws}</p>
                            </div>
                            <div className={s.comment}>
                                <h4 className={s.section_title}>Комментарий</h4>
                                <p className={s.section_description}>{review.comment}</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Reviews;