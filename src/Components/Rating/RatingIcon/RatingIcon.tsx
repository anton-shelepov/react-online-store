import { SetStateAction, useMemo } from 'react';
import StarIcon from '../StarIcon/StarIcon';
import s from './../Rating.module.scss';

interface IRatingIcon { 
    index: number;
    rating: number;
    hoverRating: any;
    onMouseEnter: (index: SetStateAction<number>) => void;
    onMouseLeave: (index?: SetStateAction<number>) => void;
    onSaveRating: (index: SetStateAction<number>) => void;
}

const RatingIcon: React.FC<IRatingIcon> = (props) => { 
    const {
        index,
        rating,
        hoverRating,
        onMouseEnter,
        onMouseLeave,
        onSaveRating,
    } = props;
    const fill = useMemo(() => {
        if (hoverRating >= index) {
            return 'gold';
        } else if (!hoverRating && rating >= index) {
            return 'gold';
        }
        return 'lightgray';
    }, [rating, hoverRating, index]);

    return (
        <div
            className={s.rating_icon}
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave()}
            onClick={() => onSaveRating(index)}
        >
            <StarIcon fill={fill} />
        </div>
    )
}

export default RatingIcon;