import React from 'react'
import AttendanceCss from "./myAttendance.module.css"
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"
import $ from "jquery"
import { useEffect, useState } from 'react'


const MyAttendance = () => {
    useEffect(() => {
        let screenWidth = window.innerWidth;
        screenWidth <= 992 ? $(".entrieSelectWrapperJQ").hide() : $(".entrieSelectWrapperJQ").show();
        screenWidth <= 992 ? $(".searchIconMainJQ").hide() : $(".searchIconMainJQ").show();
        screenWidth <= 992 ? $(".hamburgerMenu").show() : $(".hamburgerMenu").hide();
    });
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    return (

        <>
            <div className={`row ${AttendanceCss.myAttendanceMain}`}>
                <div className={`row ${AttendanceCss.headingMain}`}>
                    <div className={`row ${AttendanceCss.headingInner}`}>
                        <div className={`col-10 col-sm-10 col-md-10 col-lg-8 col-xl-8 ${AttendanceCss.headingWrapper}`}>
                            <h4> My Attendance Report</h4>
                            <img src={headingpicture}></img>
                        </div>
                        <div className={`col-lg-3 col-xl-3 entrieSelectWrapperJQ ${AttendanceCss.entrieSelectWrapper}`}>
                            <label>Show</label>
                            <select name="selectEntries" id="selectEntries">
                                <option value="1">1</option>
                                <option value="2">20</option>
                                <option value="3">300</option>
                            </select>
                            <label>Entries</label>
                        </div>
                        <div className={`col-lg-1 col-xl-1 searchIconMainJQ ${AttendanceCss.searchIconMain}`}>
                            <a href='#'><i className="ri-search-line"></i></a>
                        </div>
                        <div className="col-2 col-sm-2 col-md-2 mobilenav">
                            <div className={AttendanceCss.dropDownContainer}>
                                <div onClick={toggling} className={AttendanceCss.dropDownHeader}><a href='#'><i className="ri-arrow-drop-down-fill"></i></a></div>
                                {isOpen && (
                                    <div className={`dropDownListContain ${AttendanceCss.dropDownListContainer}`}>
                                        <div className={AttendanceCss.DropDownList}>
                                            <div className={AttendanceCss.ListItem}>
                                                <label>Show</label>
                                                <select name="selectEntries" id="selectEntries">
                                                    <option value="1">1</option>
                                                    <option value="2">20</option>
                                                    <option value="3">300</option>
                                                </select>
                                                <label>Entries</label>
                                            </div>
                                            <div className={AttendanceCss.ListItem}>
                                                <a href="#">
                                                    <div className={AttendanceCss.menuIconName}>
                                                        <span>Search</span>
                                                        <i className="ri-search-line"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`row ${AttendanceCss.myAttendanceTableMain}`}>
                    <div className={AttendanceCss.UserDetailsMenuTable}>
                        <div className={AttendanceCss.UserDetailsMenuTableInner}>
                            <div className={AttendanceCss.tableHeader}>
                                <div className={AttendanceCss.tableHeaderInner}>
                                    <div className={AttendanceCss.tableHeaderDivs}>
                                        <div className={AttendanceCss.tableHeaderDiv1}>
                                            <div className={AttendanceCss.tableHeaderDiv1Icon}>
                                                <i className="ri-speed-mini-line"></i>
                                            </div>
                                            <div className={AttendanceCss.tableHeaderDiv1Label}>
                                                <label>09:10</label>
                                                <label>Time In</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={AttendanceCss.tableHeaderDivs}>
                                        <div className={AttendanceCss.tableHeaderDiv1}>
                                            <div className={AttendanceCss.tableHeaderDiv1Icon}>
                                                <i className="ri-rewind-mini-line"></i>
                                            </div>
                                            <div className={AttendanceCss.tableHeaderDiv1Label}>
                                                <label>09:10</label>
                                                <label>Time In</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={AttendanceCss.tableHeaderDivs}>
                                        <div className={AttendanceCss.tableHeaderDiv1}>
                                            <div className={AttendanceCss.tableHeaderDiv1Icon}>
                                                <i className="ri-time-line"></i>
                                            </div>
                                            <div className={AttendanceCss.tableHeaderDiv1Label}>
                                                <label>09:10</label>
                                                <label>Time In</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={AttendanceCss.tableHeaderDivs}>
                                        <div className={AttendanceCss.tableHeaderDiv1}>
                                            <div className={AttendanceCss.tableHeaderDiv1Icon}>
                                                <i className="ri-calendar-check-line"></i>
                                            </div>
                                            <div className={AttendanceCss.tableHeaderDiv1Label}>
                                                <label>09:10</label>
                                                <label>Time In</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table className={`table ${AttendanceCss.attendanceTable}`}>
                                <thead className="thead-dark">
                                    <tr>

                                        <th scope="col">
                                            <p>Date</p>
                                        </th>
                                        <th scope="col">
                                            <p>Day</p>
                                        </th>
                                        <th scope="col">
                                            <p>Time In</p>
                                        </th>
                                        <th scope="col">
                                            <p>Time Out</p>
                                        </th>
                                        <th scope="col">
                                            <p>Hours</p>
                                        </th>
                                        <th scope="col">
                                            <p>Discrepancy</p>
                                        </th>
                                        <th scope="col">
                                            <p>Reason</p>
                                        </th>
                                        <th scope="col">
                                            <p>Discrepancy Status</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>21-oct-2022</td>
                                        <td>Wed</td>
                                        <td>01:37:18</td>
                                        <td>00:07:37</td>
                                        <td>00:00:03</td>
                                        <td>Time Out Missing</td>
                                        <td>Machine Error</td>
                                        <td><a href='#'>Fill Leave</a></td>
                                    </tr>
                                    <tr>
                                        <td>21-oct-2022</td>
                                        <td>Wed</td>
                                        <td>01:37:18</td>
                                        <td>00:07:37</td>
                                        <td>00:00:03</td>
                                        <td>Time Out Missing</td>
                                        <td>Machine Error</td>
                                        <td><a href='#'>Fill Leave</a></td>
                                    </tr>
                                    <tr>
                                        <td>21-oct-2022</td>
                                        <td>Wed</td>
                                        <td>01:37:18</td>
                                        <td>00:07:37</td>
                                        <td>00:00:03</td>
                                        <td>Time Out Missing</td>
                                        <td>Machine Error</td>
                                        <td><a href='#'>Fill Leave</a></td>
                                    </tr>
                                    <tr>
                                        <td>21-oct-2022</td>
                                        <td>Wed</td>
                                        <td>01:37:18</td>
                                        <td>00:07:37</td>
                                        <td>00:00:03</td>
                                        <td>Time Out Missing</td>
                                        <td>Machine Error</td>
                                        <td><a href='#'>Fill Leave</a></td>
                                    </tr>
                                    <tr>
                                        <td>21-oct-2022</td>
                                        <td>Wed</td>
                                        <td>01:37:18</td>
                                        <td>00:07:37</td>
                                        <td>00:00:03</td>
                                        <td>Time Out Missing</td>
                                        <td>Machine Error</td>
                                        <td><a href='#'>Fill Leave</a></td>
                                    </tr>

                                </tbody>
                            </table>
                        
                        </div>
                    </div>
                </div>
                <div className="row">
                        <div className={AttendanceCss.UserBankDetailTableShow}>
                            <div className="col-lg-12 ">
                                <div className={AttendanceCss.DetailsMenuShowButtonLastRow}>
                                    <label>Show</label>
                                    <select id={AttendanceCss.DetailsHeadingRightSelectNumberLastRow}>
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
                                <div className={AttendanceCss.UserBankDetailsTablePagination}>
                                    <div className="col-lg-12 ">
                                        <nav aria-label="Page navigation example">
                                            <ul className={`pagination ${AttendanceCss.pagination}`}>
                                                <li className={`page-item shadow-none ${AttendanceCss.pageItem}`}>
                                                    <a className={`page-link ${AttendanceCss.pageLink}`} href="#" aria-label="Previous">
                                                        <span aria-hidden="true">
                                                        <i className="ri-arrow-left-s-line"></i> </span>
                                                    </a>
                                                </li>
                                                <li className="page-item "><a className={`page-link ${AttendanceCss.pageLink}`} href="#">1</a></li>
                                                <li className="page-item"><a className={`page-link ${AttendanceCss.pageLink}`} href="#">2</a></li>
                                                <li className="page-item"><a className={`page-link ${AttendanceCss.pageLink}`} href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className={`page-link ${AttendanceCss.pageLink}`} href="#" aria-label="Next">
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

export default MyAttendance