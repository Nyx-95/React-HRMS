import React from 'react'
import EmployeeSalaryCss from "./employeeSalary.module.css"
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"
import $ from "jquery"
import { useEffect, useState } from 'react'

const EmployeeSalary = () => {
    let screenWidth = window.innerWidth;

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    const headers = [
        { label: "Serial No.", key: "serial_no" },
        { label: "Array Id", key: "array_id" },
        { label: "Employee Id", key: "employee_id" },
        { label: "Employee Name", key: "employee_name" },
        { label: "Date of Joining", key: "date_of_joining" },
        { label: "Reporting Authority", key: "reporting_authority" },
        { label: "Employee Type", key: "employee_type" },
        { label: "Salary", key: "salary" }

   
    ];

    const data = [
        { serial_no: "2", array_id: "AD-0008", employee_id: "AD-23510", employee_name: "Syed Sadat Ali", date_of_joining: "08-01-2018", reporting_authority: "Rameez Shahid", employee_type: "Permanent", salary: "Rs. 325,000.0"},
        { serial_no: "2", array_id: "AD-0008", employee_id: "AD-23510", employee_name: "Syed Sadat Ali", date_of_joining: "08-01-2018", reporting_authority: "Rameez Shahid", employee_type: "Permanent", salary: "Rs. 325,000.0"},
        { serial_no: "2", array_id: "AD-0008", employee_id: "AD-23510", employee_name: "Syed Sadat Ali", date_of_joining: "08-01-2018", reporting_authority: "Rameez Shahid", employee_type: "Permanent", salary: "Rs. 325,000.0"},
        { serial_no: "2", array_id: "AD-0008", employee_id: "AD-23510", employee_name: "Syed Sadat Ali", date_of_joining: "08-01-2018", reporting_authority: "Rameez Shahid", employee_type: "Permanent", salary: "Rs. 325,000.0"},
        { serial_no: "2", array_id: "AD-0008", employee_id: "AD-23510", employee_name: "Syed Sadat Ali", date_of_joining: "08-01-2018", reporting_authority: "Rameez Shahid", employee_type: "Permanent", salary: "Rs. 325,000.0"},
        { serial_no: "2", array_id: "AD-0008", employee_id: "AD-23510", employee_name: "Syed Sadat Ali", date_of_joining: "08-01-2018", reporting_authority: "Rameez Shahid", employee_type: "Permanent", salary: "Rs. 325,000.0"},
    ]

  return (
    <>
    <div className={`row ${EmployeeSalaryCss.myAttendanceMain}`}>
        <div className={`row ${EmployeeSalaryCss.headingMain}`}>
            <div className={`row ${EmployeeSalaryCss.headingInner}`}>
                <div className={`col-10 col-sm-10 col-md-10 col-lg-8 col-xl-8 ${EmployeeSalaryCss.headingWrapper}`}>
                    <h4> Employee Salary</h4>
                    <img src={headingpicture}></img>
                </div>
                {/* <div className={`col-lg-3 col-xl-3 entrieSelectWrapperJQ ${EmployeeSalaryCss.entrieSelectWrapper}`} >
                    <label>Show</label>
                    <select name="selectEntries" id="selectEntries">
                        <option value="1">1</option>
                        <option value="2">20</option>
                        <option value="3">300</option>
                    </select>
                    <label>Entries</label>
                </div> */}
                <div className={`col-lg-1 col-xl-1 searchIconMainJQ ${EmployeeSalaryCss.searchIconMain}`}>
                    <a href='#'><i className="ri-search-line"></i></a>
                </div>
                {/* <div className="col-2 col-sm-2 col-md-2 mobilenav">
                    <div className={EmployeeSalaryCss.dropDownContainer}>
                        <div onClick={toggling} className={EmployeeSalaryCss.dropDownHeader}><a href='#'><i className="ri-arrow-drop-down-fill"></i></a></div>
                        {isOpen && (
                            <div className={`dropDownListContain ${EmployeeSalaryCss.dropDownListContainer}`}>
                                <div className={EmployeeSalaryCss.DropDownList}>
                                    <div className={EmployeeSalaryCss.ListItem}>
                                        <label>Show</label>
                                        <select name="selectEntries" id="selectEntries">
                                            <option value="1">1</option>
                                            <option value="2">20</option>
                                            <option value="3">300</option>
                                        </select>
                                        <label>Entries</label>
                                    </div>
                                    <div className={EmployeeSalaryCss.ListItem}>
                                        <a href="#">
                                            <div className={EmployeeSalaryCss.menuIconName}>
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
        <div className={`row ${EmployeeSalaryCss.myAttendanceTableMain}`}>
            <div className={EmployeeSalaryCss.UserDetailsMenuTable}>
                <div className={EmployeeSalaryCss.UserDetailsMenuTableInner}>
                    <div className={EmployeeSalaryCss.tableHeader}>
                        <div className={EmployeeSalaryCss.tableHeaderInner}>
                            <div className={EmployeeSalaryCss.tableHeaderDivs}>
                                <h5>
                                    Search By:
                                </h5>
                            </div>
                            <div className={EmployeeSalaryCss.tableHeaderDivs}>
                                <div className={EmployeeSalaryCss.tableHeaderDiv2}>
                                    <div className={EmployeeSalaryCss.tableHeaderDiv2Icon}>
                                        Select Month
                                    </div>
                                    <div className={EmployeeSalaryCss.tableHeaderDiv2Label}>
                                      <input type="month"></input>
                                    </div>
                                </div>
                            </div>
                            <div className={EmployeeSalaryCss.tableHeaderDivs}>
           
                                    <button className={EmployeeSalaryCss.tableHeaderDivButton}>   Search</button>
                                 
                    
                            </div>
                        </div>
                    </div>
                    <table className={`table ${EmployeeSalaryCss.attendanceTable}`}>
                        <thead className="thead-dark">
                            <tr>

                                <th scope="col">
                                    <p>Serial No.</p>
                                </th>
                                <th scope="col">
                                    <p>Array Id</p>
                                </th>
                                <th scope="col">
                                    <p>Employee Id</p>
                                </th>
                                <th scope="col">
                                    <p>Employee Name</p>
                                </th>
                                <th scope="col">
                                    <p>Date Of Joining</p>
                                </th>
                                <th scope="col">
                                    <p>Reporting Authority</p>
                                </th>
                                <th scope="col">
                                    <p>Employee Type</p>
                                </th>
                                <th scope="col">
                                    <p>Salary</p>
                                </th>
                                <th scope="col">
                                    <p>Details</p>
                                </th>
                                <th scope="col">
                                    <p>Actions</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((item, keyid) => {
                            return(
                            <tr key={keyid}>
                                <td>{item.serial_no}</td>
                                <td>{item.array_id}</td>
                                <td>{item.employee_id}</td>
                                <td>{item.employee_name}</td>
                                <td>{item.date_of_joining}</td>
                                <td>{item.reporting_authority}</td>
                                <td>{item.employee_type}</td>
                                <td>{item.salary}</td>
                                <td><i className="ri-profile-line"></i></td>
                                <td><i className="ri-edit-line"></i></td>
                            </tr>
                            );
                        })}
                        </tbody>
                    </table>
                
                </div>
            </div>
        </div>
        {/* <div className="row">
                <div className={EmployeeSalaryCss.UserBankDetailTableShow}>
                    <div className="col-lg-12 ">
                        <div className={EmployeeSalaryCss.DetailsMenuShowButtonLastRow}>
                            <label>Show</label>
                            <select id={EmployeeSalaryCss.DetailsHeadingRightSelectNumberLastRow}>
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
                        <div className={EmployeeSalaryCss.UserBankDetailsTablePagination}>
                            <div className="col-lg-12 ">
                                <nav aria-label="Page navigation example">
                                    <ul className={`pagination ${EmployeeSalaryCss.pagination}`}>
                                        <li className={`page-item shadow-none ${EmployeeSalaryCss.pageItem}`}>
                                            <a className={`page-link ${EmployeeSalaryCss.pageLink}`} href="#" aria-label="Previous">
                                                <span aria-hidden="true">
                                                <i className="ri-arrow-left-s-line"></i> </span>
                                            </a>
                                        </li>
                                        <li className="page-item "><a className={`page-link ${EmployeeSalaryCss.pageLink}`} href="#">1</a></li>
                                        <li className="page-item"><a className={`page-link ${EmployeeSalaryCss.pageLink}`} href="#">2</a></li>
                                        <li className="page-item"><a className={`page-link ${EmployeeSalaryCss.pageLink}`} href="#">3</a></li>
                                        <li className="page-item">
                                            <a className={`page-link ${EmployeeSalaryCss.pageLink}`} href="#" aria-label="Next">
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

export default EmployeeSalary