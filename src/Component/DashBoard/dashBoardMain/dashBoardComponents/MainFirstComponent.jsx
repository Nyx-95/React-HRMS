import React from 'react'
import dashBoardCss from "../dashBoardMain.module.css"
import Girl from '../../../../assets/Girl.png'
import GraphBar1 from '../../../../assets/graphbar1.png'
import GraphBar2 from '../../../../assets/graphbar2.png'
import GraphBar3 from '../../../../assets/graphbar3.png'

const MainFirstComponent = () => {
  return (
    <>
    <div className={dashBoardCss.firstupperdiv}>
                  <div className={dashBoardCss.firstupperIn}>
                    <div className={dashBoardCss.firstupperwrapper}>
                      <div className={dashBoardCss.firstupperinner}>
                        <div className={dashBoardCss.upperinfo}>
                          <div>
                            <h2>Hi Syed</h2>
                          </div>
                          <div className={dashBoardCss.Morningheading}>
                            <p> Good Morning</p>
                          </div>
                          <div className={dashBoardCss.Morningschedule}>
                            <p>12:00pm </p>
                          </div>
                          <div className={dashBoardCss.Morningschedule}>
                            <p>04-11-2022</p>
                          </div>
                          <div className={dashBoardCss.upperinfobutton}><button type="button"
                            className="btn btn-light">View Profile</button>
                          </div>
                        </div>
                        <div className={dashBoardCss.firstupperimage}><img src={Girl}
                          alt="Girl"></img>
                        </div>
                      </div>
                      <div className={dashBoardCss.stats}>
                        <div className={dashBoardCss.statsinnerdiv}>
                          <div className={dashBoardCss.statscount} id={dashBoardCss.statscount1id}>
                            <div className={dashBoardCss.statscountimg}>
                              <img src={GraphBar1} alt="Graph Bar" />
                            </div>
                            <div className={dashBoardCss.statscountnumber}>
                              <p>02</p>
                            </div>
                            <div className={dashBoardCss.statscountinfo}>
                              <p>Absent</p>
                            </div>
                          </div>
                          <div className={dashBoardCss.statscount} id={dashBoardCss.statscount2id}>
                            <div className={dashBoardCss.statscountimg}>
                              <img src={GraphBar2} alt="Graph Bar" />
                            </div>
                            <div className={dashBoardCss.statscountnumber}>
                              <p>18</p>
                            </div>
                            <div className={dashBoardCss.statscountinfo}>
                              <p>Attendance</p>
                            </div>
                          </div>
                          <div className={dashBoardCss.statscount} id={dashBoardCss.statscount3id}>
                            <div className={dashBoardCss.statscountimg}>
                              <img src={GraphBar3} alt="Graph Bar" />
                            </div>
                            <div className={dashBoardCss.statscountnumber}>
                              <p>06</p>
                            </div>
                            <div className={dashBoardCss.statscountinfo}>
                              <p>Late</p>
                            </div>
                          </div>
                          <div className={dashBoardCss.statscount} id={dashBoardCss.statscount4id}>
                            <div className={dashBoardCss.statscountbutton}>
                              <button type="button"
                                className="btn btn-primary shadow-none">View
                                </button>
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

export default MainFirstComponent