import { useEffect, useMemo } from 'react';
import ReactTable from '../../../components/ReactTable/ReactTable';
import ButtonWithIcon from '../../../components/_common/Buttons/ButtonWithIcon/ButtonWithIcon';
import CreateCategoryForm from '../../../components/_common/Forms/CreateCategoryForm/CreateCategoryForm';
import { fetchCategoriesRequest } from '../../../store/actions/catalogActions/catalogActions';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/reduxHooks';
import s from './CategoriesEditPage.module.scss';

interface IAdminPage { }

const CategoriesEditPage: React.FC<IAdminPage> = (props) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesRequest())
    }, [dispatch])

    const categories = useAppSelector(store => store.catalog.categories)

    const columns = useMemo(
        () => [
            {
                Header: ' ',
                columns: [
                    {
                        Header: 'Иконка',
                        accessor: 'icon',
                    },
                    {
                        Header: 'Название',
                        accessor: 'categoryCatalogName',
                    },
                    {
                        Header: 'Ссылка',
                        accessor: 'categoryName',
                    },
                    {
                        Header: 'Товары (шт.)',
                        accessor: 'productsCount',
                    },
                    {
                        Header: 'Последнее обновление',
                        accessor: 'updatedAt',
                    },
                    {
                        Header: 'Действия',
                        accessor: 'deleteButton',
                    },
                ],
            },
        ],
        []
    )

    const tableData = categories.map(category => {

        const updatedAt = category.updatedAt.replace('T', ' ').replace(/-/g, '.').slice(0, -5)

        return {
            icon: category.icon,
            categoryCatalogName: category.categoryCatalogName,
            categoryName: category.categoryName,
            productsCount: category._count.products,
            updatedAt,
            deleteButton: <ButtonWithIcon content='Удалить' icon='close' />
        }
    })

    return (
        <div className={s.categories_edit_page}>
            <h2 className={s.title}>Редактирование категорий</h2>
            <div className={s.container}>
                <div className={s.categories_list}>
                    <h2 className={s.categories_list__title}>Список категорий</h2>
                    <ReactTable data={tableData} columns={columns} />
                </div>
                <div className={s.create_new_category}>
                    <CreateCategoryForm />
                </div>
            </div>
        </div>
    )
}

export default CategoriesEditPage;