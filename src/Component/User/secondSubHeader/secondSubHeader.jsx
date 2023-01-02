import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../Utils/routes";
import subHeadercss from "./secondSubHeader.module.css"

function secondSubHeader() {
    return (
        <>

            <div className={subHeadercss.UserMenuTopHeader}>
                <ul>
                <NavLink to={ROUTES.ALL_USER}><li><div className={subHeadercss.subHeaderLink} ><i className="ri-user-line"></i><p>All Users</p></div></li></NavLink>
                     <NavLink to={ROUTES.BANK_DETAILS}><li><div className={subHeadercss.subHeaderLink} ><i className="ri-file-list-line"></i><p>Bank Details</p></div></li></NavLink>
                   <NavLink to={ROUTES.USER_DIRECTORY}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-team-line"></i><p>User Directory</p></div></li></NavLink>
                   <NavLink to={ROUTES.DEPARTMENT}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-book-line"></i><p>Departments</p></div></li></NavLink>
                   <NavLink to={ROUTES.CREATE_NEW_USER}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-file-paper-2-line"></i><p>Create New User</p></div></li></NavLink>
                   <NavLink to={ROUTES.CONTACT_DIRECTORY}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-calendar-event-line"></i><p>Contact's Directory</p></div></li></NavLink>
                   <NavLink to={ROUTES.ALL_USER_RA}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-edit-line"></i><p>User's RA</p></div></li></NavLink>
                   <NavLink to={ROUTES.EMPLOYEE_SALARY}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-edit-line"></i><p>Employee Salary</p></div></li></NavLink>
                   <NavLink to={ROUTES.MY_DATA}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-edit-line"></i><p>Events</p></div></li></NavLink>
                   <NavLink to={ROUTES.MY_DATA}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-edit-line"></i><p>Probation User</p></div></li></NavLink>
                </ul>
            </div>

        </>
    );
}

export default secondSubHeader;