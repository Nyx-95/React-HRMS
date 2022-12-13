import React from 'react'
import editProfileCss from "./editprofile.module.css"

import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"

const editProfile = () => {
  return (
    <>
         <div className={`row ${editProfileCss.editProfileMain}`}> 
                <div className={`row ${editProfileCss.headingMain}`}>
                    <div className={editProfileCss.headingInner}> 
                        <div className={editProfileCss.headingWrapper}>
                            <h4> Family Details </h4>
                            <img src={headingpicture}></img>
                        </div>
                        <div className={editProfileCss.searchIconMain}><a href='#'><i className="ri-search-line"></i></a></div>
                    </div>
                </div>
                <div className={`row gx-0 ${editProfileCss.myDepartmentMain}`}>
                   
                </div>
        </div>
    </>
  )
}

export default editProfile