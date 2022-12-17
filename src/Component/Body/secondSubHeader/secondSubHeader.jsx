import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../Utils/routes";
import subHeadercss from "./secondSubHeader.module.css"

function secondSubHeader() {
    return (
        <>

            <div className={subHeadercss.UserMenuTopHeader}>
                <ul>
                    <li><NavLink to={ROUTES.MY_DEPARTMENT}><div className={subHeadercss.subHeaderLink} ><i className="ri-user-line"></i><p>My Department</p></div></NavLink></li>
                    <li> <NavLink to={ROUTES.FAMILY_TREE}><div className={subHeadercss.subHeaderLink} ><i className="ri-file-list-line"></i><p>Family Details</p></div></NavLink></li>
                    <li><NavLink to={ROUTES.MY_DATA}><div className={subHeadercss.subHeaderLink} ><i className="ri-edit-line"></i><p>My Data</p></div></NavLink></li>
                    <li><NavLink to={ROUTES.WORK_EXPERIENCE}><div className={subHeadercss.subHeaderLink} ><i className="ri-team-line"></i><p>Work Experience</p></div></NavLink></li>
                    <li><NavLink to={ROUTES.EDUCATIONAL_DETAIL}><div className={subHeadercss.subHeaderLink} ><i className="ri-book-line"></i><p>Educational Details</p></div></NavLink></li>
                    <li><NavLink to={ROUTES.MY_DOCUMENT}><div className={subHeadercss.subHeaderLink} ><i className="ri-file-paper-2-line"></i><p>My Document</p></div></NavLink></li>
                    <li><NavLink to={ROUTES.MY_ATTENDANCE}><div className={subHeadercss.subHeaderLink} ><i className="ri-calendar-event-line"></i><p>My Attendance</p></div></NavLink></li>
                    <li><NavLink to={ROUTES.FAMILY_DETAIL}><div className={subHeadercss.subHeaderLink} ><i className="ri-edit-line"></i><p>Edit Profile Details</p></div></NavLink></li>

                </ul>
            </div>

        </>
    );
}

export default secondSubHeader;