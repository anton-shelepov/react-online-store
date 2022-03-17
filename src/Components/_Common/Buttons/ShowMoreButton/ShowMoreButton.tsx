import s from './ShowMoreButton.module.scss';

interface IShowMoreButton { }

const ShowMoreButton: React.FC<IShowMoreButton> = (props) => {
    return (
        <button className={s.show_more_btn}>Показать больше</button>
    )
}

export default ShowMoreButton;