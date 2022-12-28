import React from 'react'
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"
import { useEffect, useState, useMemo } from 'react'
import data from './data/data.json';
import Pagination from './Pagination'
import departmenCss from './department.module.css'

let PageSize = 8;

const Department = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen)


    return (
        <>
            <div className="row">
                <div className={departmenCss.UserDetailsMenuHeader}>
                    <div className={departmenCss.UserDetailsMainHeading}>
                        <div className={departmenCss.UserDetailsMainHeadingInner}>
                            <h3>All Users Bank Details</h3>
                            <img src={headingpicture} />
                        </div>
                    </div>
                    <div className={departmenCss.UserDetailsMenuSearch}>
                        <a href="#">
                            <div className={departmenCss.menuIconName}>
                            
                                <i className="ri-search-line"></i>
                            </div>
                        </a>
                    </div>
                    {/* <div className={departmenCss.UserDetailsdropdown}>
                        <div onClick={toggling} className={departmenCss.dropDownHeader}><a href='#'><i className="ri-arrow-drop-down-fill"></i></a> </div>
                        {isOpen && (
                            <div className={`dropDownListContain ${departmenCss.dropDownListContainer}`}>
                                <div className={departmenCss.DropDownList}>
                         
                                    
                                    <div className={departmenCss.ListItem}>
                                        <a href="#">
                                            <div className={departmenCss.menuIconName}>
                                                <span>Search</span>
                                                <i className="ri-search-line"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div> */}
                </div>
            </div>
            <div className="row">
                <div className={departmenCss.UserDetailsMenuTable}>
                    <div className={departmenCss.UserDetailsMenuTableInner}>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>

                                    <th scope="col">
                                        <p>Department</p>
                                    </th>
                                    <th scope="col">
                                        <p>Head</p>
                                    </th>
                                    <th scope="col">
                                        <p>Email</p>
                                    </th>
                                  

                                </tr>
                            </thead>
                            <tbody>
                                {currentTableData.map((item, keyid) => {
                                    return (
                                        <tr key={keyid}>

                                            <td><p>{item.adminstration}</p></td>
                                            <td><p> {item.head} </p></td>
                                            <td><p>{item.email}</p></td>
                                        </tr>
                                    );
                                })}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={departmenCss.UserBankDetailTableShow}>
                    <div className="col-lg-12 ">
                        <div className={departmenCss.DetailsMenuShowButtonLastRow}>
                            <label>Show</label>
                            <select id="DetailsHeadingRightSelectNumberLastRow" className={departmenCss.DetailsHeadingRightSelectNumberLastRow}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <label>Entries</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={departmenCss.UserBankDetailsTablePagination}>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={data.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
            </div>
        </>
    )
}

export default Department