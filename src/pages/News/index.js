import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../Home/home.module.scss';
import news from './news.module.scss';
import { contentEvents } from '../../components/News'
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import NewBanner from '../../components/Banner/NewsBanner'

const News = () => {

    const [itemOffset, setItemOffset] = useState(0)
    const itemsPerPage = 9;
    const endOffset = itemOffset + itemsPerPage;
    const currentData = contentEvents.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(contentEvents.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % contentEvents.length;
        setItemOffset(newOffset);
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Tạo hiệu ứng cuộn mượt
        });
    };
    return (
        <>
            <NewBanner />
            <div className={home.content}>
                <div className={`${"container"} ${news.newContent}`}>
                    <div className="row d-flex">
                        {
                            currentData.map((contentItem, index) => {
                                return (
                                    <div className={`${"col-lg-4 col-sm-6"}`} key={index} >
                                        <a href={contentItem.link} target="_blank" rel="noopener noreferrer">
                                            <div className={news.newItem}>
                                                <img src={contentItem.urlImage} alt={contentItem.alt} />
                                                <div className={news.title}>{contentItem.title}</div>
                                                <p>{contentItem.content}</p>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })
                        }
                        <ReactPaginate
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={pageCount}
                            previousLabel="<"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}               
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default News;