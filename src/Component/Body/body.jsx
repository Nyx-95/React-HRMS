import SideHeader from "./sideHeader/sideHeader";
import MiddleMenu from "./middleMenu/middleMenu";
import SecondSubHeader from "./secondSubHeader/secondSubHeader";
import bodyCss from "./body.module.css"
import MyDepartment from "./myDepartment/myDepartment";
import FamilyDetail from "./editProfileDetails/FamilDetails/familyDetail";
import AcademicDetail from "./editProfileDetails/AcademicDetails/academicDetail";
import EmployeeData from "./editProfileDetails/EmployeeData/employeeData";
import EducationalDetail from "./educationalDetails/educationalDetail";
import PreviousWork from "./editProfileDetails/PreviousWork/PreviousWork";

function Body() {
    return (
        <>
            <div className={`row ${bodyCss.mainBodyRow}`}>
                <div className="col-lg-1 col-sm-1 mobilesidebarmain">
                    <SideHeader></SideHeader>

                </div>
                <div className="col-lg-11 col-sm-11">
                    <div className="row gx-0"> <SecondSubHeader></SecondSubHeader> </div>
                    <div className="row gx-0"> <PreviousWork/></div>
                </div>
            </div>
        </>

    );
}

export default Body;