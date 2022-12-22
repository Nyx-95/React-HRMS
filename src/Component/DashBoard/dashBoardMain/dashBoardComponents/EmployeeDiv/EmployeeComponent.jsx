import React from 'react'
import employeeCss from "./EmployeeComponent.module.css"
import heading from '../../../../../assets/heading lines.png'
import employeePic1 from "../../../../../assets/employeediv1profileicon.png"
import employeePic2 from "../../../../../assets/employeediv2profileicon.png"
import employeePic3 from "../../../../../assets/employeediv3profileicon.png"
import employeePic4 from "../../../../../assets/employeediv4profileicon.png"

const EmployeeComponent = () => {
  return (
    <>
       <div className={employeeCss.fourthlowerdiv}>
                  <div className={employeeCss.Employee}>
                    <div className={employeeCss.Employeeouter}>
                      <div className={employeeCss.Employeeinner}>
                        <div className={employeeCss.Employeewrapper}>
                          <div className={employeeCss.mergeheadings}>
                            <div className={employeeCss.mergeheadinginner}>
                              <h5>Employees</h5>
                              <i className="fa-solid fa-ellipsis"></i>
                            </div>
                            <img src={heading} alt="heading"></img>
                          </div>
                          <div className="btn-group" id={employeeCss.buttonGroupLfourdiv} role="group"
                            aria-label="Basic example">
                            <button type="button" className="btn btn-primary">My
                              Team</button>
                            <button type="button" className="btn btn-primary">All
                              Users</button>
                          </div>
                          <div className={employeeCss.employeelistouter}>
                            <div className={employeeCss.employeelistinner}>
                              <div className={employeeCss.employeelisting}>
                                <ul>
                                  <li>
                                    <div className={employeeCss.employeeprofilestatus}>
                                      <div className={employeeCss.employeeprofileinner}>
                                        <div className={employeeCss.employeeprofilepicture}>
                                          <img
                                            src={employeePic1} />
                                        </div>
                                        <div>
                                          <div className={employeeCss.employenamediv}>
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
                                    <div className={employeeCss.employeeprofilestatus}>
                                      <div className={employeeCss.employeeprofileinner}>
                                        <div className={employeeCss.employeeprofilepicture}>
                                          <img
                                            src={employeePic2} />
                                        </div>
                                        <div>
                                          <div className={employeeCss.employenamediv}>
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
                                    <div className={employeeCss.employeeprofilestatus}>
                                      <div className={employeeCss.employeeprofileinner}>
                                        <div className={employeeCss.employeeprofilepicture}>
                                          <img
                                            src={employeePic3} />
                                        </div>
                                        <div>
                                          <div className={employeeCss.employenamediv}>
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
                                    <div className={employeeCss.employeeprofilestatus}>
                                      <div className={employeeCss.employeeprofileinner}>
                                        <div className={employeeCss.employeeprofilepicture}>
                                          <img
                                            src={employeePic4} />
                                        </div>
                                        <div>
                                          <div className={employeeCss.employenamediv}>
                                            <p>Mehwish</p>
                                          </div>
                                          <div>
                                            online status
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className={employeeCss.employeeprofilestatus}>
                                      <div className={employeeCss.employeeprofileinner}>
                                        <div className={employeeCss.employeeprofilepicture}>
                                          <img
                                            src={employeePic1} />
                                        </div>
                                        <div>
                                          <div className={employeeCss.employenamediv}>
                                            <p>Hassan</p>
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
    </>
  )
}

export default EmployeeComponent