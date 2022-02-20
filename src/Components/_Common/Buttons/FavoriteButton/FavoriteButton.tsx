import s from './FavoriteButton.module.scss';

interface IFavoriteButton {
    isFavorite: boolean;
}

const FavoriteButton: React.FC<IFavoriteButton> = ({ isFavorite }) => {
    return (
        <button className={`${s.favorite_button} ${isFavorite ? s.favorite : ''}`}>
            <span>❤</span>
        </button>
    )
}

export default FavoriteButton;