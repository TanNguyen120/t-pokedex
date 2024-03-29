import React, { useEffect, useState } from 'react'
import { CgArrowRightR, CgArrowLeftR } from 'react-icons/cg'
import LoadingSpinner from '../loadingSpiner'


// Pagination is essential for many web app. It help with loading time and save bandwidth when communicate with api
// Pagination also help with user experiment. No one want to read 2000 rows of results


// Display Page Number and Help Navigate to desire page
const PageBtn = ({ pageNumber, setCurrentPage, currentPage }) => {
    const [stateBg, setStateBg] = useState("bg-slate-100");
    useEffect(() => {
        currentPage === pageNumber ? setStateBg("bg-slate-400") : setStateBg('bg-slate-100')
    }, [currentPage, pageNumber])
    return (
        <div className={`rounded-lg ${stateBg} border border-slate-600 hover:cursor-pointer hover:bg-slate-400 hover:scale-125`} onClick={e => { setCurrentPage(pageNumber) }}>
            {pageNumber}
        </div>
    )
}

// Usually use when people want to looping through list of pages we use page forward button or previous button
// We have some restriction to prevent the page overflow
const PageForwardBtn = ({ currentPage, setCurrentPage, pageNumber }) => {
    const pageForwardHandle = () => {
        if (currentPage < pageNumber) {
            const newPage = currentPage + 1;

            setCurrentPage(newPage)
        } else (
            setCurrentPage(currentPage)
        )
    }
    return (
        <div className={`rounded-lg border border-slate-600 hover:cursor-pointer hover:bg-slate-400 hover:scale-125`} onClick={e => { pageForwardHandle() }}>
            {
                <CgArrowRightR className=" w-9 h-9 float-right" />
            }
        </div>
    )
}

const PagePrevBtn = ({ currentPage, setCurrentPage }) => {
    const pagePrevHandle = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1;

            setCurrentPage(newPage)
        } else (
            setCurrentPage(currentPage)
        )
    }
    return (
        <div className={`rounded-lg border border-slate-600 hover:cursor-pointer hover:bg-slate-400 hover:scale-125 `} onClick={e => { pagePrevHandle() }}>
            {
                <CgArrowLeftR className=" w-9 h-9" />
            }
        </div>
    )
}

const PageSelector = ({ numberOfPage, currentPage, setCurrentPage }) => {
    const [visiblePages, setVisiblePages] = useState(null)
    useEffect(() => {
        // some condition to render pages when in some first page and last page
        if (currentPage < 4) {
            setVisiblePages([1, 2, 3, 4, 5])
        } else if (currentPage > numberOfPage - 2) {
            setVisiblePages([numberOfPage - 3, numberOfPage - 2, numberOfPage - 1, numberOfPage])
        } else {
            setVisiblePages([currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2])
        }
    }, [currentPage, numberOfPage])
    return (
        <div className=' grid grid-cols-7 gap-5 lg:px-96 md:px-24 px-0'>
            <PagePrevBtn currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={numberOfPage} />
            {
                visiblePages ? visiblePages.map((element, index) => <PageBtn pageNumber={element} key={index} setCurrentPage={setCurrentPage} currentPage={currentPage} />) : <LoadingSpinner />
            }
            <PageForwardBtn currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={numberOfPage} />

        </div>
    )
}

export default PageSelector