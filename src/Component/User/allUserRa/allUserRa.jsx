
import React ,{useState, useMemo} from 'react'
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"

import data from './data/data.json';

import allUserRaCss from './allUserRa.module.css'
let PageSize = 8;


const AllUserRa = () => {
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
                <div className={allUserRaCss.UserDetailsMenuHeader}>
                    <div className={allUserRaCss.UserDetailsMainHeading}>
                        <div className={allUserRaCss.UserDetailsMainHeadingInner}>
                            <h3>All User's RA</h3>
                            <img src={headingpicture} />
                        </div>
                    </div>
                    <div className={allUserRaCss.UserDetailsMenuSearch}>
                        <a href="#">
                            <div className={allUserRaCss.menuIconName}>
                            
                                <i className="ri-search-line"></i>
                            </div>
                        </a>
                    </div>
                    {/* <div className={allUserRaCss.UserDetailsdropdown}>
                        <div onClick={toggling} className={allUserRaCss.dropDownHeader}><a href='#'><i className="ri-arrow-drop-down-fill"></i></a> </div>
                        {isOpen && (
                            <div className={`dropDownListContain ${allUserRaCss.dropDownListContainer}`}>
                                <div className={allUserRaCss.DropDownList}>
                         
                                    
                                    <div className={allUserRaCss.ListItem}>
                                        <a href="#">
                                            <div className={allUserRaCss.menuIconName}>
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
                <div className={allUserRaCss.UserDetailsMenuTable}>
                    <div className={allUserRaCss.UserDetailsMenuTableInner}>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>

                                <th scope="col">
                                        <p>User Name</p>
                                    </th>
                                    <th scope="col">
                                        <p>Reporting Authority</p>
                                    </th>
                                    <th scope="col">
                                        <p>Department</p>
                                    </th>
                                  

                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, keyid) => {
                                    return (
                                        <tr key={keyid}>

                                            <td><p>{item.user_name}</p></td>
                                            <td><p> {item.reporting_authority} </p></td>
                                            <td><p>{item.department}</p></td>
                                        </tr>
                                    );
                                })}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={allUserRaCss.UserBankDetailTableShow}>
                    <div className="col-lg-12 ">
                        <div className={allUserRaCss.DetailsMenuShowButtonLastRow}>
                            <label>Show</label>
                            <select id="DetailsHeadingRightSelectNumberLastRow" className={allUserRaCss.DetailsHeadingRightSelectNumberLastRow}>
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

export default AllUserRa