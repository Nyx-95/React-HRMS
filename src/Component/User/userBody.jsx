import SideHeader from "../sideHeader/sideHeader"
import userBodyCss from "./userBody.module.css"
import { Outlet, useMatch } from "react-router-dom";
import SecondSubHeader from "../User/secondSubHeader/secondSubHeader";

import AllUser from "./AllUser/allUser/allUser";


function UserBody() {
    const isMatch = useMatch("/:children");
    return (
        <>
            <div className={`row ${userBodyCss.mainBodyRow}`}>
                <div className="col-lg-1 col-sm-1 mobilesidebarmain">
                    <SideHeader></SideHeader>
                </div>
                <div className="col-lg-11 col-sm-11">
                    <div className="row gx-0"> <SecondSubHeader></SecondSubHeader> </div>
                    <div className="row gx-0"> {!!isMatch ? <AllUser/> : <Outlet/>}</div>
                </div>
            </div>
        </>

    );
}

export default UserBody;