import React from 'react'
import mainComponentCss from "./mainFirst.module.css"
import Girl from '../../../../../assets/Girl.png'
import GraphBar1 from '../../../../../assets/graphbar1.png'
import GraphBar2 from '../../../../../assets/graphbar2.png'
import GraphBar3 from '../../../../../assets/graphbar3.png'

const MainFirstComponent = () => {
  return (
    <>
      <div className={mainComponentCss.firstupperdiv}>
        <div className={mainComponentCss.firstupperIn}>
          <div className={mainComponentCss.firstupperwrapper}>
            <div className={mainComponentCss.firstupperinner}>
              <div className={mainComponentCss.upperinfo}>
                <div>
                  <h2>Hi Syed</h2>
                </div>
                <div className={mainComponentCss.Morningheading}>
                  <p> Good Morning</p>
                </div>
                <div className={mainComponentCss.Morningschedule}>
                  <p>12:00pm </p>
                </div>
                <div className={mainComponentCss.Morningschedule}>
                  <p>04-11-2022</p>
                </div>
                <div className={mainComponentCss.upperinfobutton}><button type="button"
                  className="btn btn-light">View Profile</button>
                </div>
              </div>
              <div className={mainComponentCss.firstupperimage}>
                <div className={mainComponentCss.firstupperimageInner}>
                  <img src={Girl} alt="Girl"></img>
                </div>
              </div>
            </div>
            <div className={mainComponentCss.stats}>
              <div className={mainComponentCss.statsinnerdiv}>
                <div className={mainComponentCss.statscount} id={mainComponentCss.statscount1id}>
                  <div className={mainComponentCss.statscountimg}>
                    <img src={GraphBar1} alt="Graph Bar" />
                  </div>
                  <div className={mainComponentCss.statscountnumber}>
                    <p>02</p>
                  </div>
                  <div className={mainComponentCss.statscountinfo}>
                    <p>Absent</p>
                  </div>
                </div>
                <div className={mainComponentCss.statscount} id={mainComponentCss.statscount2id}>
                  <div className={mainComponentCss.statscountimg}>
                    <img src={GraphBar2} alt="Graph Bar" />
                  </div>
                  <div className={mainComponentCss.statscountnumber}>
                    <p>18</p>
                  </div>
                  <div className={mainComponentCss.statscountinfo}>
                    <p>Attendance</p>
                  </div>
                </div>
                <div className={mainComponentCss.statscount} id={mainComponentCss.statscount3id}>
                  <div className={mainComponentCss.statscountimg}>
                    <img src={GraphBar3} alt="Graph Bar" />
                  </div>
                  <div className={mainComponentCss.statscountnumber}>
                    <p>06</p>
                  </div>
                  <div className={mainComponentCss.statscountinfo}>
                    <p>Late</p>
                  </div>
                </div>
                <div className={mainComponentCss.statscount} id={mainComponentCss.statscount4id}>
                  <div className={mainComponentCss.statscountbutton}>
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