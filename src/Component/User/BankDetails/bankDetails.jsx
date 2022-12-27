import React from 'react'
import BankDetailsCss from "./bankDetails.module.css"
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"
import { useEffect, useState, useMemo } from 'react'
import data from './data/data.json';
import Pagination from '../BankDetails/bankDetailsPagination'

let PageSize = 10;

const BankDetails = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);


    return (



        <>
            <div className="row">
                <div className={BankDetailsCss.UserDetailsMenuHeader}>
                    <div className={BankDetailsCss.UserDetailsMainHeading}>
                        <div className={BankDetailsCss.UserDetailsMainHeadingInner}>
                            <h3>All Users Bank Details</h3>
                            <img src={headingpicture} />

                        </div>
                    </div>
                    <div className={BankDetailsCss.UserDetailsdropdown}>



                        <div onClick={toggling} className={BankDetailsCss.dropDownHeader}><a href='#'><i className="ri-arrow-drop-down-fill"></i></a>   </div>
                        {isOpen && (
                            <div className={`dropDownListContain ${BankDetailsCss.dropDownListContainer}`}>
                                <div className={BankDetailsCss.DropDownList}>
                                    <div className={BankDetailsCss.ListItem}>
                                        <label>Show</label>
                                        <select name="selectEntries" id="selectEntries">
                                            <option value="1">1</option>
                                            <option value="2">20</option>
                                            <option value="3">300</option>
                                        </select>
                                        <label>Entries</label>
                                    </div>
                                    <div className={BankDetailsCss.ListItem}>
                                        <a href="#">
                                            <div className={BankDetailsCss.menuIconName}>
                                                <span>Import to Excel</span>
                                                <i className="ri-download-2-line"></i>
                                            </div>
                                        </a>
                                    </div>
                                    <div className={BankDetailsCss.ListItem}>
                                        <a href="#">
                                            <div className={BankDetailsCss.menuIconName}>
                                                <span>Search</span>
                                                <i className="ri-search-line"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={BankDetailsCss.UserDetailsMainHeadingRightButton}>
                        <div className={BankDetailsCss.DetailsMenuShowButton}>
                            <label>Show</label>
                            <select id="DetailsHeadingRightSelectNumber" className={BankDetailsCss.DetailsHeadingRightSelectNumber} >
                                <option value="1">1</option>
                                <option value="2">20</option>
                                <option value="3">300</option>
                            </select>
                            <label>Entries</label>
                        </div>
                        <div className={BankDetailsCss.DetailsMenuImportButton}>

                            <div className={BankDetailsCss.DetailsMenuImportButtonInner}>
                                <label>Import to Excel</label>
                                <a href="#"> <i className="ri-download-2-line"></i></a>
                            </div>
                        </div>
                        <div className={BankDetailsCss.DetailsMenuSearchIcon}> <a href="#"> <i className="ri-search-line"></i></a></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={BankDetailsCss.UserDetailsMenuTable}>
                    <div className={BankDetailsCss.UserDetailsMenuTableInner}>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">
                                        <div className="form-check">
                                            <input className={`form-check-input shadow-none ${BankDetailsCss.flexCheckDefault}`} type="checkbox" value=""
                                                id="flexCheckDefault" />
                                        </div>
                                    </th>
                                    <th scope="col">
                                        <p>Offical Email</p>
                                    </th>
                                    <th scope="col">
                                        <p>CNIC No.</p>
                                    </th>
                                    <th scope="col">
                                        <p>Education</p>
                                    </th>
                                    <th scope="col">
                                        <p>Designation</p>
                                    </th>
                                    <th scope="col">
                                        <p>Cutomer Category</p>
                                    </th>
                                    <th scope="col">
                                        <p>Name</p>
                                    </th>
                                    <th scope="col">
                                        <p>Father/Husband's</p>
                                    </th>
                                    <th scope="col">
                                        <p>Gender</p>
                                    </th>
                                    <th scope="col">
                                        <p>Martial Status</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentTableData.map((item, keyid) => {
                                    return (
                                        <tr key={keyid}>
                                            <td scope="row">
                                                <div className="form-check">
                                                    <input className={`form-check-input shadow-none ${BankDetailsCss.flexCheckDefault}`} type="checkbox" value=""
                                                        id="flexCheckDefault" />
                                                </div>
                                            </td>
                                            <td><p> {item.email} </p></td>
                                            <td><p>{item.cnic_number}</p></td>
                                            <td><p>{item.education}</p></td>
                                            <td><p>{item.designation}</p></td>
                                            <td><p>{item.customer_category}</p></td>
                                            <td><p>{item.first_last_name}</p></td>
                                            <td><p>{item.father_husband_name}</p></td>
                                            <td><p>{item.gender}</p></td>
                                            <td><p>{item.martial_status}</p></td>
                                        </tr>
                                    );
                                })}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={BankDetailsCss.UserBankDetailTableShow}>
                    <div className="col-lg-12 ">
                        <div className={BankDetailsCss.DetailsMenuShowButtonLastRow}>
                            <label>Show</label>
                            <select id="DetailsHeadingRightSelectNumberLastRow" className={BankDetailsCss.DetailsHeadingRightSelectNumberLastRow}>
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
                <div className={BankDetailsCss.UserBankDetailsTablePagination}>
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