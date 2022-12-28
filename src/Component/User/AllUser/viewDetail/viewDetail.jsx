import React from 'react'
import viewDetailCss from './viewDetail.module.css'
import MyDataProfilePic from "../../../../assets/myDataPicture.png"
import headingpicture from "../../../../assets/AllUserbankDetails/headingLinePicture.png"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {ROUTES} from "../../../../Utils/routes"


const ViewDetail = () => {
    const [cnicFrontfile, setcnicFrontfile] = useState();
    const [cnicBackFile, setcnicBackFile] = useState();
    const [resumeFile, setresumeFile] = useState();
    const [expCertificateFile, setExpCertificateFile] = useState();
    const [degreeFile, setdegreeFile] = useState();
    const [marriageCertificateFile, setmarriageCertificateFile] = useState();
    const [birthForm, setbirthForm] = useState();
    const navigate = useNavigate();

    return (
        <>
            <div className={`row ${viewDetailCss.myDataMain}`}>
                <div className={`row ${viewDetailCss.headingMain}`}>
                    <div className={`row ${viewDetailCss.headingInner}`}>
                        <div className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ${viewDetailCss.headingWrapper}`}>
                            <h4> John Albert</h4>
                            <img src={headingpicture}></img>
                        </div>
                    </div>
                </div>
                <div className={`row ${viewDetailCss.myDataBody}`}>
                    <div className={`row ${viewDetailCss.myDataBodyInner}`}>
                        <div className={`row ${viewDetailCss.myDataBodyFirstRow}`}>
                            <div className='col-12 col-sm-12 col-lg-3 col-xl-3'>
                                <div className={viewDetailCss.myDataPic}>
                                    <img src={MyDataProfilePic}></img>
                                </div>
                            </div>
                            <div className='col-12 col-sm-12 col-lg-9 col-xl-9'>
                                <div className={viewDetailCss.myDataInfo}>
                                    <div className="row">
                                        <div className={`col-12 col-sm-12  col-lg-4 col-xl-4 ${viewDetailCss.myDataInfo}`}><label>Full Name</label><p>John Albert</p></div>
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
                        <div className={`row ${viewDetailCss.myDataBodyFirstRow}`}>
                            <div className='col-lg-3 col-xl-3'>

                            </div>
                            <div className='col-lg-9 col-xl-9'>
                                <div className={viewDetailCss.myDataInfo}>
                                    <div className="row">
                                        <div className={`col-lg-12 col-xl-12 ${viewDetailCss.subHeadingWrapper}`}>
                                            <h4> Documents</h4>
                                            <img src={headingpicture}></img>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>CNIC Front Picture</label>
                                            <div className={viewDetailCss.documentInner}>
                                                {cnicFrontfile ? <img id={viewDetailCss.documentImage} src={cnicFrontfile} alt="Cnic Front Copy" data-toggle="modal" data-target="#cnicFrontImage" /> : <label>Upload CNIC Front Picture</label>}
                                                <div className="modal fade" id="cnicFrontImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered" role="document">

                                                        <img className={viewDetailCss.modalImage} src={cnicFrontfile} alt="Cnic Front Copy" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>CNIC Back Picture</label>
                                            <div className={viewDetailCss.documentInner}>
                                                {cnicBackFile ? <img id={viewDetailCss.documentImage} src={cnicBackFile} alt="Cnic Back Copy" data-toggle="modal" data-target="#cnicBackImage" /> : <label> Upload CNIC Back Picture</label>}

                                                <div className="modal fade" id="cnicBackImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                                        <img className={viewDetailCss.modalImage} src={cnicBackFile} alt="Cnic Front Copy" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Upload Resume</label>
                                            <div className={viewDetailCss.documentInner}>
                                                {
                                                    resumeFile ? <img id={viewDetailCss.documentImage} src={resumeFile} alt="Cnic Front Copy" data-toggle="modal" data-target="#ResumeImage" /> : <label> Upload Resume Picture</label>
                                                }

                                                <div className="modal fade" id="ResumeImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                                        <img className={viewDetailCss.modalImage} src={resumeFile} alt="Cnic Front Copy" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Experience Certificate</label>
                                            <div className={viewDetailCss.documentInner}>
                                                {expCertificateFile ? <img id={viewDetailCss.documentImage} src={expCertificateFile} alt="Cnic Back Copy" data-toggle="modal" data-target="#expCertificateImage" /> : <label> Upload Experience Certificate </label>}


                                                <div className="modal fade" id="expCertificateImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                                        <img className={viewDetailCss.modalImage} src={expCertificateFile} alt="Cnic Front Copy" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Degree </label>
                                            <div className={viewDetailCss.documentInner}>
                                                {
                                                    degreeFile ? <img id={viewDetailCss.documentImage} src={degreeFile} alt="Cnic Front Copy" data-toggle="modal" data-target="#DegreeImage" /> : <label> Uploade Degree </label>
                                                }

                                                <div className="modal fade" id="DegreeImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                                        <img className={viewDetailCss.modalImage} src={degreeFile} alt="Cnic Front Copy" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>Marriage Certificate</label>
                                            <div className={viewDetailCss.documentInner}>
                                                {
                                                    marriageCertificateFile ? <img id={viewDetailCss.documentImage} src={marriageCertificateFile} alt="Cnic Back Copy" data-toggle="modal" data-target="#marriageCertificateImage" /> : <label>Upload Marriage Certificate</label>
                                                }


                                                <div className="modal fade" id="marriageCertificateImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                                        <img className={viewDetailCss.modalImage} src={marriageCertificateFile} alt="Cnic Front Copy" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4"><label>B-Form/BirthCertificate</label>
                                            <div className={viewDetailCss.documentInner}>
                                                {
                                                    birthForm ? <img id={viewDetailCss.documentImage} src={birthForm} alt="Cnic Front Copy" data-toggle="modal" data-target="#birthFormImage" /> : <label>Upload Birth form</label>
                                                }

                                                <div className="modal fade" id="birthFormImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                                        <img className={viewDetailCss.modalImage} src={birthForm} alt="Cnic Front Copy" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className={`row ${viewDetailCss.myDataBodyFirstRow}`}>
                            <div className='col-lg-3 col-xl-3'>
                            <button className='btn btn-primary formBackButton' onClick={()=>navigate(ROUTES.ALL_USER)}> Back </button>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </>
    )
}

export default ViewDetail