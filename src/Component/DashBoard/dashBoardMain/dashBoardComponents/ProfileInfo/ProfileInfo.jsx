import React from 'react'
import profileInfoCss from "./ProfileInfo.module.css"
import lowerProfilePic from '../../../../../assets/lowerseconddivprofilepic.png'

const ProfileInfo = () => {
  return (
    <>
       <div className={profileInfoCss.secondlowerdiv}>
                  <div className={profileInfoCss.secondlowerouter}>
                    <div className={profileInfoCss.secondlowerinner}>
                      <div className={profileInfoCss.profilewrapper}>
                        <div className={profileInfoCss.profilebackground}></div>
                        <div className={profileInfoCss.profileouterdiv}>
                          <div className={profileInfoCss.secondlowerprofileicon}>
                            <img src={lowerProfilePic} />
                          </div>
                          <div className={profileInfoCss.profileinfo}>
                            <h5>S. Osama Ali</h5>
                            <p>Sr. UI/UX Designer</p>
                            <button type="button" className="btn btn-primary shadow-none">
                            Mark Break
                              </button>
                          </div>
                        </div>
                        <div className={profileInfoCss.profileschedulemain}>
                          <div className={profileInfoCss.profileschedulemainouter}>
                            <div className={profileInfoCss.profilescheduleinner}>
                              <ul>
                                <li><a href="#">
                                  <div className={profileInfoCss.profileschedulemenu}>
                                    <div className={profileInfoCss.profileschedulemenuicon}>
                                    <i className="ri-time-line"></i>
                                    </div>
                                    <div className={profileInfoCss.profileschedulemenutime}>
                                      <div className={profileInfoCss.profileschedulemenushift}>
                                        Shift
                                      </div>
                                      <div className={profileInfoCss.profileschedulemenuevening}>
                                        Evening
                                      </div>
                                    </div>
                                  </div>
                                </a></li>
                                <li><a href="#">
                                  <div className="d-flex">
                                    <div className={profileInfoCss.profileschedulemenuicon}>
                                        <i className="ri-bank-card-line"></i>
                                    </div>
                                    <div className={profileInfoCss.profileschedulemenutime}>
                                      <div className={profileInfoCss.profileschedulemenushift}>
                                        Employee
                                        ID</div>
                                      <div className={profileInfoCss.profileschedulemenuevening}>
                                        15333
                                      </div>
                                    </div>
                                  </div>
                                </a></li>
                                <li><a href="#">
                                  <div className="d-flex">
                                    <div className={profileInfoCss.profileschedulemenuicon}>
                                    <i className="ri-calendar-line"></i>
                                    </div>
                                    <div className={profileInfoCss.profileschedulemenutime}>
                                      <div className={profileInfoCss.profileschedulemenushift}>
                                        Date of
                                        Joining</div>
                                      <div className={profileInfoCss.profileschedulemenuevening}>
                                        04-02-2022</div>
                                    </div>
                                  </div>
                                </a></li>

                              </ul>
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

export default ProfileInfo