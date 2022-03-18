import StarIcon from '../StarIcon/StarIcon';
import s from './../Rating.module.scss';

interface IRating {
    reviews?: number;
    rating: number;
}

const StaticRating: React.FC<IRating> = ({ reviews, rating }) => {

    return (
        <div className={s.rating}>
            {[1, 2, 3, 4, 5].map((index) => {

                const fill = () => {
                    if (index <= rating) {
                        return 'gold';
                    } else
                        return 'lightgray';
                }

                return (
                    <StarIcon key={index} fill={fill()} />
                )
            })}
            <span>{reviews}</span>
        </div>
    );
}

export default StaticRating;