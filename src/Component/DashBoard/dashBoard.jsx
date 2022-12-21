
import dashBoardCss from "./dashBoard.module.css"
import DashBoardMain from "./dashBoardMain/dashBoardMain"
import SideHeader from "../sideHeader/sideHeader"


function Body() {
 
  
    return (
        <>
            <div className={`row ${dashBoardCss.mainBodyRow}`}>
                <div className="col-lg-1 col-sm-1 mobilesidebarmain">
                    <SideHeader></SideHeader>
                </div>
                <div className="col-lg-11 col-sm-11">
                    <div className="row gx-0"> {<DashBoardMain/>}</div>
                </div>
            </div>
        </>

    );
}

export default Body;