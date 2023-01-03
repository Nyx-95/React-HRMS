import React, { useState, useMemo} from 'react'
import userEventCss from "./userEvents.module.css"
import MyDataProfilePic from "../../../assets/AllUsers/AllUserProfilepic.png"
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"
import { CSVLink } from "react-csv";
import { useNavigate } from 'react-router-dom';
import {ROUTES} from "../../../Utils/routes"

let PageSize = 2;
const UserEvents = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen)
    const navigate = useNavigate();

    const headers = [
        { label: "Full Name", key: "full_name" },
        { label: "Designation", key: "designation" },
        { label: "Date", key: "date" },
        { label: "Event", key: "events" },
    ];

    const data = [
        { full_name: "Ahmed", designation: "Sr. Manager - Ecomerce", date: "12-02-2022", events:"birthday"},
        { full_name: "Ahmed", designation: "Sr. Manager - Ecomerce", date: "12-02-2022", events:"birthday"},
        { full_name: "Ahmed", designation: "Sr. Manager - Ecomerce", date: "12-02-2022", events:"birthday"},
        { full_name: "Ahmed", designation: "Sr. Manager - Ecomerce",date: "12-02-2022", events:"Work Anniversary"},
        { full_name: "Ahmed", designation: "Sr. Manager - Ecomerce", date: "12-02-2022", events:"Work Anniversary"},
        { full_name: "Ahmed", designation: "Sr. Manager - Ecomerce", date: "12-02-2022", events:"Work Anniversary"},
        { full_name: "Ahmed", designation: "Sr. Manager - Ecomerce", date: "12-02-2022", events:"Work Anniversary"}
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
                <div className={userEventCss.UserDetailsMenuHeader}>
                    <div className={userEventCss.UserDetailsMainHeading}>
                        <div className={userEventCss.UserDetailsMainHeadingInner}>
                            <h3>This Month Events</h3>
                            <img src={headingpicture} />
                        </div>
                    </div>
                    <div className={userEventCss.UserDetailsdropdown}>
                        <div onClick={toggling} className={userEventCss.dropDownHeader}><a href='#'><i className="ri-arrow-drop-down-fill"></i></a>   </div>
                        {isOpen && (
                            <div className={`dropDownListContain ${userEventCss.dropDownListContainer}`}>
                                <div className={userEventCss.DropDownList}>

                                    <div className={userEventCss.ListItem}>
                                        <a href="#">
                                            <div className={userEventCss.menuIconName}>
                                                <span>Import to Excel</span>
                                                <i className="ri-download-2-line"></i>
                                            </div>
                                        </a>
                                    </div>
                                    <div className={userEventCss.ListItem}>
                                        <a href="#">
                                            <div className={userEventCss.menuIconName}>
                                                <span>Search</span>
                                                <i className="ri-search-line"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={userEventCss.UserDetailsMainHeadingRightButton}>

                       
                        <div className={userEventCss.DetailsMenuSearchIcon}> <a href="#"> <i className="ri-search-line"></i></a></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={userEventCss.AllUserMainDiv}>
                    <div className={`row ${userEventCss.AllUserMainDivInner}`}>
                    {/* {currentTableData.map((item, keyid) => {
                        <div key={keyid}> 
                              </div>
                    } )}  
                    */}
                        {data.map((datas,key) => (
                      
                                <div className={`col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 ${userEventCss.allUserComponentMain}`} key={key}>
                                    <div className={userEventCss.AllUserClassComponent}>
                                        <div className={userEventCss.AllUserClassComponentInner}>

                                            <div className={userEventCss.eventData}>
                                                <span>{datas?.events}</span>
                                            </div>

                                     
                                            <div className="row">
                                                <div className="col-4 col-lg-4">
                                                    <div className={userEventCss.AllUserProfilepic}>
                                                        <img src={MyDataProfilePic} />
                                                    </div>
                                                </div>
                                                <div className="col-8 col-lg-8">
                                                    <div className={userEventCss.AllUserProfleInfo}>
                                                        <h6>{datas?.full_name}</h6>
                                                        <label>{datas?.designation}</label>
                                                        <p>{datas?.date}</p>
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
                <div className={userEventCss.UserBankDetailsTablePagination}>
               
                </div>
            </div>

        </>
    )
}

export default UserEvents
