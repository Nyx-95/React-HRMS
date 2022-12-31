import React, { useState } from 'react'
import creatUserCss from "./createNewUser.module.css"
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"




const CreateNewUser = () => {

    /* User Registration */ 

    const [userRegistration, setUserRegistration] = useState(
        {
            userId : "",
            userName : "",
            userEmail : "",
            userPassword : "",
            userJoiningDate : "", 
            userDepartment:"GraphicMultimedia",
            userDesignation:"",
            userShift:"Morning"
        }
    );
    const getInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value)
        setUserRegistration({...userRegistration, [name]: value})
    }



    /* Form Submit */
   
    const formSubmit = (e) =>{
        e.preventDefault();
        
      
        const newUserRecord = {...userRegistration, profilePic}
        // setRecords([...records, newUserRecord]);
        console.log(newUserRecord)
      
    }

    
/* Profile Picture */

const [profilePic, setprofilePic] = useState();

const profilePicUploader = function () {
    document.getElementById('cnicFrontFileHiddenButton').click();
}
const profilePicGet = function (e) {

    setprofilePic(URL.createObjectURL(e.target.files[0]));
}
    return (
        <>
            <div className={`row ${creatUserCss.editProfileMain}`}>
                <div className={`row ${creatUserCss.headingMain}`}>
                    <div className={creatUserCss.headingInner}>
                        <div className={creatUserCss.headingWrapper}>
                            <h4> Create New User </h4>
                            <img src={headingpicture}></img>
                        </div>

                    </div>
                </div>
                <div className={`row gx-0 ${creatUserCss.editProfileMain}`}>
                    <form className={creatUserCss.editProfileInner} onSubmit={formSubmit}>

                        <div className={`row ${creatUserCss.editProfileDiv1}`}>

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label>Upload Photo</label> <br />
                                <div className={creatUserCss.uploadButtonDiv}>
                                    <button className={creatUserCss.uploadButton} onClick={profilePicUploader}>
                                        <i className="ri-upload-cloud-2-line"></i>
                                        <input type="file" id="cnicFrontFileHiddenButton" accept="image/*" onChange={profilePicGet} />
                                    </button>
                                </div>
                            </div>


                        </div>

                        <div className={`row ${creatUserCss.editProfileDiv1}`}>

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label>Array Digitals user ID</label> <br />
                                <input type="text" placeholder='12345' value={userRegistration.Id} autoComplete="off" onChange={getInput} name='userId'/>

                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label>User Name</label> <br />
                                <input type="text" placeholder='Sara' value={userRegistration.userName} autoComplete="off" onChange={getInput} name='userName'/>
                            </div>

                        </div>
                        <div className={`row ${creatUserCss.editProfileDiv1}`}>

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label>Array Digitals Email</label> <br />
                                <input type="text" placeholder='sara@legendesk.com' value={userRegistration.userEmail} autoComplete="off" onChange={getInput} name='userEmail'/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label>Account Password</label> <br />
                                <input type="password" placeholder='*****' value={userRegistration.userPassword} autoComplete="off" onChange={getInput} name='userPassword'/>
                            </div>

                        </div>
                        <div className={`row ${creatUserCss.editProfileDiv1}`}>

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label>Joining Date</label> <br />
                                <input type="date" className={creatUserCss.joiningDate} value={userRegistration.userJoiningDate} onChange={getInput} name='userJoiningDate'/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label>Department</label> <br />
                                <select className='userDepartment' value={userRegistration.userDepartment} onChange={getInput} name='userDepartment'>
                                    <option  value="GraphicMultimedia">Graphic & Multimedia</option>
                                    <option value="SoftwareEngineer">Software Engineer</option>
                                </select>
                            </div>

                        </div>
                        <div className={`row ${creatUserCss.editProfileDiv1}`}>

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label>Designation</label> <br />
                                <input type="text" placeholder='12345' autoComplete="off"  value={userRegistration.userDesignation} onChange={getInput} name='userDesignation'/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label>Shift</label> <br />
                                <select className='shift' value={userRegistration.userShift} onChange={getInput} name='userShift'>
                                    <option value="Morning">Morning (9Am - 5Pm)</option>
                                    <option value="Night">Night (5Am - 2Pm)</option>
                                </select>
                            </div>

                        </div>

                        <div className={`row ${creatUserCss.editProfileDiv4}`}>
                            <div className={`col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ${creatUserCss.editProfileDiv4Inner2}`}>
                                <button className='btn btn-primary formBackButton' type='submit' > Submit </button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateNewUser