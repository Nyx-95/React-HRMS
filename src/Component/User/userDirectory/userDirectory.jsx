import React from 'react'
import userDirectoryCss from "./userDirectory.module.css"
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"
import { useEffect, useState, useMemo } from 'react'
import data from './data/data.json';
import Pagination from './Pagination'

let PageSize = 8;

const BankDetails = () => {
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
                <div className={userDirectoryCss.UserDetailsMenuHeader}>
                    <div className={userDirectoryCss.UserDetailsMainHeading}>
                        <div className={userDirectoryCss.UserDetailsMainHeadingInner}>
                            <h3>All Users Bank Details</h3>
                            <img src={headingpicture} />
                        </div>
                    </div>
                    <div className={userDirectoryCss.UserDetailsdropdown}>
                        <div onClick={toggling} className={userDirectoryCss.dropDownHeader}><a href='#'><i className="ri-arrow-drop-down-fill"></i></a> </div>
                        {isOpen && (
                            <div className={`dropDownListContain ${userDirectoryCss.dropDownListContainer}`}>
                                <div className={userDirectoryCss.DropDownList}>
                                    <div className={userDirectoryCss.ListItem}>
                                        <label>Show</label>
                                        <select name="selectEntries" id="selectEntries">
                                            <option value="1">1</option>
                                            <option value="2">20</option>
                                            <option value="3">300</option>
                                        </select>
                                        <label>Entries</label>
                                    </div>
                                    
                                    <div className={userDirectoryCss.ListItem}>
                                        <a href="#">
                                            <div className={userDirectoryCss.menuIconName}>
                                                <span>Search</span>
                                                <i className="ri-search-line"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={userDirectoryCss.UserDetailsMainHeadingRightButton}>
                        <div className={userDirectoryCss.DetailsMenuShowButton}>
                            <label>Show</label>
                            <select id="DetailsHeadingRightSelectNumber" className={userDirectoryCss.DetailsHeadingRightSelectNumber} >
                                <option value="1">1</option>
                                <option value="2">20</option>
                                <option value="3">300</option>
                            </select>
                            <label>Entries</label>
                        </div>
         
                        <div className={userDirectoryCss.DetailsMenuSearchIcon}> <a href="#"> <i className="ri-search-line"></i></a></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={userDirectoryCss.UserDetailsMenuTable}>
                    <div className={userDirectoryCss.UserDetailsMenuTableInner}>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                   
                                    <th scope="col">
                                        <p>User Name</p>
                                    </th>
                                    <th scope="col">
                                        <p>Active Email</p>
                                    </th>
                                    <th scope="col">
                                        <p>Gender</p>
                                    </th>
                                    <th scope="col">
                                        <p>Department</p>
                                    </th>
                                    <th scope="col">
                                        <p>Designation</p>
                                    </th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {currentTableData.map((item, keyid) => {
                                    return (
                                        <tr key={keyid}>
                                            
                                            <td><p>{item.first_last_name}</p></td>
                                            <td><p> {item.email} </p></td>
                                            <td><p>{item.gender}</p></td>
                                            
                                            <td><p>{item.designation}</p></td>
                                            <td><p>{item.department}</p></td>
                                        </tr>
                                    );
                                })}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={userDirectoryCss.UserBankDetailTableShow}>
                    <div className="col-lg-12 ">
                        <div className={userDirectoryCss.DetailsMenuShowButtonLastRow}>
                            <label>Show</label>
                            <select id="DetailsHeadingRightSelectNumberLastRow" className={userDirectoryCss.DetailsHeadingRightSelectNumberLastRow}>
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
                <div className={userDirectoryCss.UserBankDetailsTablePagination}>
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

export default BankDetails