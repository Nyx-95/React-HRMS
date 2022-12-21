import React from 'react'
import dashBoardCss from "../dashBoardMain.module.css"
import lowerProfilePic from '../../../../assets/lowerseconddivprofilepic.png'

const ProfileInfo = () => {
  return (
    <>
       <div className={dashBoardCss.secondlowerdiv}>
                  <div className={dashBoardCss.secondlowerouter}>
                    <div className={dashBoardCss.secondlowerinner}>
                      <div className={dashBoardCss.profilewrapper}>
                        <div className={dashBoardCss.profilebackground}></div>
                        <div className={dashBoardCss.profileouterdiv}>
                          <div className={dashBoardCss.secondlowerprofileicon}>
                            <img src={lowerProfilePic} />
                          </div>
                          <div className={dashBoardCss.profileinfo}>
                            <h5>S. Osama Ali</h5>
                            <p>Sr. UI/UX Designer</p>
                            <button type="button" className="btn btn-primary shadow-none">
                            Mark Break
                              </button>
                          </div>
                        </div>
                        <div className={dashBoardCss.profileschedulemain}>
                          <div className={dashBoardCss.profileschedulemainouter}>
                            <div className={dashBoardCss.profilescheduleinner}>
                              <ul>
                                <li><a href="#">
                                  <div className={dashBoardCss.profileschedulemenu}>
                                    <div className={dashBoardCss.profileschedulemenuicon}>
                                    <i className="ri-time-line"></i>
                                    </div>
                                    <div className={dashBoardCss.profileschedulemenutime}>
                                      <div className={dashBoardCss.profileschedulemenushift}>
                                        Shift
                                      </div>
                                      <div className={dashBoardCss.profileschedulemenuevening}>
                                        Evening
                                      </div>
                                    </div>
                                  </div>
                                </a></li>
                                <li><a href="#">
                                  <div className="d-flex">
                                    <div className={dashBoardCss.profileschedulemenuicon}>
                                        <i className="ri-bank-card-line"></i>
                                    </div>
                                    <div className={dashBoardCss.profileschedulemenutime}>
                                      <div className={dashBoardCss.profileschedulemenushift}>
                                        Employee
                                        ID</div>
                                      <div className={dashBoardCss.profileschedulemenuevening}>
                                        15333
                                      </div>
                                    </div>
                                  </div>
                                </a></li>
                                <li><a href="#">
                                  <div className="d-flex">
                                    <div className={dashBoardCss.profileschedulemenuicon}>
                                    <i className="ri-calendar-line"></i>
                                    </div>
                                    <div className={dashBoardCss.profileschedulemenutime}>
                                      <div className={dashBoardCss.profileschedulemenushift}>
                                        Date of
                                        Joining</div>
                                      <div className={dashBoardCss.profileschedulemenuevening}>
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