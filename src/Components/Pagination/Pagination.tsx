import { MouseEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalSvgSelector } from '../_assets/GlobalSvgSelector';
import ShowMoreButton from '../_common/Buttons/ShowMoreButton/ShowMoreButton';
import s from './Pagination.module.scss';
import { showPagesOnPaginator } from './utils/showPagesOnPaginator';
interface IPagination {
    pageSize: number,
    productsCount: number,
    queryPage: number,
}

const Pagination: React.FC<IPagination> = ({ pageSize, productsCount, queryPage }) => { 

    const totalPages: number = Math.round(productsCount / pageSize + 1) 

    const [currentPage, setCurrentPage] = useState(1) 

    const navigate = useNavigate()

    useEffect(() => {
        navigate({
            search: `page=${currentPage}`
        })
    }, [currentPage, navigate])

    const onStartPageChange = () => {
        setCurrentPage(1)
    }

    const onPrevPageChange = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNumberPageChange: MouseEventHandler<HTMLSpanElement> = (e) => {
        setCurrentPage(+e.currentTarget.innerText)
    }

    const onNextPageChange = () => {
        setCurrentPage(currentPage + 1)
    }

    const onEndPageChange = () => {
        setCurrentPage(totalPages)
    } 

    const pagesNumbers = showPagesOnPaginator(currentPage, totalPages)

    return (
        <div className={s.pagination}>
            <div className={s.nav}>
                <span className={s.start} onClick={onStartPageChange}>
                    <GlobalSvgSelector id='paginationDoubleArrow' />
                </span>
                <span className={s.prev} onClick={onPrevPageChange}>
                    <GlobalSvgSelector id='paginationArrow' />
                </span>
                {
                    pagesNumbers.map(pageNumber => (
                            <span className={`${s.page_number} ${pageNumber === currentPage ? s.active : ''}`} onClick={onNumberPageChange}>{pageNumber}</span>
                        ))
                }
                <span className={s.next} onClick={onNextPageChange}>
                    <GlobalSvgSelector id='paginationArrow' />
                </span>
                <span className={s.end} onClick={onEndPageChange}>
                    <GlobalSvgSelector id='paginationDoubleArrow' />
                </span>
            </div>
            <div className={s.show_more}>
                <ShowMoreButton />
            </div>
        </div>
    )
}

export default Pagination;