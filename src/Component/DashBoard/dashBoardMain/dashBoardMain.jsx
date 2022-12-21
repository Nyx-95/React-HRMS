import React from 'react'
import dashBoardCss from "./dashBoardMain.module.css"


import heading from '../../../assets/heading lines.png'

import MainFirstComponent from './dashBoardComponents/MainFirstComponent'
import NotificationBoard from './dashBoardComponents/NotificationBoard'
import WorkPlaces from './dashBoardComponents/WorkPlaces'
import Ticketing from './dashBoardComponents/Ticketing'
import GeneralQueries from './dashBoardComponents/GeneralQueries'
import ProfileInfo from './dashBoardComponents/ProfileInfo'
import TimeTracking from './dashBoardComponents/TimeTracking'

const dashBoardMain = () => {

 

  return (
    <>
      <div className={dashBoardCss.middlemenu}>
        <div className=" row">
          <div className={dashBoardCss.upper}>
            <div className="row">
              <div className="col-lg-4 col-xl-4">
                <MainFirstComponent></MainFirstComponent>
              </div>
              <div className="col-lg-5 col-xl-5">
                <div className={dashBoardCss.secondupperdiv}>
                  <NotificationBoard></NotificationBoard>
                  <WorkPlaces></WorkPlaces>
                </div>
              </div>
              <div className="col-lg-3 col-xl-3">
                <Ticketing></Ticketing>
              </div>

            </div>
          </div>
        </div>
        <div className="row">
          <div className={dashBoardCss.lower}>
            <div className="row">
              <div className="col-lg-3 col-xl-3">
                <GeneralQueries></GeneralQueries>
              </div>
              <div className="col-lg-3 col-xl-3">
                <ProfileInfo></ProfileInfo>
              </div>
              <div className="col-lg-3 col-xl-3">
               
              <TimeTracking></TimeTracking>

              </div>
              <div className="col-lg-3 col-xl-3">
                <div className={dashBoardCss.fourthlowerdiv}>
                  <div className={dashBoardCss.Employee}>
                    <div className={dashBoardCss.Employeeouter}>
                      <div className={dashBoardCss.Employeeinner}>
                        <div className={dashBoardCss.Employeewrapper}>
                          <div className={dashBoardCss.mergeheadings}>
                            <div className={dashBoardCss.mergeheadinginner}>
                              <h5>Employees</h5>
                              <i className="fa-solid fa-ellipsis"></i>
                            </div>
                            <img src="./assets/heading lines.png" alt="heading"></img>
                          </div>
                          <div className="btn-group" id={dashBoardCss.buttonGroupLfourdiv} role="group"
                            aria-label="Basic example">
                            <button type="button" className="btn btn-primary">My
                              Team</button>
                            <button type="button" className="btn btn-primary">All
                              Users</button>
                          </div>
                          <div className={dashBoardCss.employeelistouter}>
                            <div className={dashBoardCss.employeelistinner}>
                              <div className={dashBoardCss.employeelisting}>
                                <ul>
                                  <li>
                                    <div className={dashBoardCss.employeeprofilestatus}>
                                      <div className={dashBoardCss.employeeprofileinner}>
                                        <div className={dashBoardCss.employeeprofilepicture}>
                                          <img
                                            src="./assets/employeediv1profileicon.png" />
                                        </div>
                                        <div>
                                          <div className={dashBoardCss.employenamediv}>
                                            <p>Hassan</p>
                                          </div>
                                          <div>
                                            online status
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className={dashBoardCss.employeeprofilestatus}>
                                      <div className={dashBoardCss.employeeprofileinner}>
                                        <div className={dashBoardCss.employeeprofilepicture}>
                                          <img
                                            src="./assets/employeediv2profileicon.png" />
                                        </div>
                                        <div>
                                          <div className={dashBoardCss.employenamediv}>
                                            <p>Hassan Jawad</p>
                                          </div>
                                          <div>
                                            online status
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className={dashBoardCss.employeeprofilestatus}>
                                      <div className={dashBoardCss.employeeprofileinner}>
                                        <div className={dashBoardCss.employeeprofilepicture}>
                                          <img
                                            src="./assets/employeediv3profileicon.png" />
                                        </div>
                                        <div>
                                          <div className={dashBoardCss.employenamediv}>
                                            <p>Rehan</p>
                                          </div>
                                          <div>
                                            online status
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className={dashBoardCss.employeeprofilestatus}>
                                      <div className={dashBoardCss.employeeprofileinner}>
                                        <div className={dashBoardCss.employeeprofilepicture}>
                                          <img
                                            src="./assets/employeediv4profileicon.png" />
                                        </div>
                                        <div>
                                          <div className={dashBoardCss.employenamediv}>
                                            <p>Mehwish</p>
                                          </div>
                                          <div>
                                            online status
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default dashBoardMain