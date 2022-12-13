import React from 'react'
import DepartmentComponentCss from "./departmentComponent.module.css"
import componentProfilePic from "../../../../assets/lowerseconddivprofilepic.png"

const departmentComponent = () => {
    return (
        <>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                <div className={DepartmentComponentCss.componentMain}>
                    <div className={DepartmentComponentCss.componentMainInner}>
                        <div className={DepartmentComponentCss.componentPicture}>
                            <img src={componentProfilePic} />
                        </div>
                        <div className={DepartmentComponentCss.componentInfo}>
                            <h6>Affan Mehmood</h6>
                            <p>Sr.Manager-Ecommerce</p>
                        </div>
                    </div>
                    <div className={DepartmentComponentCss.componentMainLowerInner}>

                        <div className={DepartmentComponentCss.firstLowerDiv}>
                            <h6>
                                Email:
                            </h6>
                            <label>
                                mehwish.osmani@legendesk.com
                            </label>
                        </div>
                        <div className={DepartmentComponentCss.secondLowerDiv}>
                            <div className={DepartmentComponentCss.secondLowerDiv1}>
                                <h6>
                                    Shift:
                                </h6>
                                <label>
                                    Morning Bi
                                </label>
                            </div>
                            <div className={DepartmentComponentCss.secondLowerDiv2}>
                                <h6>
                                    Status:
                                </h6>
                                <label>
                                    Permanent
                                </label>
                            </div>
                        </div>
                        <div className={DepartmentComponentCss.thirdLowerDiv}>
                            <label>
                                2 Year 2 Months 13 Days (Permanent)
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default departmentComponent