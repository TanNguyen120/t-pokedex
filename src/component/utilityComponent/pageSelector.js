import React, { useEffect, useState } from 'react'
import { CgArrowRightR } from 'react-icons/cg'
import LoadingSpinner from '../loadingSpiner'


const PageBtn = ({ pageNumber, setCurrentPage, currentPage }) => {
    const [stateBg, setStateBg] = useState("bg-slate-100");
    useEffect(() => {
        currentPage === pageNumber ? setStateBg("bg-slate-400") : setStateBg('bg-slate-100')
    }, [currentPage, pageNumber])
    return (
        <div className={`py-5 rounded-lg ${stateBg} border border-slate-600 hover:cursor-pointer hover:bg-slate-400 hover:scale-125`} onClick={e => { setCurrentPage(pageNumber) }}>
            {pageNumber}
        </div>
    )
}

const PageFowardBtn = ({ currentPage, setCurrentPage, pageNumber }) => {
    const pageForwardHandle = () => {
        if (currentPage < pageNumber) {
            const newPage = currentPage + 1;

            setCurrentPage(newPage)
        } else (
            setCurrentPage(currentPage)
        )
    }
    return (
        <div className={`py-5 rounded-lg border border-slate-600 hover:cursor-pointer hover:bg-slate-400 hover:scale-125`} onClick={e => { pageForwardHandle() }}>
            {
                <CgArrowRightR className=" w-full h-full" />
            }
        </div>
    )
}

const PagePrevBtn = ({ currentPage, setCurrentPage, pageNumber }) => {
    const pageForwardHandle = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1;

            setCurrentPage(newPage)
        } else (
            setCurrentPage(currentPage)
        )
    }
    return (
        <div className={`py-5 rounded-lg border border-slate-600 hover:cursor-pointer hover:bg-slate-400 hover:scale-125`} onClick={e => { pageForwardHandle() }}>
            {
                <CgArrowRightR className=" w-full h-full" />
            }
        </div>
    )
}

const PageSelector = ({ numberOfPage, currentPage, setCurrentPage }) => {
    const [visiblePages, setVisiblePages] = useState(null)
    useEffect(() => {
        // some condition to render pages when in some first page and last page
        if (currentPage < 4) {
            setVisiblePages([1, 2, 3, 4])
        } else if (currentPage > numberOfPage - 2) {
            setVisiblePages([numberOfPage - 3, numberOfPage - 2, numberOfPage - 1, numberOfPage])
        } else {
            setVisiblePages([currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2])
        }
    }, [currentPage, numberOfPage])
    return (
        <div className=' grid grid-cols-6 gap-5 px-28 py-7'>
            <PagePrevBtn currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={numberOfPage} />
            {
                visiblePages ? visiblePages.map((element, index) => <PageBtn pageNumber={element} key={index} setCurrentPage={setCurrentPage} currentPage={currentPage} />) : <LoadingSpinner />
            }
            <PageFowardBtn currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={numberOfPage} />

        </div>
    )
}

export default PageSelector