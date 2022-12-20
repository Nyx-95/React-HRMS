import React from 'react'
import myDocumentCss from "./myDocument.module.css"
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"
import { useState } from 'react'




const MyDocument = () => {
    const [cnicFrontfile, setcnicFrontfile] = useState();
    const [cnicBackFile, setcnicBackFile] = useState();
    const [resumeFile, setresumeFile] = useState();
    const [expCertificateFile, setExpCertificateFile] = useState();
    const [degreeFile, setdegreeFile] = useState();
    const [marriageCertificateFile, setmarriageCertificateFile] = useState();
    const [birthForm, setbirthForm] = useState();

    /* Cnic Front File Upload */

    const cnicFrontFileUploader = function () {
        document.getElementById('cnicFrontFileHiddenButton').click();
    }
    const cnicFrontGet = function (e) {
        console.log(e.target.files);
        setcnicFrontfile(URL.createObjectURL(e.target.files[0]));
    }

    /* Cnic Back File Upload */

    const cnicBackFileUploader = function () {
        document.getElementById('cnicBackFileHiddenButton').click();
    }
    const cnicBackGet = function (e) {

        setcnicBackFile(URL.createObjectURL(e.target.files[0]));
    }

    /* Resume File Upload */

    const resumeUploader = function () {
        document.getElementById('resumeHiddenButton').click();
    }
    const resumeGet = function (e) {

        setresumeFile(URL.createObjectURL(e.target.files[0]));
    }

    /* Experience Certificate Upload */


    const expCertificateUploader = function () {
        document.getElementById('expCertificateHiddenButton').click();
    }
    const expCertificateGet = function (e) {

        setExpCertificateFile(URL.createObjectURL(e.target.files[0]));
    }

    /* Degree File Upload */

    const degreeUploader = function () {
        document.getElementById('degreeHiddenButton').click();
    }
    const degreeGet = function (e) {

        setdegreeFile(URL.createObjectURL(e.target.files[0]));
    }

    /* Marriage Certificate Upload */

    const marriageCertificateUploader = function () {
        document.getElementById('marriageCertificateHiddenButton').click();
    }
    const marriageCertificateGet = function (e) {
        setmarriageCertificateFile(URL.createObjectURL(e.target.files[0]));
    }

    /* Birth Form Upload */

    const birthFormUploader = function () {
        document.getElementById('birthFormHiddenButton').click();
    }
    const birthFormGet = function (e) {

        setbirthForm(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <>
            <div className={`row ${myDocumentCss.editProfileMain}`}>
                <div className={`row ${myDocumentCss.headingMain}`}>
                    <div className={myDocumentCss.headingInner}>
                        <div className={myDocumentCss.headingWrapper}>
                            <h4> My Document</h4>
                            <img src={headingpicture}></img>
                        </div>
                    </div>
                </div>
                <div className={`row gx-0 ${myDocumentCss.editProfileMain}`}>
                    <div className={myDocumentCss.editProfileInner}>

                        <div className={`row ${myDocumentCss.editProfileDiv1}`}>
                        </div>
                        <div className={`row ${myDocumentCss.editProfileDiv1}`}>

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label>CNIC Front Picture</label> <br />
                                <div className={myDocumentCss.uploadPic}>

                                {cnicFrontfile ? <img id={myDocumentCss.documentImage} src={cnicFrontfile} alt="Cnic Front Copy" data-toggle="modal" data-target="#cnicFrontImage" />: <label>Upload CNIC Front Picture</label> }
                                    <div className="modal fade" id="cnicFrontImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                           
                                            <img className={myDocumentCss.modalImage} src={cnicFrontfile} alt="Cnic Front Copy" />
                                           
                                        </div>
                                    </div>

                                    <button className={myDocumentCss.uploadButton} onClick={cnicFrontFileUploader}>
                                        <i className="ri-attachment-2"></i>
                                    </button>
                                    <input type="file" id="cnicFrontFileHiddenButton" accept="image/*" onChange={cnicFrontGet} />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label>CNIC Back picture</label> <br />
                                <div className={myDocumentCss.uploadPic}>
                               
                                {cnicBackFile ?  <img id={myDocumentCss.documentImage} src={cnicBackFile} alt="Cnic Back Copy" data-toggle="modal" data-target="#cnicBackImage" /> : <label> Upload CNIC Back Picture</label> }
                            
                                    <div className="modal fade" id="cnicBackImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                          <img className={myDocumentCss.modalImage} src={cnicBackFile} alt="Cnic Front Copy" />
                                           
                                        </div>
                                    </div>

                                    <button className={myDocumentCss.uploadButton} onClick={cnicBackFileUploader}>
                                        <i className="ri-attachment-2"></i>
                                    </button>
                                    <input type="file" id="cnicBackFileHiddenButton" accept="image/*" onChange={cnicBackGet} />
                                </div>
                            </div>

                        </div>
                        <div className={`row ${myDocumentCss.editProfileDiv1}`}>

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label>Upload Resume</label> <br />
                                <div className={myDocumentCss.uploadPic}>
                                    {
                                        resumeFile ?  <img id={myDocumentCss.documentImage} src={resumeFile} alt="Cnic Front Copy" data-toggle="modal" data-target="#ResumeImage" /> : <label> Upload Resume Picture</label>
                                    }
                                   
                                    <div className="modal fade" id="ResumeImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <img className={myDocumentCss.modalImage} src={resumeFile} alt="Cnic Front Copy" />
                                        </div>
                                    </div>
                                    <button className={myDocumentCss.uploadButton} onClick={resumeUploader}>
                                        <i className="ri-attachment-2"></i>
                                    </button>
                                    <input type="file" id="resumeHiddenButton" accept="image/*" onChange={resumeGet} />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label>Experience Certificate</label> <br />
                                <div className={myDocumentCss.uploadPic}>
                                    { expCertificateFile ?    <img id={myDocumentCss.documentImage} src={expCertificateFile} alt="Cnic Back Copy" data-toggle="modal" data-target="#expCertificateImage" /> : <label> Upload Experience Certificate </label> }
                                 

                                    <div className="modal fade" id="expCertificateImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <img className={myDocumentCss.modalImage} src={expCertificateFile} alt="Cnic Front Copy" />
                                        </div>
                                    </div>
                                    <button className={myDocumentCss.uploadButton} onClick={expCertificateUploader}>
                                        <i className="ri-attachment-2"></i>
                                    </button>
                                    <input type="file" id="expCertificateHiddenButton" accept="image/*" onChange={expCertificateGet} />
                                </div>
                            </div>

                        </div>
                        <div className={`row ${myDocumentCss.editProfileDiv1}`}>

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label>Degree / Transcript</label> <br />
                                <div className={myDocumentCss.uploadPic}>
                                    {
                                        degreeFile ? <img id={myDocumentCss.documentImage} src={degreeFile} alt="Cnic Front Copy" data-toggle="modal" data-target="#DegreeImage" /> : <label> Uploade Degree </label>
                                    }
                                    
                                    <div className="modal fade" id="DegreeImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <img className={myDocumentCss.modalImage} src={degreeFile} alt="Cnic Front Copy" />
                                        </div>
                                    </div>

                                    <button className={myDocumentCss.uploadButton} onClick={degreeUploader}>
                                        <i className="ri-attachment-2"></i>
                                    </button>
                                    <input type="file" id="degreeHiddenButton" accept="image/*" onChange={degreeGet} />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label>Experience Certificate</label> <br />
                                <div className={myDocumentCss.uploadPic}>
                                    {
                                        marriageCertificateFile ?  <img id={myDocumentCss.documentImage} src={marriageCertificateFile} alt="Cnic Back Copy" data-toggle="modal" data-target="#marriageCertificateImage" /> : <label>Upload Marriage Certificate</label>
                                    }
                                   

                                    <div className="modal fade" id="marriageCertificateImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <img className={myDocumentCss.modalImage} src={marriageCertificateFile} alt="Cnic Front Copy" />
                                        </div>
                                    </div>
                                    <button className={myDocumentCss.uploadButton} onClick={marriageCertificateUploader}>
                                        <i className="ri-attachment-2"></i>
                                    </button>
                                    <input type="file" id="marriageCertificateHiddenButton" accept="image/*" onChange={marriageCertificateGet} />
                                </div>
                            </div>

                        </div>
                        <div className={`row ${myDocumentCss.editProfileDiv1}`}>

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label>B-Form/Birth Certificates of children</label> <br />
                                <div className={myDocumentCss.uploadPic}>
                                    {
                                        birthForm ?   <img id={myDocumentCss.documentImage} src={birthForm} alt="Cnic Front Copy" data-toggle="modal" data-target="#birthFormImage" /> : <label>Upload Birth form</label>
                                    }
                                  
                                    <div className="modal fade" id="birthFormImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <img className={myDocumentCss.modalImage} src={birthForm} alt="Cnic Front Copy" />
                                        </div>
                                    </div>

                                    <button className={myDocumentCss.uploadButton} onClick={birthFormUploader}>
                                        <i className="ri-attachment-2"></i>
                                    </button>
                                    <input type="file" id="birthFormHiddenButton" accept="image/*" onChange={birthFormGet} />
                                </div>
                            </div>


                        </div>
                        <div className={`row ${myDocumentCss.editProfileDiv4}`}>
                            <div className={`col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ${myDocumentCss.editProfileDiv4Inner1}`}>
                                <button className='btn btn-primary formBackButton'> Submit </button>
                            </div>
                            
                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}

export default MyDocument