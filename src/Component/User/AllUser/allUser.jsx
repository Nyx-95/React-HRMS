import React, { useState, useMemo, useRef } from 'react'
import allUserCss from "./allUser.module.css"
import MyDataProfilePic from "../../../assets/AllUsers/AllUserProfilepic.png"
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"
import { CSVLink } from "react-csv";

let PageSize = 2;
const MyData = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen)


    const headers = [
        { label: "Full Name", key: "full_name" },
        { label: "Designation", key: "designation" },
        { label: "RA", key: "ra" },
        { label: "Date Of Joining", key: "date_of_joining" },
        { label: "CNIC", key: "cnic" },
        { label: "Date Of Birth", key: "date_of_birth" },
        { label: "Contact Number", key: "contact_number" },
        { label: "Branch Number", key: "branch_number" },
        { label: "Bank Name", key: "bank_name" },
        { label: "Gender", key: "gender" },
        { label: "Acount Number", key: "account_number" }
    ];

    const data = [
        { full_name: "Ahmed", designation: "Sr. Manager - Ecomerce", ra: "Sameer Khan", date_of_joining: "12-april-2022", cnic: "41302482828282", date_of_birth: "11-Dec-2022", contact_number: "031331313131", branch_number: "0342", bank_name: "Meezan", gender: "Male", account_number: "002842424242" },
        { full_name: "Tobi", designation: "Sr. Manager - Ecomerce", ra: "Sameer Khan", date_of_joining: "12-april-2022", cnic: "41302482828282", date_of_birth: "11-Dec-2022", contact_number: "031331313131", branch_number: "0342", bank_name: "Meezan", gender: "Male", account_number: "002842424242" },
        { full_name: "Ayoub", designation: "Sr. Manager - Ecomerce", ra: "Sameer Khan", date_of_joining: "12-april-2022", cnic: "41302482828282", date_of_birth: "11-Dec-2022", contact_number: "031331313131", branch_number: "0342", bank_name: "Meezan", gender: "Male", account_number: "002842424242" },
        { full_name: "John", designation: "Sr. Manager - Ecomerce", ra: "Sameer Khan", date_of_joining: "12-april-2022", cnic: "41302482828282", date_of_birth: "11-Dec-2022", contact_number: "031331313131", branch_number: "0342", bank_name: "Meezan", gender: "Male", account_number: "002842424242" },
        { full_name: "Andy", designation: "Sr. Manager - Ecomerce", ra: "Sameer Khan", date_of_joining: "12-april-2022", cnic: "41302482828282", date_of_birth: "11-Dec-2022", contact_number: "031331313131", branch_number: "0342", bank_name: "Meezan", gender: "Male", account_number: "002842424242" },
        { full_name: "Ahmed", designation: "Sr. Manager - Ecomerce", ra: "Sameer Khan", date_of_joining: "12-april-2022", cnic: "41302482828282", date_of_birth: "11-Dec-2022", contact_number: "031331313131", branch_number: "0342", bank_name: "Meezan", gender: "Male", account_number: "002842424242" },
        { full_name: "Tobi", designation: "Sr. Manager - Ecomerce", ra: "Sameer Khan", date_of_joining: "12-april-2022", cnic: "41302482828282", date_of_birth: "11-Dec-2022", contact_number: "031331313131", branch_number: "0342", bank_name: "Meezan", gender: "Male", account_number: "002842424242" }
    ];

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
   

  
    return (
        <>
            <div className="row">
                <div className={allUserCss.AllUsersTopHeaderButton}>
                    <div></div>
                    <div className={allUserCss.AllUsersTopHeaderButtonInnerOne}>
                        <a className={allUserCss.AllUsersTopHeaderButtonInnerATag} href="#">
                            <div className={allUserCss.AllUsersTopHeaderIconDiv}><i className="ri-user-line"></i></div>
                            <div className={allUserCss.AllUsersTopHeaderInfoDiv}>
                                <h6>Active Users</h6>
                                <label>1230</label>
                            </div>
                        </a>
                    </div>
                    <div className={allUserCss.AllUsersTopHeaderButtonInnerTwo}>
                        <a className={allUserCss.AllUsersTopHeaderButtonInnerATag} href="#">
                            <div className={allUserCss.AllUsersTopHeaderIconDivTwo}><i className="ri-user-line"></i>
                            </div>
                            <div className={allUserCss.AllUsersTopHeaderInfoDivTwo}>
                                <h6>Inactive Users</h6>
                                <label>300</label>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={allUserCss.UserDetailsMenuHeader}>
                    <div className={allUserCss.UserDetailsMainHeading}>
                        <div className={allUserCss.UserDetailsMainHeadingInner}>
                            <h3>All Users Bank Details</h3>
                            <img src={headingpicture} />
                        </div>
                    </div>
                    <div className={allUserCss.UserDetailsdropdown}>
                        <div onClick={toggling} className={allUserCss.dropDownHeader}><a href='#'><i className="ri-arrow-drop-down-fill"></i></a>   </div>
                        {isOpen && (
                            <div className={`dropDownListContain ${allUserCss.dropDownListContainer}`}>
                                <div className={allUserCss.DropDownList}>

                                    <div className={allUserCss.ListItem}>
                                        <a href="#">
                                            <div className={allUserCss.menuIconName}>
                                                <span>Import to Excel</span>
                                                <i className="ri-download-2-line"></i>
                                            </div>
                                        </a>
                                    </div>
                                    <div className={allUserCss.ListItem}>
                                        <a href="#">
                                            <div className={allUserCss.menuIconName}>
                                                <span>Search</span>
                                                <i className="ri-search-line"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={allUserCss.UserDetailsMainHeadingRightButton}>

                        <div className={allUserCss.DetailsMenuImportButton}>

                            <div className={allUserCss.DetailsMenuImportButtonInner}>
                                <label>Export to Excel</label>
                                <CSVLink data={data} headers={headers}>
                                    <i className="ri-download-2-line"></i>
                                </CSVLink>
                            </div>
                        </div>
                        <div className={allUserCss.DetailsMenuSearchIcon}> <a href="#"> <i className="ri-search-line"></i></a></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={allUserCss.AllUserMainDiv}>
                    <div className={`row ${allUserCss.AllUserMainDivInner}`}>
                    {/* {currentTableData.map((item, keyid) => {
                        <div key={keyid}> 
                              </div>
                    } )}                   */}
                        {data.map((datas,keyid) => (
                      
                                <div className={`col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 ${allUserCss.allUserComponentMain}`} key={keyid}>
                                    <div className={allUserCss.AllUserClassComponent}>
                                        <div className={allUserCss.AllUserClassComponentInner}>
                                            <div className="row">
                                                <div className="col-4 col-lg-4">
                                                    <div className={allUserCss.AllUserProfilepic}>
                                                        <img src={MyDataProfilePic} />
                                                    </div>
                                                </div>
                                                <div className="col-8 col-lg-8">
                                                    <div className={allUserCss.AllUserProfleInfo}>
                                                        <h6>{datas.full_name}</h6>
                                                        <label>{datas.designation}</label>
                                                        <p>{datas.ra}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-lg-12">
                                                    <div className={allUserCss.AllUserProfleDetails}>
                                                        <label>Date of Joining: {datas.date_of_joining}</label>
                                                        <label>CNIC: {datas.date_of_joining}</label>
                                                        <label>DOB: {datas.date_of_birth}</label>
                                                        <label>Contact No: {datas.contact_number}</label>
                                                        <label>Branch No: {datas.branch_number}</label>
                                                        <label>Bank Name: {datas.bank_name}</label>
                                                        <label>Gender: {datas.gender}</label>
                                                        <label>Account No:{datas.account_number}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6 col-lg-6">
                                                    <div className={allUserCss.AllUserProfleDetailButton}>
                                                        <button className="btn btn-primary shadow-none"> View Details</button>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-6">
                                                    <div className={allUserCss.AllUserProfleSalaryButton}>
                                                        <button className="btn btn-primary shadow-none"> Show Salary </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                        ))}
                  
                

                    </div>

                </div>
            </div>
            <div className="row">
                <div className={allUserCss.UserBankDetailsTablePagination}>
               
                </div>
            </div>

        </>
    )
}

export default MyData
