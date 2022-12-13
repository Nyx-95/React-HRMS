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
        <div className={`row gx-0 ${editProfileCss.editProfileMain}`}>
          <div className={editProfileCss.editProfileInner}>
            <div className={editProfileCss.editProfileDiv1}>
              <div className="col-xl-6">
                <label>Martial Status</label> <br />
                <input />
              </div>
              <div className="col-xl-6">
                <label>Spouse Name</label> <br />
                <input />
              </div>

            </div>
            <div className={editProfileCss.editProfileDiv1}>
              <div className="col-xl-6">
                <label>Spouse Date of Birth</label> <br />
                <input type="date" />
              </div>
              <div className="col-xl-6">
                <label>Date of Marriage</label> <br />
                <input type="date" />
              </div>

            </div>
            <div className={editProfileCss.editProfileDiv1}>
              <div className="col-xl-6">
                <label>Personal Email Address</label> <br />
                <input />
              </div>
              <div className="col-xl-6">
                <label>Date of Birth</label> <br />
                <input type="date" />
              </div>

            </div>
            <div className={editProfileCss.editProfileDiv1}>
              <div className="col-xl-6">
                <label>Place Of Birth (Country)</label> <br />
                <input />
              </div>
              <div className="col-xl-6">
                <label>Gender</label> <br />
                <select className='genderSelect'>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

            </div>
            <div className={editProfileCss.editProfileDiv1}>
              <div className="col-xl-6">
                <label>Religion</label> <br />
                <input />
              </div>
              <div className="col-xl-6">
                <label>Nationality</label> <br />
                <select className='countrySelect'>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Germany">Germany</option>
                  <option value="Canada">Canada</option>
                  <option value="USA">USA</option>
                  <option value="Algeria">Algeria</option>
                  <option value="India">India</option>
                  <option value="China">China</option>
                  <option value="China">Afghanistan</option>
                  <option value="China">Iran</option>
                </select>
              </div>
            </div>
            <div className={editProfileCss.editProfileDiv2}>
              <div className="col-xl-12">
                <label>Residential Address</label> <br />
                <input />
              </div>
            </div>
            <div className={editProfileCss.editProfileDiv2}>
              <div className="col-xl-12">
                <label>Permanent Address</label> <br />
                <input />
              </div>
            </div>
            <div className={editProfileCss.editProfileDiv3}>
              <div className="col-xl-4">
                <label>CNIC # (without dashes)</label> <br />
                <input />
              </div>
              <div className="col-xl-4">
                <label>CNIC Issue Date</label> <br />
                <input type="date" />
              </div>
              <div className="col-xl-4">
                <label>CNIC Expiry Date</label> <br />
                <input type="date" />
              </div>
            </div>
            <div className={editProfileCss.editProfileDiv4}>
              <button className='btn btn-primary'> Back </button>
              <button className='btn btn-primary'> Next </button>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default editProfile