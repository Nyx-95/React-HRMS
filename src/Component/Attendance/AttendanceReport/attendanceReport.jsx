import React, {useRef} from 'react'
import AttendanceReportCss from "./attendanceReport.module.css"
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"
import $ from "jquery"
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useEffect, useState } from 'react'

const AttendanceReport = () => {
    let screenWidth = window.innerWidth;

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    const headers = [
        { label: "User Name", key: "user_name" },
        { label: "Avg Hours", key: "avg_hour" },
        { label: "Working Hours", key: "working_hour" },
        { label: "Department", key: "department" },
        { label: "Reporting Authority", key: "reporting_authority" }

   
    ];

    const data = [
        { user_name: "Ahmed Zaman Khan", avg_hour: "09:09:39", working_hour: "100:43:39", department: "Digital Marketing", reporting_authority: "Harley Saul Nathaniel Bashir"},
        { user_name: "Ahmed Zaman Khan", avg_hour: "09:09:39", working_hour: "100:43:39", department: "Digital Marketing", reporting_authority: "Harley Saul Nathaniel Bashir"},
        { user_name: "Ahmed Zaman Khan", avg_hour: "09:09:39", working_hour: "100:43:39", department: "Digital Marketing", reporting_authority: "Harley Saul Nathaniel Bashir"},
        { user_name: "Ahmed Zaman Khan", avg_hour: "09:09:39", working_hour: "100:43:39", department: "Digital Marketing", reporting_authority: "Harley Saul Nathaniel Bashir"},
        { user_name: "Ahmed Zaman Khan", avg_hour: "09:09:39", working_hour: "100:43:39", department: "Digital Marketing", reporting_authority: "Harley Saul Nathaniel Bashir"},
    ]

    const tableRef = useRef(null);
    
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Users table',
        sheet: 'Users'
    })
  return (
    <>
    <div className={`row ${AttendanceReportCss.myAttendanceMain}`}>
        <div className={`row ${AttendanceReportCss.headingMain}`}>
            <div className={`row ${AttendanceReportCss.headingInner}`}>
                <div className={`col-10 col-sm-10 col-md-10 col-lg-8 col-xl-8 ${AttendanceReportCss.headingWrapper}`}>
                    <h4> Attendance Report </h4>
                    <img src={headingpicture}></img>
                </div>
                {/* <div className={`col-lg-3 col-xl-3 entrieSelectWrapperJQ ${AttendanceReportCss.entrieSelectWrapper}`} >
                    <label>Show</label>
                    <select name="selectEntries" id="selectEntries">
                        <option value="1">1</option>
                        <option value="2">20</option>
                        <option value="3">300</option>
                    </select>
                    <label>Entries</label>
                </div> */}
                      <div className={AttendanceReportCss.UserDetailsMainHeadingRightButton}>
                        
                        <div className={AttendanceReportCss.DetailsMenuImportButton}>

                            <div className={AttendanceReportCss.DetailsMenuImportButtonInner}>
                                <label>Export to Excel</label>
                          
                                    <a href='#' onClick={onDownload}> <i className="ri-download-2-line"></i></a>
                             
                            </div>
                        </div>
                        <div className={AttendanceReportCss.DetailsMenuSearchIcon}> <a href="#"> <i className="ri-search-line"></i></a></div>
                    </div>
                {/* <div className="col-2 col-sm-2 col-md-2 mobilenav">
                    <div className={AttendanceReportCss.dropDownContainer}>
                        <div onClick={toggling} className={AttendanceReportCss.dropDownHeader}><a href='#'><i className="ri-arrow-drop-down-fill"></i></a></div>
                        {isOpen && (
                            <div className={`dropDownListContain ${AttendanceReportCss.dropDownListContainer}`}>
                                <div className={AttendanceReportCss.DropDownList}>
                                    <div className={AttendanceReportCss.ListItem}>
                                        <label>Show</label>
                                        <select name="selectEntries" id="selectEntries">
                                            <option value="1">1</option>
                                            <option value="2">20</option>
                                            <option value="3">300</option>
                                        </select>
                                        <label>Entries</label>
                                    </div>
                                    <div className={AttendanceReportCss.ListItem}>
                                        <a href="#">
                                            <div className={AttendanceReportCss.menuIconName}>
                                                <span>Search</span>
                                                <i className="ri-search-line"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div> */}
            </div>
        </div>
        <div className={`row ${AttendanceReportCss.myAttendanceTableMain}`}>
            <div className={AttendanceReportCss.UserDetailsMenuTable}>
                <div className={AttendanceReportCss.UserDetailsMenuTableInner}>
                    <div className={AttendanceReportCss.tableHeader}>
                        <div className={AttendanceReportCss.tableHeaderInner}>
                            <div className={AttendanceReportCss.tableHeaderDivs}>
                                <h5>
                                    Search By:
                                </h5>
                            </div>
                            <div className={AttendanceReportCss.tableHeaderDivs}>
                                <div className={AttendanceReportCss.tableHeaderDiv2}>
                                    <div className={AttendanceReportCss.tableHeaderDiv2Icon}>
                                        Select Date
                                    </div>
                                    <div className={AttendanceReportCss.tableHeaderDiv2Label}>
                                      <input type="date"></input>
                                    </div>
                                </div>
                            </div>
                            <div className={AttendanceReportCss.tableHeaderDivs}>
           
                                    <button className={AttendanceReportCss.tableHeaderDivButton}>   Search</button>
                                 
                    
                            </div>
                        </div>
                    </div>
                    <table className={`table ${AttendanceReportCss.attendanceTable}`} >
                        <thead className="thead-dark">
                            <tr>

                                <th scope="col">
                                    <p>User Name</p>
                                </th>
                                <th scope="col">
                                    <p>Avg Hours</p>
                                </th>
                                <th scope="col">
                                    <p>Workings Hours</p>
                                </th>
                                <th scope="col">
                                    <p>Department</p>
                                </th>
                                <th scope="col">
                                    <p>Reporting Authority</p>
                                </th>
                               
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((item, keyid) => {
                            return(
                            <tr key={keyid}>
                                <td>{item.user_name}</td>
                                <td>{item.avg_hour}</td>
                                <td>{item.working_hour}</td>
                                <td>{item.department}</td>
              
                                <td>{item.reporting_authority}</td>
                               
                            </tr>
                            );
                        })}
                        </tbody>
                    </table>
                
                </div>
            </div>
        </div>
        {/* <div className="row">
                <div className={AttendanceReportCss.UserBankDetailTableShow}>
                    <div className="col-lg-12 ">
                        <div className={AttendanceReportCss.DetailsMenuShowButtonLastRow}>
                            <label>Show</label>
                            <select id={AttendanceReportCss.DetailsHeadingRightSelectNumberLastRow}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <label>Entries</label>
                        </div>
                    </div>
                </div>
            </div> */}
        <div className="row">
                        <div className={AttendanceReportCss.UserBankDetailsTablePagination}>
                            <div className="col-lg-12 ">
                                <nav aria-label="Page navigation example">
                                    <ul className={`pagination ${AttendanceReportCss.pagination}`}>
                                        <li className={`page-item shadow-none ${AttendanceReportCss.pageItem}`}>
                                            <a className={`page-link ${AttendanceReportCss.pageLink}`} href="#" aria-label="Previous">
                                                <span aria-hidden="true">
                                                <i className="ri-arrow-left-s-line"></i> </span>
                                            </a>
                                        </li>
                                        <li className="page-item "><a className={`page-link ${AttendanceReportCss.pageLink}`} href="#">1</a></li>
                                        <li className="page-item"><a className={`page-link ${AttendanceReportCss.pageLink}`} href="#">2</a></li>
                                        <li className="page-item"><a className={`page-link ${AttendanceReportCss.pageLink}`} href="#">3</a></li>
                                        <li className="page-item">
                                            <a className={`page-link ${AttendanceReportCss.pageLink}`} href="#" aria-label="Next">
                                                <span aria-hidden="true"><i className="ri-arrow-right-s-line"></i></span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
    </div>
</>
  )
}

export default AttendanceReport