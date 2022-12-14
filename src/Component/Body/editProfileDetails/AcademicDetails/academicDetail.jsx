import React from 'react'
import editProfileCss from "./academicDetail.module.css"
import headingpicture from "../../../../assets/AllUserbankDetails/headingLinePicture.png"

const AcademicDetail = () => {
  return (
    <>
      <div className={`row ${editProfileCss.editProfileMain}`}>
        <div className={`row ${editProfileCss.headingMain}`}>
          <div className={editProfileCss.headingInner}>
            <div className={editProfileCss.headingWrapper}>
              <h4> Academic Details (Last 2 Qualifications)</h4>
              <img src={headingpicture}></img>
            </div>
          </div>
        </div>
        <div className={`row gx-0 ${editProfileCss.editProfileMain}`}>
          <div className={editProfileCss.editProfileInner}>
                <div className={`row ${editProfileCss.editProfileDiv1}`}>
                    <h3>Qualification 1</h3>
                </div>
                <div className={`row ${editProfileCss.editProfileDiv1}`}>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label>Institute Name</label> <br />
                        <input type="text" placeholder='Federal Urdu University' />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label>Degree Title</label> <br />
                        <input type="text" placeholder='BBA' />
                    </div>

                </div>
                <div className={`row ${editProfileCss.editProfileDiv1}`}>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label>Degree Type</label> <br />
                        <input type="text" placeholder='Bachelor' />

                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label>Year of Passing</label> <br />
                        <input type="text" placeholder='2018' />
                    </div>

                </div>
                <div className={`row ${editProfileCss.editProfileDiv1}`}>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label>CGPA</label> <br />
                        <input type="text" placeholder='HR' />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label>Degree Majors</label> <br />
                        <input type="text" placeholder='HR' />
                    </div>

                </div>
          </div>
          <div className={editProfileCss.editProfileInner}>
                <div className={`row ${editProfileCss.editProfileDiv1}`}>
                    <h3>Qualification 2</h3>
                </div>
                <div className={`row ${editProfileCss.editProfileDiv1}`}>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label>Institute Name</label> <br />
                        <input type="text" placeholder='Federal Urdu University' />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label>Degree Title</label> <br />
                        <input type="text" placeholder='BBA' />
                    </div>

                </div>
                <div className={`row ${editProfileCss.editProfileDiv1}`}>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label>Degree Type</label> <br />
                        <input type="text" placeholder='Bachelor' />

                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label>Year of Passing</label> <br />
                        <input type="text" placeholder='2018' />
                    </div>

                </div>
                <div className={`row ${editProfileCss.editProfileDiv1}`}>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label>CGPA</label> <br />
                        <input type="text" placeholder='HR' />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label>Degree Majors</label> <br />
                        <input type="text" placeholder='HR' />
                    </div>

                </div>
          </div>
        </div>
        <div className={`row ${editProfileCss.editProfileDiv4}`}>
              <div className={`col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ${editProfileCss.editProfileDiv4Inner1}`}>
                <button className='btn btn-primary formBackButton'> Back </button>
              </div>
              <div className={`col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ${editProfileCss.editProfileDiv4Inner2}`}>
                <button className='btn btn-primary formBackButton'> Next </button>
              </div>
            </div>
      </div>
    </>
  )
}

export default AcademicDetail