import React from 'react'
import dashBoardCss from "../dashBoardMain.module.css"
import heading from '../../../../assets/heading lines.png'

const GeneralQueries = () => {
  return (
    <>
    
    <div className={dashBoardCss.thirdupperdiv}>
                  <div className={dashBoardCss.Mytickets}>
                    <div className={dashBoardCss.myticketsinner}>
                      <div className={dashBoardCss.ticketwrapper2}>
                        <div className={dashBoardCss.mergeheadings}>
                          <div className={dashBoardCss.mergeheadinginner}>
                            <h5>General Queries</h5>
                            <i className="fa-solid fa-ellipsis"></i>
                          </div>
                          <img src={heading} alt="heading"></img>
                        </div>
                        <div className={`listouter ${dashBoardCss.ticketlistouter}`}>
                          <div className={`listinner ${dashBoardCss.ticketlistinner}`}>
                            <div className={`listing ${dashBoardCss.ticketlisting}`}>
                              <ul>
                                <a href="#"> <li>Feedback Form</li></a>
                                <a href="#"><li>Leave Form</li></a>
                                <a href="#"><li>Reimbursement Form</li></a>
                                <a href="#"><li>Pending Joining Form</li></a>
                                <a href="#"><li>Suggestion Form</li></a>
                                <a href="#"><li>Grievances Form</li></a>
                                <a href="#"><li>Service Requests Form</li></a>
              
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

export default GeneralQueries