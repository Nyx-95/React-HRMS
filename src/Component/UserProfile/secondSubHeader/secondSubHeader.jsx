import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../Utils/routes";
import subHeadercss from "./secondSubHeader.module.css"

function secondSubHeader() {
    return (
        <>

            <div className={subHeadercss.UserMenuTopHeader}>
                <ul>
                <NavLink to={ROUTES.MY_DEPARTMENT}><li><div className={subHeadercss.subHeaderLink} ><i className="ri-user-line"></i><p>My Department</p></div></li></NavLink>
                     <NavLink to={ROUTES.FAMILY_TREE}><li><div className={subHeadercss.subHeaderLink} ><i className="ri-file-list-line"></i><p>Family Details</p></div></li></NavLink>
                   <NavLink to={ROUTES.WORK_EXPERIENCE}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-team-line"></i><p>Work Experience</p></div></li></NavLink>
                   <NavLink to={ROUTES.EDUCATIONAL_DETAIL}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-book-line"></i><p>Educational Details</p></div></li></NavLink>
                   <NavLink to={ROUTES.MY_DOCUMENT}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-file-paper-2-line"></i><p>My Document</p></div></li></NavLink>
                   <NavLink to={ROUTES.MY_ATTENDANCE}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-calendar-event-line"></i><p>My Attendance</p></div></li></NavLink>
                   <NavLink to={ROUTES.FAMILY_DETAIL}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-edit-line"></i><p>Edit Profile Details</p></div></li></NavLink>
                   <NavLink to={ROUTES.MY_DATA}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-edit-line"></i><p>My Data</p></div></li></NavLink>

                </ul>
            </div>

        </>
    );
}

export default secondSubHeader;