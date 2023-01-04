import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../Utils/routes";
import subHeadercss from "./secondSubHeader.module.css"

function secondSubHeader() {
    return (
        <>

            <div className={subHeadercss.UserMenuTopHeader}>
                <ul>
                    <NavLink to={ROUTES.ATTENDANCE_REPORT}><li><div className={subHeadercss.subHeaderLink} ><i className="ri-user-line"></i><p>Attendance Report</p></div></li></NavLink>
                    <NavLink to={ROUTES.BANK_DETAILS}><li><div className={subHeadercss.subHeaderLink} ><i className="ri-file-list-line"></i><p>Today's Report</p></div></li></NavLink>
                    <NavLink to={ROUTES.USER_DIRECTORY}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-team-line"></i><p>Break Reports</p></div></li></NavLink>
                    <NavLink to={ROUTES.DEPARTMENT}> <li><div className={subHeadercss.subHeaderLink} ><i className="ri-book-line"></i><p>Discrepancies</p></div></li></NavLink>

                </ul>
            </div>

        </>
    );
}

export default secondSubHeader;