import React from 'react'
import editProfileCss from "./familyDetail.module.css"

import headingpicture from "../../../../assets/AllUserbankDetails/headingLinePicture.png"

const FamilyDetail = () => {
  return (
    <>
      <div className={`row ${editProfileCss.editProfileMain}`}>
        <div className={`row ${editProfileCss.headingMain}`}>
          <div className={editProfileCss.headingInner}>
            <div className={editProfileCss.headingWrapper}>
              <h4> Family Details </h4>
              <img src={headingpicture}></img>
            </div>
           
          </div>
        </div>
        <div className={`row gx-0 ${editProfileCss.editProfileMain}`}>
          <div className={editProfileCss.editProfileInner}>

          <div className={`row ${editProfileCss.editProfileDiv1}`}>
          
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <label>Martial Status</label> <br />
                  <select className='martialStatus'>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                  </select>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <label>Spouse Name</label> <br />
                  <input type="text" placeholder='Sara' />
                </div>
       
            </div>
            <div className={`row ${editProfileCss.editProfileDiv1}`}>
            
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <label>Spouse Date of Birth</label> <br />
                  <input type="date" />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <label>Date of Marriage</label> <br />
                  <input type="date" />
                </div>
          
            </div>
            <div className={`row ${editProfileCss.editProfileDiv1}`}>
            
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <label>Personal Email Address</label> <br />
                  <input type="text" placeholder='sara@legendesk.com' />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <label>Date of Birth</label> <br />
                  <input type="date" />
                </div>
             
            </div>
            <div className={`row ${editProfileCss.editProfileDiv1}`}>
             
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <label>Place Of Birth (Country)</label> <br />
                  <input type="text" placeholder='Russia' />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <label>Gender</label> <br />
                  <select className='genderSelect'>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
             
            </div>
            <div className={`row ${editProfileCss.editProfileDiv1}`}>
            
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <label>Religion</label> <br />
                  <select className='religion'>
                    <option value="Islam">Islam</option>
                    <option value="Christian">Christian</option>
                    <option value="Hindu">Hindu</option>
                  </select>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <label>Nationality</label><br/>
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
            <div className={`row ${editProfileCss.editProfileDiv2}`}>
         
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <label>Residential Address</label> <br />
                  <input type="text" placeholder='Enter Residential Address' />
                </div>
         
            </div>
            <div className={`row ${editProfileCss.editProfileDiv2}`}>
          
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <label>Permanent Address</label> <br />
                  <input type="text" placeholder='Enter Permanent Address' />
                </div>
         
            </div>
            <div className={`row ${editProfileCss.editProfileDiv3}`}>
          
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <label>CNIC #</label> <br />
                  <input type="text" placeholder='4976323575442' />
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <label>CNIC Issue Date</label> <br />
                  <input type="date" />
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <label>CNIC Expiry Date</label> <br />
                  <input type="date" />
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
        </div>
      </div>
    </>
  )
}

export default FamilyDetail