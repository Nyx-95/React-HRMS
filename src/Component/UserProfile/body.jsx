import SideHeader from "./sideHeader/sideHeader";
import MiddleMenu from "./middleMenu/middleMenu";
import SecondSubHeader from "./secondSubHeader/secondSubHeader";
import bodyCss from "./body.module.css"
import { Outlet, useMatch } from "react-router-dom";



function Body() {
    const isMatch = useMatch("/:children");
  
    return (
        <>
            <div className={`row ${bodyCss.mainBodyRow}`}>
                <div className="col-lg-1 col-sm-1 mobilesidebarmain">
                    <SideHeader></SideHeader>
                </div>
                <div className="col-lg-11 col-sm-11">
                    <div className="row gx-0"> <SecondSubHeader></SecondSubHeader> </div>
                    <div className="row gx-0"> {!!isMatch ? <Outlet/> : <MiddleMenu/>}</div>
                </div>
            </div>
        </>

    );
}

export default Body;