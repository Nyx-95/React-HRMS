import React from 'react'
import previousWorkCss from "../previousWork.module.css"

const previousComponent = () => {
    return (
        <>
            <div className={previousWorkCss.editProfileInner}>

                <div className={`row ${previousWorkCss.editProfileDiv1}`}>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label>Previous Company Name</label> <br />
                        <input type="text" placeholder='Sybrid Pvt Limited' />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label>Service Duration</label> <br />
                        <input type="text" placeholder='9 years' />
                    </div>

                </div>
                <div className={`row ${previousWorkCss.editProfileDiv1}`}>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label>Department</label> <br />
                        <input type="text" placeholder='Training & Development' />

                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label>Designation</label> <br />
                        <input type="text" placeholder='Training & Development Specialist' />
                    </div>

                </div>
               
            </div>
        </>
    )
}

export default previousComponent