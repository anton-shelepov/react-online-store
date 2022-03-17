export function showPagesOnPaginator(currentPage: number, totalPages: number) {

    const pagesNumbers: number[] = []

    for (let page = 1; page <= totalPages; page++) {
        pagesNumbers.push(page)
    }

    if (currentPage === 1 || currentPage === 2) {
        return pagesNumbers.filter(page => page >= 1 && page <= 5)
    }

    if (currentPage === totalPages || currentPage === (totalPages - 1)) {
        return pagesNumbers.filter(page => page <= totalPages && page >= (totalPages - 4))
    }

    else {
        return pagesNumbers.filter(page => page >=
            pagesNumbers[currentPage - 3] &&
            page <= pagesNumbers[currentPage + 1]
        )
    }
}