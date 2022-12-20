import React from 'react'
import departmentCss from "./myDepartment.module.css"
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"
import DepartmentComponent from './departmentComponent/departmentComponent'

const myDepartment = () => {
  return (
    <>
        <div className={`row ${departmentCss.myDepartmentMain}`}> 
                <div className={`row ${departmentCss.headingMain}`}>
                    <div className={departmentCss.headingInner}> 
                        <div className={departmentCss.headingWrapper}>
                            <h4> Team Members</h4>
                            <img src={headingpicture}></img>
                        </div>
                        <div className={departmentCss.searchIconMain}><a href='#'><i className="ri-search-line"></i></a></div>
                    </div>
                </div>
                <div className={`row gx-0 ${departmentCss.myDepartmentMain}`}>
                    <DepartmentComponent></DepartmentComponent>
                    <DepartmentComponent></DepartmentComponent>
                    <DepartmentComponent></DepartmentComponent>
                </div>
        </div>
    </>
  )
}

export default myDepartment