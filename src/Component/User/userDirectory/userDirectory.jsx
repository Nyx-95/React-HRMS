import React from 'react'
import userDirectoryCss from "./userDirectory.module.css"
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"
import { useEffect, useState } from 'react'


const UserDirectory = () => {
    let screenWidth = window.innerWidth;
    useEffect(() => {
    });

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);


    return (
        
     

        <>
            <div className="row">
                <div className={userDirectoryCss.UserDetailsMenuHeader}>
                    <div className={userDirectoryCss.UserDetailsMainHeading}>
                        <div className={userDirectoryCss.UserDetailsMainHeadingInner}>
                            <h3>User Directory</h3>
                            <img src={headingpicture} />

                        </div>
                    </div>
                    <div className={userDirectoryCss.UserDetailsdropdown}>
                        
                        
                  
                         <div onClick={toggling} className={userDirectoryCss.dropDownHeader}><a href='#'><i className="ri-arrow-drop-down-fill"></i></a>   </div>
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
                                <tr>
                                    <td scope="row">
                                        Aaron Cecil
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                    
                                </tr>
                                <tr>
                                <td scope="row">
                                        Aaron Cecil
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                    
                                </tr>
                                <tr>
                                <td scope="row">
                                        Aaron Cecil
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                    
                                </tr>
                                <tr>
                                <td scope="row">
                                        Aaron Cecil
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                  
                                </tr>
                                <tr>
                                <td scope="row">
                                        Aaron Cecil
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                  
                                </tr>
                                <tr>
                                <td scope="row">
                                        Aaron Cecil
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                  
                                </tr>
                                <tr>
                                <td scope="row">
                                        Aaron Cecil
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                   
                                </tr>
                                <tr>
                                <td scope="row">
                                        Aaron Cecil
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                   
                                </tr>
                                <tr>
                                <td scope="row">
                                        Aaron Cecil
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                    
                                </tr>
                                <tr>
                                <td scope="row">
                                        Aaron Cecil
                                    </td>
                                    <td>aaron.cecil@legendesk.com </td>
                                    <td>4120131084195</td>
                                    <td>Intermediate</td>
                                    <td>Senior Sales
                                        Executive</td>
                                   
                                </tr>
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
                    <div className="col-lg-12 ">
                        <nav aria-label="Page navigation example">
                            <ul className={`pagination ${userDirectoryCss.pagination}`}>
                                <li className={`page-item shadow-none ${userDirectoryCss.pageItem}`}>
                                    <a className={`page-link ${userDirectoryCss.pageLink}`} href="#" aria-label="Previous">
                                        <span aria-hidden="true">
                                        <i className="ri-arrow-left-s-line"></i></span>
                                    </a>
                                </li>
                                <li className="page-item focus"><a className={`page-link ${userDirectoryCss.pageLink}`} href="#">1</a></li>
                                <li className="page-item"><a className={`page-link ${userDirectoryCss.pageLink}`} href="#">2</a></li>
                                <li className="page-item"><a className={`page-link ${userDirectoryCss.pageLink}`} href="#">3</a></li>
                                <li className="page-item">
                                    <a className={`page-link ${userDirectoryCss.pageLink}`} href="#" aria-label="Next">
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

export default UserDirectory