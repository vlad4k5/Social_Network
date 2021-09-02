import s from "./Paginator.module.scss";

type PropsType = {
    totalItemsCount: number
    onPageChanged: (pageNumber: number) => void
    currentPage?: number
    itemsPerPage: number
    loading: boolean
    pagesInPaginator?: number
}


const Paginator: React.FC<PropsType> = ({ totalItemsCount, onPageChanged, currentPage = 1, itemsPerPage, loading, pagesInPaginator = 10 }) => {
    let totalPages = Math.ceil(totalItemsCount / itemsPerPage);

    let lastPage = pagesInPaginator + currentPage - 1;

    let pages = [];

    if (currentPage >= 7 && currentPage <= totalPages - 3) {
        for (let i = currentPage; i <= lastPage; i++) {
            pages.push(<li key={i}><button  className={currentPage === i - 6 ? s.activePage : s.page} onClick={() => { onPageChanged(i - 6) }}>{i - 6}</button></li>)
        }
    } else if (currentPage < 7) {
        for (let i = 1; i <= pagesInPaginator; i++) {
            pages.push(<li key={i}><button  className={currentPage === i ? s.activePage : s.page} onClick={() => { onPageChanged(i) }}>{i}</button></li>)
        }
    } else if (currentPage > totalPages - 3) {
        for (let i = totalPages - pagesInPaginator; i < totalPages; i++) {
            pages.push(<li key={i}><button  className={currentPage === i ? s.activePage : s.page} onClick={() => { onPageChanged(i) }}>{i}</button></li>)
        }
    }




    return <nav className={s.paginatorWrapper}>
        <button className={s.page} disabled={currentPage === 1 || loading ? true
            : false} onClick={() => onPageChanged(currentPage - 1)}>&#60;</button>
        <ul className={s.pages}>
            {pages}
        </ul>
        
        

        <span>{" ... "}</span>
        <button className={currentPage === totalPages ? s.activePage : s.page} onClick={() => onPageChanged(totalPages)}  >{totalPages}</button>

        <button className={s.page} disabled={currentPage === totalPages || loading ? true : false} onClick={() => onPageChanged(currentPage + 1)}>&#62;</button>
    </nav>
}



export default Paginator;