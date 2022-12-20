import React from 'react'
import myDataCss from "./myData.module.css"
import MyDataProfilePic from "../../../assets/myDataPicture.png"
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"

const MyData = () => {
    return (
        <>
            <div className={`row ${myDataCss.myDataMain}`}>
                <div className={`row ${myDataCss.headingMain}`}>
                    <div className={`row ${myDataCss.headingInner}`}>
                        <div className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ${myDataCss.headingWrapper}`}>
                            <h4> John Albert</h4>
                            <img src={headingpicture}></img>
                        </div>
                    </div>
                </div>
                <div className={`row ${myDataCss.myDataBody}`}>
                    <div className={`row ${myDataCss.myDataBodyInner}`}>
                        <div className={`row ${myDataCss.myDataBodyFirstRow}`}>
                            <div className='col-12 col-sm-12 col-lg-3 col-xl-3'>
                                <div className={myDataCss.myDataPic}>
                                    <img src={MyDataProfilePic}></img>
                                </div>
                            </div>
                            <div className='col-12 col-sm-12 col-lg-9 col-xl-9'>
                                <div className={myDataCss.myDataInfo}>
                                    <div className="row">
                                        <div className={`col-12 col-sm-12  col-lg-4 col-xl-4 ${myDataCss.myDataInfo}`}><label>Full Name</label><p>John Albert</p></div>
                                        <div className="col-12  col-sm-12 col-lg-4 col-xl-4"><label>Designation</label><p>Sr. Manager Ecommerce</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Date of Joining</label><p>04-05-2022</p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Email</label><p>Johnalbert@mail.com</p></div>
                                        <div className="col-12  col-sm-12 col-lg-4 col-xl-4"><label>Date of Birth</label><p>04-05-1999</p></div>
                                        <div className="col-12  col-sm-12 col-lg-4 col-xl-4"><label>Bank Name</label><p>John Albert</p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>CNIC</label><p>4130350987422</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Contact Number</label><p>02623498542</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Account Number</label><p>4551654-123132</p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Gender</label><p>Male</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Father name</label><p>Steve Albert</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Address</label><p>abc street, Block 4D lorem lypsum, new york</p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Department</label><p>IBU</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Shift</label><p>Morning B</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Timing</label><p>09Am To 05Pm</p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>RA</label><p>Ash</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Status</label><p>Permanent</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Type</label><p>Full Time</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className={`row ${myDataCss.myDataBodyFirstRow}`}>
                            <div className='col-lg-3 col-xl-3'>

                            </div>
                            <div className='col-lg-9 col-xl-9'>
                                <div className={myDataCss.myDataInfo}>
                                    <div className="row">
                                        <div className={`col-lg-12 col-xl-12 ${myDataCss.subHeadingWrapper}`}>
                                            <h4> Family Details</h4>
                                            <img src={headingpicture}></img>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Full Name</label><p>John Albert</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Designation</label><p>Sr. Manager Ecommerce</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Date of Joining</label><p>04-05-2022</p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Email</label><p>Johnalbert@mail.com</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Date of Birth</label><p>04-05-1999</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Bank Name</label><p>John Albert</p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>CNIC</label><p>4130350987422</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Contact Number</label><p>02623498542</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Account Number</label><p>4551654-123132</p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Gender</label><p>Male</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Father name</label><p>Steve Albert</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Address</label><p>abc street, Block 4D lorem lypsum, new york</p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Department</label><p>IBU</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Shift</label><p>Morning B</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Timing</label><p>09Am To 05Pm</p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>RA</label><p>Ash</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Status</label><p>Permanent</p></div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Type</label><p>Full Time</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MyData
