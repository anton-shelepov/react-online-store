import s from './HomeEditPage.module.scss';

interface IHomeEditPage { }

const HomeEditPage: React.FC<IHomeEditPage> = (props) => {
    return (
        <div className={s.home_edit_page}>
            <h2 className={s.title}>Редактирование главной страницы</h2>
        </div>
    )
}

export default HomeEditPage;