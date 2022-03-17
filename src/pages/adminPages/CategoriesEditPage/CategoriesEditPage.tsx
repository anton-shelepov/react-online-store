import ButtonWithIcon from '../../../components/_common/Buttons/ButtonWithIcon/ButtonWithIcon';
import CreateCategoryForm from '../../../components/_common/Forms/CreateCategoryForm/CreateCategoryForm';
import s from './CategoriesEditPage.module.scss';

interface IAdminPage { }

const CategoriesEditPage: React.FC<IAdminPage> = (props) => {
    return (
        <div className={s.categories_edit_page}>
            <h2 className={s.title}>Редактирование категорий</h2>
            <div className={s.container}>
                <div className={s.categories_list}>
                    <h2 className={s.categories_list__title}>Список категорий</h2> 
                    <div className={s.category_item}>
                        <img src='' alt='category_icon' />
                        <h4 className={s.category_name}>Ноутбуки</h4>
                        <span className={s.category_link_name}>laptops</span>
                        <span className={s.products_count}>25 товаров</span>
                        <span className={s.last_update}>Последнее изменение 25.01.2022</span>
                        <ButtonWithIcon content='Удалить категорию' icon='close' />
                    </div> 
                    <div className={s.category_item}>
                        <img src='' alt='category_icon' />
                        <h4 className={s.category_name}>Ноутбуки</h4>
                        <span className={s.category_link_name}>laptops</span>
                        <span className={s.products_count}>25 товаров</span>
                        <span className={s.last_update}>Последнее изменение 25.01.2022</span>
                        <ButtonWithIcon content='Удалить категорию' icon='close' />
                    </div> 
                    <div className={s.category_item}>
                        <img src='' alt='category_icon' />
                        <h4 className={s.category_name}>Ноутбуки</h4>
                        <span className={s.category_link_name}>laptops</span>
                        <span className={s.products_count}>25 товаров</span>
                        <span className={s.last_update}>Последнее изменение 25.01.2022</span>
                        <ButtonWithIcon content='Удалить категорию' icon='close' />
                    </div> 
                    <div className={s.category_item}>
                        <img src='' alt='category_icon' />
                        <h4 className={s.category_name}>Ноутбуки</h4>
                        <span className={s.category_link_name}>laptops</span>
                        <span className={s.products_count}>25 товаров</span>
                        <span className={s.last_update}>Последнее изменение 25.01.2022</span>
                        <ButtonWithIcon content='Удалить категорию' icon='close' />
                    </div> 
                    <div className={s.category_item}>
                        <img src='' alt='category_icon' />
                        <h4 className={s.category_name}>Ноутбуки</h4>
                        <span className={s.category_link_name}>laptops</span>
                        <span className={s.products_count}>25 товаров</span>
                        <span className={s.last_update}>Последнее изменение 25.01.2022</span>
                        <ButtonWithIcon content='Удалить категорию' icon='close' />
                    </div> 
                    <div className={s.category_item}>
                        <img src='' alt='category_icon' />
                        <h4 className={s.category_name}>Ноутбуки</h4>
                        <span className={s.category_link_name}>laptops</span>
                        <span className={s.products_count}>25 товаров</span>
                        <span className={s.last_update}>Последнее изменение 25.01.2022</span>
                        <ButtonWithIcon content='Удалить категорию' icon='close' />
                    </div> 
                </div>
                <div className={s.create_new_category}>
                    <CreateCategoryForm /> 
                </div>
            </div>
        </div>
    )
}

export default CategoriesEditPage;