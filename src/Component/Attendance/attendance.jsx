import SideHeader from "../sideHeader/sideHeader"
import attendanceCss from "./attendance.module.css"
import { Outlet, useMatch } from "react-router-dom";
import SecondSubHeader from "./attendanceSubHeader/secondSubHeader";
import AttendanceReport from "./AttendanceReport/attendanceReport";


function UserBody() {
    const isMatch = useMatch("/:children");
    return (
        <>
            <div className={`row ${attendanceCss.mainBodyRow}`}>
                <div className="col-lg-1 col-sm-1 mobilesidebarmain">
                    <SideHeader></SideHeader>
                </div>
                <div className="col-lg-11 col-sm-11">
                    <div className="row gx-0"> <SecondSubHeader></SecondSubHeader> </div>
                    <div className="row gx-0"> {!!isMatch ? <AttendanceReport/> : <Outlet/>}</div>
                </div>
            </div>
        </>

    );
}

export default UserBody;