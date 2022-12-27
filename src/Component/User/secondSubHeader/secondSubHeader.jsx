import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../Utils/routes";
import subHeadercss from "./secondSubHeader.module.css"

function secondSubHeader() {
    return (
        <>

            <div className={subHeadercss.UserMenuTopHeader}>
                <ul>
                <NavLink to={ROUTES.MY_DEPARTMENT}><li><div className={subHeadercss.subHeaderLink} ><i className="ri-user-line"></i><p>All Users</p></div></li></NavLink>
                     <NavLink to={ROUTES.BANK_DETAILS}><li><div className={subHeadercss.subHeaderLink} ><i className="ri-file-list-line"></i><p>Bank Details</p></div></li></NavLink>
                   <NavLink to={ROUTES.USER_DIRECTORY}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-team-line"></i><p>User Directory</p></div></li></NavLink>
                   <NavLink to={ROUTES.EDUCATIONAL_DETAIL}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-book-line"></i><p>Departments</p></div></li></NavLink>
                   <NavLink to={ROUTES.MY_DOCUMENT}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-file-paper-2-line"></i><p>Create New User</p></div></li></NavLink>
                   <NavLink to={ROUTES.MY_ATTENDANCE}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-calendar-event-line"></i><p>Contact's Directory</p></div></li></NavLink>
                   <NavLink to={ROUTES.FAMILY_DETAIL}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-edit-line"></i><p>User's RA</p></div></li></NavLink>
                   <NavLink to={ROUTES.MY_DATA}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-edit-line"></i><p>Discrepancies</p></div></li></NavLink>

                </ul>
            </div>

        </>
    );
}

export default secondSubHeader;