import React from 'react'
import BankDetailsCss from "./bankDetails.module.css"
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"
import { useEffect, useState } from 'react'


const BankDetails = () => {
    let screenWidth = window.innerWidth;
    useEffect(() => {
    });

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
                                <tr>
                                    <td scope="row">
                                        <div className="form-check">
                                            <input className={`form-check-input shadow-none ${BankDetailsCss.flexCheckDefault}`} type="checkbox" value=""
                                                id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                    <td>Individual -
                                        Salaried/Employed</td>
                                    <td>Aaron Cecil</td>
                                    <td>Cecil John</td>
                                    <td>Male</td>
                                    <td>Married</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <div className="form-check">
                                            <input className={`form-check-input shadow-none ${BankDetailsCss.flexCheckDefault}`} type="checkbox" value=""
                                                id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                    <td>Individual -
                                        Salaried/Employed</td>
                                    <td>Aaron Cecil</td>
                                    <td>Cecil John</td>
                                    <td>Male</td>
                                    <td>Married</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <div className="form-check">
                                            <input className={`form-check-input shadow-none ${BankDetailsCss.flexCheckDefault}`} type="checkbox" value=""
                                                id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                    <td>Individual -
                                        Salaried/Employed</td>
                                    <td>Aaron Cecil</td>
                                    <td>Cecil John</td>
                                    <td>Male</td>
                                    <td>Married</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <div className="form-check">
                                            <input className={`form-check-input shadow-none ${BankDetailsCss.flexCheckDefault}`} type="checkbox" value=""
                                                id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                    <td>Individual -
                                        Salaried/Employed</td>
                                    <td>Aaron Cecil</td>
                                    <td>Cecil John</td>
                                    <td>Male</td>
                                    <td>Married</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <div className="form-check">
                                            <input className={`form-check-input shadow-none ${BankDetailsCss.flexCheckDefault}`} type="checkbox" value=""
                                                id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                    <td>Individual -
                                        Salaried/Employed</td>
                                    <td>Aaron Cecil</td>
                                    <td>Cecil John</td>
                                    <td>Male</td>
                                    <td>Married</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <div className="form-check">
                                            <input className={`form-check-input shadow-none ${BankDetailsCss.flexCheckDefault}`} type="checkbox" value=""
                                                id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                    <td>Individual -
                                        Salaried/Employed</td>
                                    <td>Aaron Cecil</td>
                                    <td>Cecil John</td>
                                    <td>Male</td>
                                    <td>Married</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <div className="form-check">
                                            <input className={`form-check-input shadow-none ${BankDetailsCss.flexCheckDefault}`} type="checkbox" value=""
                                                id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                    <td>Individual -
                                        Salaried/Employed</td>
                                    <td>Aaron Cecil</td>
                                    <td>Cecil John</td>
                                    <td>Male</td>
                                    <td>Married</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <div className="form-check">
                                            <input className={`form-check-input shadow-none ${BankDetailsCss.flexCheckDefault}`} type="checkbox" value=""
                                                id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                    <td>Individual -
                                        Salaried/Employed</td>
                                    <td>Aaron Cecil</td>
                                    <td>Cecil John</td>
                                    <td>Male</td>
                                    <td>Married</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <div className="form-check">
                                            <input className={`form-check-input shadow-none ${BankDetailsCss.flexCheckDefault}`} type="checkbox" value=""
                                                id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                    <td>Individual -
                                        Salaried/Employed</td>
                                    <td>Aaron Cecil</td>
                                    <td>Cecil John</td>
                                    <td>Male</td>
                                    <td>Married</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <div className="form-check">
                                            <input className={`form-check-input shadow-none ${BankDetailsCss.flexCheckDefault}`} type="checkbox" value=""
                                                id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                    <td>Individual -
                                        Salaried/Employed</td>
                                    <td>Aaron Cecil</td>
                                    <td>Cecil John</td>
                                    <td>Male</td>
                                    <td>Married</td>
                                </tr>
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
                    <div className="col-lg-12 ">
                        <nav aria-label="Page navigation example">
                            <ul className={`pagination ${BankDetailsCss.pagination}`}>
                                <li className={`page-item shadow-none ${BankDetailsCss.pageItem}`}>
                                    <a className={`page-link ${BankDetailsCss.pageLink}`} href="#" aria-label="Previous">
                                        <span aria-hidden="true">
                                        <i className="ri-arrow-left-s-line"></i></span>
                                    </a>
                                </li>
                                <li className="page-item focus"><a className={`page-link ${BankDetailsCss.pageLink}`} href="#">1</a></li>
                                <li className="page-item"><a className={`page-link ${BankDetailsCss.pageLink}`} href="#">2</a></li>
                                <li className="page-item"><a className={`page-link ${BankDetailsCss.pageLink}`} href="#">3</a></li>
                                <li className="page-item">
                                    <a className={`page-link ${BankDetailsCss.pageLink}`} href="#" aria-label="Next">
                                        <span aria-hidden="true"><i className="ri-arrow-right-s-line"></i></span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BankDetails