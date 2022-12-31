import React ,{useState, useMemo} from 'react'
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"

import data from './data/data.json';
import Pagination from './Pagination'
import contactDirectoryCss from './contactDirectory.module.css'
let PageSize = 8;
const ContactDirectory = () => {
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
                <div className={contactDirectoryCss.UserDetailsMenuHeader}>
                    <div className={contactDirectoryCss.UserDetailsMainHeading}>
                        <div className={contactDirectoryCss.UserDetailsMainHeadingInner}>
                            <h3>Contact's Directory</h3>
                            <img src={headingpicture} />
                        </div>
                    </div>
                    <div className={contactDirectoryCss.UserDetailsMenuSearch}>
                        <a href="#">
                            <div className={contactDirectoryCss.menuIconName}>
                            
                                <i className="ri-search-line"></i>
                            </div>
                        </a>
                    </div>
                    {/* <div className={contactDirectoryCss.UserDetailsdropdown}>
                        <div onClick={toggling} className={contactDirectoryCss.dropDownHeader}><a href='#'><i className="ri-arrow-drop-down-fill"></i></a> </div>
                        {isOpen && (
                            <div className={`dropDownListContain ${contactDirectoryCss.dropDownListContainer}`}>
                                <div className={contactDirectoryCss.DropDownList}>
                         
                                    
                                    <div className={contactDirectoryCss.ListItem}>
                                        <a href="#">
                                            <div className={contactDirectoryCss.menuIconName}>
                                                <span>Search</span>
                                                <i className="ri-search-line"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div> */}
                </div>
            </div>
            <div className="row">
                <div className={contactDirectoryCss.UserDetailsMenuTable}>
                    <div className={contactDirectoryCss.UserDetailsMenuTableInner}>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>

                                <th scope="col">
                                        <p>User Name</p>
                                    </th>
                                    <th scope="col">
                                        <p>Department</p>
                                    </th>
                                    <th scope="col">
                                        <p>Phone Number</p>
                                    </th>
                                  

                                </tr>
                            </thead>
                            <tbody>
                                {currentTableData.map((item, keyid) => {
                                    return (
                                        <tr key={keyid}>

                                            <td><p>{item.user_name}</p></td>
                                            <td><p> {item.department} </p></td>
                                            <td><p>{item.phone_number}</p></td>
                                        </tr>
                                    );
                                })}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={contactDirectoryCss.UserBankDetailTableShow}>
                    <div className="col-lg-12 ">
                        <div className={contactDirectoryCss.DetailsMenuShowButtonLastRow}>
                            <label>Show</label>
                            <select id="DetailsHeadingRightSelectNumberLastRow" className={contactDirectoryCss.DetailsHeadingRightSelectNumberLastRow}>
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
                
            </div>
        </>
    )
}

export default ContactDirectory