import React, { useState, useMemo} from 'react'
import probationUserCss from "./probationUser.module.css"
import MyDataProfilePic from "../../../assets/AllUsers/AllUserProfilepic.png"
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"
import { CSVLink } from "react-csv";
import { useNavigate } from 'react-router-dom';
import {ROUTES} from "../../../Utils/routes"

let PageSize = 2;
const ProbationUser = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen)
    const navigate = useNavigate();

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
        { full_name: "Ahmed", designation: "Sr. Manager - Ecomerce", ra: "Sameer Khan", date_of_joining: "12-april-2022", cnic: "", date_of_birth: "11-Dec-2022", contact_number: "", branch_number: "0342", bank_name: "Meezan", gender: "Male", account_number: "002842424242" },
        { full_name: "Tobi", designation: "Sr. Manager - Ecomerce", ra: "Sameer Khan", date_of_joining: "12-april-2022", cnic: "41302482828282", date_of_birth: "11-Dec-2022", contact_number: "031331313131", branch_number: "0342", bank_name: "Meezan", gender: "Male", account_number: "002842424242" },
        { full_name: "Ayoub", designation: "", ra: "Sameer Khan", date_of_joining: "12-april-2022", cnic: "41302482828282", date_of_birth: "11-Dec-2022", contact_number: "031331313131", branch_number: "0342", bank_name: "Meezan", gender: "Male", account_number: "002842424242" },
        { full_name: "John", designation: "Sr. Manager - Ecomerce", ra: "Sameer Khan", date_of_joining: "", cnic: "41302482828282", date_of_birth: "11-Dec-2022", contact_number: "031331313131", branch_number: "", bank_name: "Meezan", gender: "Male", account_number: "002842424242" },
        { full_name: "Andy", designation: "Sr. Manager - Ecomerce", ra: "Sameer Khan", date_of_joining: "12-april-2022", cnic: "41302482828282", date_of_birth: "11-Dec-2022", contact_number: "031331313131", branch_number: "0342", bank_name: "Meezan", gender: "Male", account_number: "002842424242" },
        { full_name: "Ahmed", designation: "Sr. Manager - Ecomerce", ra: "Sameer Khan", date_of_joining: "12-april-2022", cnic: "41302482828282", date_of_birth: "11-Dec-2022", contact_number: "031331313131", branch_number: "0342", bank_name: "Meezan", gender: "Male", account_number: "002842424242" },
        { full_name: "Tobi", designation: "Sr. Manager - Ecomerce", ra: "Sameer Khan", date_of_joining: "12-april-2022", cnic: "41302482828282", date_of_birth: "11-Dec-2022", contact_number: "031331313131", branch_number: "0342", bank_name: "Meezan", gender: "Male", account_number: "002842424242" }
    ]



    


    // const [currentPage, setCurrentPage] = useState(1);

    // const currentTableData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * PageSize;
    //     const lastPageIndex = firstPageIndex + PageSize;
    //     return data.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage]);
   

  
    return (
        <>
            <div className="row">
                <div className={probationUserCss.AllUsersTopHeaderButton}>
                    <div></div>
                    <div className={probationUserCss.AllUsersTopHeaderButtonInnerOne}>
                        <a className={probationUserCss.AllUsersTopHeaderButtonInnerATag} href="#">
                            <div className={probationUserCss.AllUsersTopHeaderIconDiv}><i className="ri-user-line"></i></div>
                            <div className={probationUserCss.AllUsersTopHeaderInfoDiv}>
                                <h6>Active Users</h6>
                                <label>1230</label>
                            </div>
                        </a>
                    </div>
                    <div className={probationUserCss.AllUsersTopHeaderButtonInnerTwo}>
                        <a className={probationUserCss.AllUsersTopHeaderButtonInnerATag} href="#">
                            <div className={probationUserCss.AllUsersTopHeaderIconDivTwo}><i className="ri-user-line"></i>
                            </div>
                            <div className={probationUserCss.AllUsersTopHeaderInfoDivTwo}>
                                <h6>Inactive Users</h6>
                                <label>300</label>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={probationUserCss.UserDetailsMenuHeader}>
                    <div className={probationUserCss.UserDetailsMainHeading}>
                        <div className={probationUserCss.UserDetailsMainHeadingInner}>
                            <h3>All Users Bank Details</h3>
                            <img src={headingpicture} />
                        </div>
                    </div>
                    <div className={probationUserCss.UserDetailsdropdown}>
                        <div onClick={toggling} className={probationUserCss.dropDownHeader}><a href='#'><i className="ri-arrow-drop-down-fill"></i></a>   </div>
                        {isOpen && (
                            <div className={`dropDownListContain ${probationUserCss.dropDownListContainer}`}>
                                <div className={probationUserCss.DropDownList}>

                                    <div className={probationUserCss.ListItem}>
                                        <a href="#">
                                            <div className={probationUserCss.menuIconName}>
                                                <span>Import to Excel</span>
                                                <i className="ri-download-2-line"></i>
                                            </div>
                                        </a>
                                    </div>
                                    <div className={probationUserCss.ListItem}>
                                        <a href="#">
                                            <div className={probationUserCss.menuIconName}>
                                                <span>Search</span>
                                                <i className="ri-search-line"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={probationUserCss.UserDetailsMainHeadingRightButton}>

                        <div className={probationUserCss.DetailsMenuImportButton}>

                            <div className={probationUserCss.DetailsMenuImportButtonInner}>
                                <label>Export to Excel</label>
                                <CSVLink data={data} headers={headers}>
                                    <i className="ri-download-2-line"></i>
                                </CSVLink>
                            </div>
                        </div>
                        <div className={probationUserCss.DetailsMenuSearchIcon}> <a href="#"> <i className="ri-search-line"></i></a></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={probationUserCss.AllUserMainDiv}>
                    <div className={`row ${probationUserCss.AllUserMainDivInner}`}>
                    {/* {currentTableData.map((item, keyid) => {
                        <div key={keyid}> 
                              </div>
                    } )}  
                    */}
                        {data.map((datas,key) => (
                      
                                <div className={`col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 ${probationUserCss.allUserComponentMain}`} key={key}>
                                    <div className={probationUserCss.AllUserClassComponent}>
                                        <div className={probationUserCss.AllUserClassComponentInner}>
                                             {/* {
                                             data.map(obj => Object.values(obj).forEach(value => value.length===0 ?
                                               hasemptyElement = true
                                             
                                             : console.log(value, "not empty")
                                                ))
                                             } */}
                                        
                            
                                            
                                         
                                            <div className="row">
                                                <div className="col-4 col-lg-4">
                                                    <div className={probationUserCss.AllUserProfilepic}>
                                                        <img src={MyDataProfilePic} />
                                                    </div>
                                                </div>
                                                <div className="col-8 col-lg-8">
                                                    <div className={probationUserCss.AllUserProfleInfo}>
                                                        <h6>{datas?.full_name}</h6>
                                                        <label>{datas?.designation}</label>
                                                        <p>{datas?.ra}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-lg-12">
                                                    <div className={probationUserCss.AllUserProfleDetails}>
                                                        <label>Joining Date: {datas?.date_of_joining}</label>
                                                        <label>CNIC: {datas?.cnic}</label>
                                                        <label>DOB: {datas?.date_of_birth}</label>
                                                        <label>Contact No: {datas?.contact_number}</label>
                                                        <label>Branch No: {datas?.branch_number}</label>
                                                        <label>Bank Name: {datas?.bank_name}</label>
                                                        <label>Gender: {datas?.gender}</label>
                                                        <label>Account No:{datas?.account_number}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6 col-lg-6">
                                                    <div className={probationUserCss.AllUserProfleDetailButton}>
                                                        <button className="btn btn-primary shadow-none" onClick={()=>navigate(ROUTES.VIEW_DETAIL)}> View Details</button>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-6">
                                                    <div className={probationUserCss.AllUserProfleSalaryButton}>
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
                <div className={probationUserCss.UserBankDetailsTablePagination}>
               
                </div>
            </div>

        </>
    )
}

export default ProbationUser
