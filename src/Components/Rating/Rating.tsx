import { SetStateAction, useState } from 'react';
import s from './Rating.module.scss';
import RatingIcon from './RatingIcon/RatingIcon';

interface IRating {
    reviewsCount: number;
}

const Rating: React.FC<IRating> = ({ reviewsCount }) => {

    const [rating, setRating] = useState(0);

    const [hoverRating, setHoverRating] = useState(0);

    const onMouseEnter = (index: SetStateAction<number>) => {
        setHoverRating(index);
    };

    const onMouseLeave = () => {
        setHoverRating(0);
    };

    const onSaveRating = (index: SetStateAction<number>) => {
        setRating(index);
    };

    return (
        <div className={s.rating}>
            {[1, 2, 3, 4, 5].map((index) => {
                return (
                    <RatingIcon
                        index={index}
                        rating={rating}
                        hoverRating={hoverRating}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        onSaveRating={onSaveRating} />
                )
            })}
            <span>{reviewsCount}</span>
        </div>
    );
}

export default Rating;